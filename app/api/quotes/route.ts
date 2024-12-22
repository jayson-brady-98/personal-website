import { NextResponse } from 'next/server';

const READWISE_TOKEN = process.env.READWISE_ACCESS_TOKEN;

async function fetchFromExportApi() {
  let fullData = [];
  let nextPageCursor = null;

  while (true) {
    const queryParams = new URLSearchParams();
    if (nextPageCursor) {
      queryParams.append('pageCursor', nextPageCursor);
    }

    const response = await fetch('https://readwise.io/api/v2/export/?' + queryParams.toString(), {
      headers: {
        Authorization: `Token ${READWISE_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Readwise API error: ${response.status} ${response.statusText}`);
    }

    const responseJson = await response.json();
    
    if (!responseJson.results) {
      throw new Error('Invalid response format from Readwise API');
    }

    fullData.push(...responseJson.results);
    nextPageCursor = responseJson.nextPageCursor;
    
    if (!nextPageCursor) {
      break;
    }
  }

  // Extract and flatten all highlights
  const allHighlights = fullData.flatMap(book => 
    book.highlights.map((highlight: { text: string; is_favorite: boolean }) => ({
      text: highlight.text,
      author: book.author,
      is_favorite: highlight.is_favorite
    }))
  );

  // Filter only favorite highlights
  return allHighlights.filter(highlight => highlight.is_favorite);
}

export async function GET() {
  try {
    console.log('API Token:', READWISE_TOKEN?.slice(0, 5) + '...');
    const favorites = await fetchFromExportApi();
    console.log('Fetched favorites:', favorites);
    return NextResponse.json(favorites);
  } catch (error) {
    console.error('Detailed API error:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
} 
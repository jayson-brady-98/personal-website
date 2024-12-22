export default async function SongsPage({
  params,
  searchParams,
}: {
  params: Promise<Record<string, never>>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  await params;
  await searchParams;
  
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <main className="flex-grow relative h-screen">
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/backgrounds/music-background.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-16 flex justify-center items-center min-h-full">
          <iframe 
            style={{borderRadius:"12px"}} 
            src="https://open.spotify.com/embed/playlist/0x48tYY5ko6ZU3NdG0OBrt?utm_source=generator" 
            width="100%" 
            className="w-full md:w-1/2 max-w-2xl" 
            height="352" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          />
        </div>
      </main>
    </div>
  )
}

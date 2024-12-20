import { getAllEssays } from '@/lib/essays'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'

// Define a type for the props used in MDX components
type MDXComponentProps = {
  children?: React.ReactNode;
  [key: string]: any; // If there are additional props, you can specify them here
};

// Define custom components for MDX
const components = {
  blockquote: (props: MDXComponentProps) => (
    <blockquote className="border-l-4 border-[#EE9F3B] pl-4 italic my-6">
      {props.children}
    </blockquote>
  ),
  h2: (props: MDXComponentProps) => (
    <h2 className="text-[#EE9F3B] text-2xl font-bold mt-6 mb-3" {...props} />
  ),
  hr: () => (
    <hr className="border-[#EE9F3B] my-8" />
  ),
  sup: (props: MDXComponentProps) => (
    <sup className="text-[#EE9F3B]" {...props} />
  ),
  // Add styling for the footnotes section
  footer: (props: MDXComponentProps) => (
    <footer className="mt-12 pt-8 border-t border-[#EE9F3B]">
      <div className="text-[#F7DAAB] text-sm">
        {props.children}
      </div>
    </footer>
  )
}

export default async function Writing() {
  const essays = await getAllEssays()

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <main className="flex-grow relative">
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/backgrounds/FR3.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            {essays.map((essay, index) => (
              <article 
                key={essay.slug}
                className={`mb-20 bg-[#F7DAAB]/40 backdrop-blur-sm rounded-lg p-8 ${index === 0 ? 'mt-8' : ''}`}
              >
                <header className="mb-8">
                  <h2 className="text-3xl font-bold text-[#EE9F3B] mb-2">
                    {essay.frontmatter.title}
                  </h2>
                  <time className="text-sm text-[#c94128]">
                    {new Date(essay.frontmatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </header>
                
                <div className="prose prose-lg max-w-none [&>p]:text-[#F7DAAB] [&>ul]:text-[#F7DAAB] [&>ol]:text-[#F7DAAB] [&>blockquote]:text-[#F7DAAB] [&>h2]:text-[#EE9F3B] [&>.footnotes]:mt-12 [&>.footnotes]:pt-8 [&>.footnotes]:border-t [&>.footnotes]:border-[#EE9F3B] [&>.footnotes>h2]:text-[#EE9F3B] [&>.footnotes>ol]:text-[#F7DAAB] [&>.footnotes>ol>li]:text-[#F7DAAB]">
                  <MDXRemote 
                    source={essay.content} 
                    components={components}
                    options={{
                      parseFrontmatter: true,
                      mdxOptions: {
                        remarkPlugins: [remarkGfm],
                        rehypePlugins: []
                      }
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

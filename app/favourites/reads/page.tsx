export default async function ReadsPage({
  params,
  searchParams,
}: {
  params: Promise<Record<string, never>>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  await params;
  await searchParams;
  
  return (
    <>
      <section className="min-h-screen relative overflow-hidden">
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url('/backgrounds/reads-background.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 80%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative pt-12 sm:pt-24 pb-16">
          {/* Books Section */}
          <div className="space-y-8 mb-16">
            <h1 className="text-5xl font-bold text-[#F7DAAC] text-center">Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First book card */}
              <div className="group relative bg-[#4B827D]/30 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <div className="relative aspect-[2/3] transform group-hover:rotate-3 transition-transform duration-300">
                      <img
                        src="/books/Woi.jpg"
                        alt="Wisdom of Insecurity"
                        className="object-cover rounded-lg shadow-lg absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-2xl font-semibold text-[#EEA139]">Wisdom of Insecurity</h3>
                    <p className="text-[#F7DAAC] text-sm">by Alan Watts</p>
                    <p className="text-[#F7DAAC] italic">I love reading Watts for his entertaining analogies and his colourful logical rigor. I learn something new about life every time I read this book.</p>
                  </div>
                </div>
              </div>

              {/* Second book card */}
              <div className="group relative bg-[#4B827D]/30 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <div className="relative aspect-[2/3] transform group-hover:rotate-3 transition-transform duration-300">
                      <img
                        src="/books/dogs.jpg"
                        alt="The Boy Who Was Raised as a Dog"
                        className="object-cover rounded-lg shadow-lg absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-2xl font-semibold text-[#EEA139]">The Boy Who Was Raised as a Dog</h3>
                    <p className="text-[#F7DAAC] text-sm">by Bruce Perry, MD</p>
                    <p className="text-[#F7DAAC] italic">Child psychology is fascinating because our early experiences and the way we develop in our early years have a profound impact on our adult lives. The stories in this book are both devastating and insightful.</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative bg-[#4B827D]/30 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <div className="relative aspect-[2/3] transform group-hover:rotate-3 transition-transform duration-300">
                      <img
                        src="/books/new_world.jpg"
                        alt="A New World Begins"
                        className="object-cover rounded-lg shadow-lg absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-2xl font-semibold text-[#EEA139]">A New World Begins</h3>
                    <p className="text-[#F7DAAC] text-sm">by Jeremy D. Popkin</p>
                    <p className="text-[#F7DAAC] italic">For some elusive reason, I'm deeply interested in the French Revolution. This is one of the few history books I've read that was genuinly engaging.</p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-[#4B827D]/30 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <div className="relative aspect-[2/3] transform group-hover:rotate-3 transition-transform duration-300">
                      <img
                        src="/books/human_nature.jpg"
                        alt="The Laws of Human Nature"
                        className="object-cover rounded-lg shadow-lg absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-2xl font-semibold text-[#EEA139]">The Laws of Human Nature</h3>
                    <p className="text-[#F7DAAC] text-sm">by Robert Greene</p>
                    <p className="text-[#F7DAAC] italic">I wish I just read this book (And Robert Sapolsky's book 'Behave') instead of paying for a psychology degree. I love Greenes storytelling-style and how he draws applicable insights from history. This is one of those books where I'll just read a chapter here and there when I need to; so in a way, I'm never not reading this book.</p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-[#4B827D]/30 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <div className="relative aspect-[2/3] transform group-hover:rotate-3 transition-transform duration-300">
                      <img
                        src="/books/lessons_history.jpg"
                        alt="The Lessons of History"
                        className="object-cover rounded-lg shadow-lg absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-2xl font-semibold text-[#EEA139]">The Lessons of History</h3>
                    <p className="text-[#F7DAAC] text-sm">by Will Durant</p>
                    <p className="text-[#F7DAAC] italic">Durant's writing style is so poetic and his insights are so profound. Because this book is so short, I love coming back to it when I'm between other books. Or I'll read it after reading another history book to put it into perspective.</p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-[#4B827D]/30 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <div className="relative aspect-[2/3] transform group-hover:rotate-3 transition-transform duration-300">
                      <img
                        src="/books/money.jpg"
                        alt="The Psychology of Money"
                        className="object-cover rounded-lg shadow-lg absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-2xl font-semibold text-[#EEA139]">The Psychology of Money</h3>
                    <p className="text-[#F7DAAC] text-sm">by Morgan Housel</p>
                    <p className="text-[#F7DAAC] italic">This is another book that I'll reread chapters of when I need to. A lot of my financial literacy comes from this book.</p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-[#4B827D]/30 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <div className="relative aspect-[2/3] transform group-hover:rotate-3 transition-transform duration-300">
                      <img
                        src="/books/misery.jpg"
                        alt="Misery"
                        className="object-cover rounded-lg shadow-lg absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-2xl font-semibold text-[#EEA139]">Misery</h3>
                    <p className="text-[#F7DAAC] text-sm">by Stephen King</p>
                    <p className="text-[#F7DAAC] italic">'Misery' got me back into reading after I finished school. I love the characters that King creates because they have such depth. This is not a book at read at night.</p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-[#4B827D]/30 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <div className="relative aspect-[2/3] transform group-hover:rotate-3 transition-transform duration-300">
                      <img
                        src="/books/seveneves.jpg"
                        alt="Seveneves"
                        className="object-cover rounded-lg shadow-lg absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-2xl font-semibold text-[#EEA139]">Seveneves</h3>
                    <p className="text-[#F7DAAC] text-sm">by Neal Stephenson</p>
                    <p className="text-[#F7DAAC] italic">I have a love-hate relationship with this book. On the one hand, I love the sci-fi, post-apocalyptic story; it's right in my sweet spot. On the other hand, it's excessively long due to Stephenson's tendency to overexplain. It's unlikely that I'll reread it, but I'll reminisce on my memory of it.</p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-[#4B827D]/30 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <div className="relative aspect-[2/3] transform group-hover:rotate-3 transition-transform duration-300">
                      <img
                        src="/books/grownup.jpg"
                        alt="The Grownup"
                        className="object-cover rounded-lg shadow-lg absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-4">
                    <h3 className="text-2xl font-semibold text-[#EEA139]">The Grownup</h3>
                    <p className="text-[#F7DAAC] text-sm">by Gillian Flynn</p>
                    <p className="text-[#F7DAAC] italic">An utterly stomach-churning short story. I love everything Flynn writes, but this might be my favourite.</p>
                  </div>
                </div>
              </div>


              {/* ... Repeat for other books ... */}
            </div>
          </div>

          {/* Blog Posts Section */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-[#F7DAAB] text-center">Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Blog Post Card */}
              <div className="group relative bg-[#4B827D]/30 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-semibold text-[#EEA139]">Art Isn't Allowed To Take Up Space Anymore</h3>
                  </div>
                  <p className="text-[#F7DAAC] text-sm">Annika (The Internet is my friend)</p>
                  <p className="text-[#F7DAAC]">I love the internet and technology, but it feels like the internet is becoming more cluttered, neuotically productive, and visually stale. This article made me think a lot about ownership and the value of having physical things (like DVDs) because of the experience and serendipity they evoke. </p>
                  <a 
                    href="https://substack.com/@thelieselotte/p-146129526" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block text-[#EEA139] hover:text-[#F7DAAC] transition-colors duration-200"
                  >
                    Read More →
                  </a>
                </div>
              </div>

              <div className="group relative bg-[#4B827D]/30 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-semibold text-[#EEA139]">The Game Theory of Strategic Ambiguity Explained With Seinfeld</h3>
                  </div>
                  <p className="text-[#F7DAAC] text-sm">Lionel Page (Optimally Irrational)</p>
                  <p className="text-[#F7DAAC]">An interesting commentary on how we all interact with each other. One of those pieces that made me look at the people around medifferently.</p>
                  <a 
                    href="https://www.optimallyirrational.com/p/the-game-theory-of-strategic-ambiguity" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block text-[#EEA139] hover:text-[#F7DAAC] transition-colors duration-200"
                  >
                    Read More →
                  </a>
                </div>
              </div>

              <div className="group relative bg-[#4B827D]/30 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-semibold text-[#EEA139]">The Day You Became A Better Writer</h3>
                  </div>
                  <p className="text-[#F7DAAC] text-sm">Scott Adams (The Dilbert Blog)</p>
                  <p className="text-[#F7DAAC]">The title says it all. I reread this every time I need to write something significant.</p>
                  <a 
                    href="https://dilbertblog.typepad.com/the_dilbert_blog/2007/06/the_day_you_bec.html" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block text-[#EEA139] hover:text-[#F7DAAC] transition-colors duration-200"
                  >
                    Read More →
                  </a>
                </div>
              </div>

              <div className="group relative bg-[#4B827D]/30 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-semibold text-[#EEA139]">Think Like Reality</h3>
                  </div>
                  <p className="text-[#F7DAAC] text-sm">Eliezer Yudkowsky (LessWrong)</p>
                  <p className="text-[#F7DAAC]">This is one of those pieces that make me feel enlightened afterwards, but I struggle to apply the insights consistently on account of being an irrational human.</p>
                  <a 
                    href="https://www.lesswrong.com/posts/tWLFWAndSZSYN6rPB/think-like-reality" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block text-[#EEA139] hover:text-[#F7DAAC] transition-colors duration-200"
                  >
                    Read More →
                  </a>
                </div>
              </div>

              <div className="group relative bg-[#4B827D]/30 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-semibold text-[#EEA139]">Are We Living in the Age of Info-Determinism?</h3>
                  </div>
                  <p className="text-[#F7DAAC] text-sm">Joshua Rothman (The New Yorker)</p>
                  <p className="text-[#F7DAAC]">A concerning article on how the future of information consumption will shape how we think.</p>
                  <a 
                    href="https://www.newyorker.com/culture/open-questions/are-we-living-in-the-age-of-info-determinism" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block text-[#EEA139] hover:text-[#F7DAAC] transition-colors duration-200"
                  >
                    Read More →
                  </a>
                </div>
              </div>
              
              {/* Duplicate the above card structure for more blog posts */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
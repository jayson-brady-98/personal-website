import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function getAllEssays() {
  const essaysDirectory = path.join(process.cwd(), 'app/writing/essays')
  const filenames = fs.readdirSync(essaysDirectory)
  
  const essays = filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => {
      const filePath = path.join(essaysDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: filename.replace('.mdx', ''),
        frontmatter: data,
        content
      }
    })
    .sort((a, b) => {
      return new Date(b.frontmatter.date).getTime() - 
             new Date(a.frontmatter.date).getTime()
    })

  return essays
}

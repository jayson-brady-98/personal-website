import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"
import { SiX } from "@icons-pack/react-simple-icons"

type Props = {
  params: Promise<{}>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ContactPage(props: Props) {
  await props.params
  await props.searchParams

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-24 px-4">
      <h1 className="text-3xl font-bold text-[#EEA03B] mb-8">Let&apos;s Connect</h1>
      
      <div className="flex flex-col items-center gap-4">

        
        <div className="flex gap-6">
          <Link 
            href="mailto:jaysonbrady123@gmail.com"
            className="text-[#F7DAAC] hover:text-[#EEA03B] transition-colors"
          >
            <Mail className="w-6 h-6" />
          </Link>

          <Link 
            href="https://linkedin.com/in/jayson-brady-93ba8614b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F7DAAC] hover:text-[#EEA03B] transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </Link>

          <Link 
            href="https://x.com/jaysonbradyy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F7DAAC] hover:text-[#EEA03B] transition-colors"
          >
            <SiX className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </main>
  )
}
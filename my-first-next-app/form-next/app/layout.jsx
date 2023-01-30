import './globals.css'
import { Anton } from "@next/font/google"

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable:"--font-anton",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${anton.className} mx-16 my-12`} >
        
        {children}
      </body>
    </html>
  )
}

import { Metadata } from 'next'
import './globals.css'
import { Sora } from "next/font/google"
const sora = Sora({subsets:['latin']})
export const metadata:Metadata = {
  title:'candella: fashion'
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html className={sora.className}>
    <body className='overflow-x-hidden'>
      {children}
    </body>
  </html>)

}

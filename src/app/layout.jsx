import './globals.css'
import { livvic } from './font'
import { Navbar, Footer } from '@/components/shared'

export const metadata = {
  title: "myTeam",
  description: "Finding the right people and building high performing teams.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${livvic.variable}`}>
      <body className="overflow-x-hidden font-livvic bg-primaryGreen text-white">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <p className='text-5xl font-bold'>Hello World</p>
      <p className='text-xl font-bold'>-Azis Zuhri</p>
    </div>
  )
}

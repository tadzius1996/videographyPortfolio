import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../components/Header'
import Hero from '@/components/Hero'
import Works from '@/components/Works'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Insentive from '@/components/Insentive'
import Testimonials from '@/components/Testimonials'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='overflow-x-hidden'>
     <Header/>
     <Hero/>
     <Works/>
     <Testimonials/>
     <Contact/>
   </div>
  )
}

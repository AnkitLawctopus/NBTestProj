import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>NB test site for <Link href="https://cse.noticebard.com/">CSE NoticeBard</Link></h1>
      <p>How to use?</p>
      <p>1. Go to <Link href="https://cse.noticebard.com/">CSE NoticeBard</Link> and open any post</p>
      <p>2. Copy slug of the post, for eg <Link href="https://cse.noticebard.com/software-engineering/internship-opportunity-at-ibm-ahmedabad/">/internship-opportunity-at-ibm-ahmedabad/</Link></p>
      <p>3. Copy paste that slug in current URL, which will look like <Link href="/internship-opportunity-at-ibm-ahmedabad/">this</Link></p>
    </div>
  )
}

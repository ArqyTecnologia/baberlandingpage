/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'

import styles from "../styles/Home.module.scss"

import barbearia from "../assets/images.svg"

import { Header } from '../components/Header'
import { About } from '../components/About'
import { Services } from '../components/Services'
import { Footer } from '../components/Footer'
export default function Home() {
  return (
    <>
      <Head>
        <title>Baber LandingPAge</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>


      <div className={styles.bghome}>
        <div className={styles.container}>
          <Header />
        </div>
      </div>
      <div className={styles.container}>
        <About />

      </div>
      <div className={styles.container}>
        <div className={styles.service}>
          <Services />
        </div>
        
      </div>

      <Footer/>

    </>
  )
}

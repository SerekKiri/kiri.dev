import Head from 'next/head'
import type { NextPage } from 'next'
import { IconContext } from "react-icons"
import styles from '../styles/Home.module.css'
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiSpacex, SiVuedotjs, SiNuxtdotjs, SiNestjs, SiNextdotjs, SiReact } from 'react-icons/si'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kacper Potyrała</title>
        <meta name="description" content="21 years old software enginner based in Poland" />
        <meta property="og:title" content="Kacper Potyrała - Space Inside" />
        <meta property="og:image" content="https://kiri.dev/image.jpg" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content="kapotyrala" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navigation}>
        <IconContext.Provider value={{ className: styles.navigationIcon }}>
          <SiSpacex size={50} />
        </IconContext.Provider>
        <div className={styles.navigationLinks}>
          <a href="https://github.com/SerekKiri" className={styles.navigationLink}>
            <IconContext.Provider value={{ style: { marginLeft: '0.4rem' } }}>
              <FaGithub size={22} />
            </IconContext.Provider>
          </a>
          <a href="https://x.com/kapotyrala" className={styles.navigationLink}>
            <IconContext.Provider value={{ style: { marginLeft: '0.4rem' } }}>
              <FaTwitter size={22} />
            </IconContext.Provider>
          </a>
          <a href="https://www.linkedin.com/in/kiri" className={styles.navigationLink}>
            <IconContext.Provider value={{ style: { marginLeft: '0.4rem' } }}>
              <FaLinkedinIn size={22} />
            </IconContext.Provider>
          </a>
        </div>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Kacper Potyrała
        </h1>
        <p className={styles.description}>
          {new Date().getFullYear() - 2001} y.o. software engineer
        </p>
        <div className={styles.techStack}>
          <SiReact size={20} />
          <SiNextdotjs size={20} />
          <SiVuedotjs size={20} />
          <SiNuxtdotjs size={20} />
          <SiNestjs size={20} />
        </div>
      </main>
    </div>
  )
}

export default Home

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Tester!</title>
   
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p id="platter"/>
      </main>

      <Footer />
    </div>
  )
}

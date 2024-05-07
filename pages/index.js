import Head from 'next/head'
import Header from '@components/Header'
//import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Tester!</title>
   
      </Head>

      <main>
        <Header title="Welcome to my app!" />
          <h5 sponge> <a href ="?sponge"> Return Context </a></h5>
        <p id="sponge"> 
         The EF is  <code> returncontext.js </code>

          <h5 cheese><a href="?cheese"> Just Return </a></h5>
        </p>
            <p id="cheese">
          The EF is <code>return.js</code>
        </p>
      </main>

   
    </div>
  )
}

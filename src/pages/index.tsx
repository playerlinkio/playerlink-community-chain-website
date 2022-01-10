import type { NextPage } from 'next';
import Head from 'next/head';
import Home from "./home";
const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PlayerLink-Community</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
          <Home></Home>
      </header>
    </div>
  )
}

export default IndexPage

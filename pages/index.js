import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({results}) {
  
  return (
    <div className="
    bg-[#06202A] text-gray-300 h-full">
      <Head > 
        <title>Hulu Build</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{"height": "100vh"}} className="overflow-x-hidden">
      <Header />
      <Nav />
      <Results results={results}/>
      </main>

    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url
}
`).then((res) => res.json());

return {
  props: {
    results: request.results,
  }
}

}
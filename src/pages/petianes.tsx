import MembersView from '@/views/MembersView'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>PET Computação - Petianes</title>
      </Head>
      <MembersView />
    </>
  )
}

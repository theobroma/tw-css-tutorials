import Head from 'next/head';
import Seaction1 from '@/components/Seaction-1';
import Seaction2 from '@/components/Seaction-2';
import Seaction4 from '@/components/Seaction-4';
import Seaction5 from '@/components/Seaction-5';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-2xl font-bold">List of Pages</h1>
        <Seaction1 />
        <Seaction2 />
        <Seaction4 />
        <Seaction5 />
      </main>
    </div>
  );
}

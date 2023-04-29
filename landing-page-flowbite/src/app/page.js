import Head from 'next/head';
import Seaction1 from '@/components/Seaction-1';
import Seaction2 from '@/components/Seaction-2';
import Seaction3 from '@/components/Seaction-3';
import Seaction4 from '@/components/Seaction-4';
import Seaction5 from '@/components/Seaction-5';
import Seaction6 from '@/components/Seaction-6';
import Footer from '@/components/Footer';

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
        <Seaction3 />
        <Seaction4 />
        <Seaction5 />
        <Seaction6 />
        <Footer />
      </main>
    </div>
  );
}

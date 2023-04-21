import Head from "next/head";
import PageList from "../components/PageList";
import Seaction1 from "../components/Seaction-1";

export default function Home() {
    return (
        <div>
            <Head>
                <title>My Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1 className="text-2xl font-bold">List of Pages</h1>
                <PageList />
                <Seaction1 />
            </main>
        </div>
    );
}

import Navbar from '../components/navbar';
import '../scss/styles.scss';
import Head from 'next/head';

function MyApp({Component, pageProps}) {
    return (

        <div>

            <Head>
                <title>Repo Finder</title>
            </Head>

            <Navbar></Navbar>
            
            <div className="page">

            <Component {...pageProps}/>

            </div>


        </div>

    )

}

export default MyApp;
import Head from "next/head";

import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
    
    return (
        <>
            <Head>
                <title>{`Female Daily - ${props.meta.title}`}</title>
                <meta name="description" content={props.meta.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={props.meta.favicon.src} />
            </Head>
            <Header />
            <Content children={props.children}/>
            <Footer />
        </>
    )
}
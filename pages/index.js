import Layout from "@/components/Layout";

const META = {
    title: "Home",
    description: "Hey SpiderMonkey, crawl me as homepage",
    favicon: {
        src: "/favicon.ico"
    }
}

export default function Home(props) {
    
    return (
        <Layout meta={props.meta} >
            <div id="ads-space">
                HOMEPAGE CONTENT
            </div>
            
            <section id="editor-choice">

            </section>
            
            <section id="match-products">

            </section>
            
            <section id="campaign-internal">

            </section>
            
            <section id="articles-latest">

            </section>
            
            <section id="reviews-latest">

            </section>
            
            <section id="groups-popular">

            </section>
            
            <section id="videos-latest">

            </section>
            
            <section id="products-latest-trend">

            </section>
            
            <section id="brands-top-n">

            </section>
        </Layout>
    )
};

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_APP_API_BASE_URL}/wp`);
    const wp = await res.json();
    return {
        props: {
            meta: META,
            fdnWP: wp
        }
    }
}
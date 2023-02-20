import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useDidMount } from "hooks/useDidMount";
import Layout from "@/components/Layout";
import { changePageName } from "@/redux/actions/app.reducer";
import { whichSideRender } from "@/helpers";
import { counter } from "@/utils";

/* -------------------- CONFIG/CONSTANTS -------------------- */
const counterId = counter();
const META = {
    title: "Home",
    description: "Hey SpiderMonkey, crawl me as homepage",
    favicon: {
        src: "/favicon.ico"
    }
};

/* -------------------- HOMEPAGE START -------------------- */
export default function Home(props) {
    /* Hooks_Start */
    const dispatch = useDispatch();
    const didMount = useDidMount();
    
    useEffect(() => {
        console.log("WHICH SIDE: ", whichSide)
        console.log("DIDMOUNT: ", didMount)
        if (whichSide === "SERVER_SIDE") dispatch(changePageName(props.meta.title))
        // if (didMount) dispatch()
    }, [])
    /* Hooks_End */

    /* Event_Handlers_Start */
    /**
     * contain function handlers with prefix "handle".
     * naming tips: handle<event><keterangan>
     */

    /* Event_Handlers_End */

    /* Helpers_Start */
    /**
     * contain helper implementation
     * or misc
     */
    let whichSide = whichSideRender(counterId);
    
    /* Helpers_End */
    
    /* View */
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

/* -------------------- NEXT SSG -------------------- */
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
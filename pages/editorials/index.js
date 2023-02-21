import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useDidMount } from "hooks/useDidMount";
import Layout from "@/components/Layout";
import { changePageName } from "@/redux/actions/app.reducer";

const META = {
    title: "Editorial",
    description: "Hey SpiderMonkey, crawl me as editorialpage",
    favicon: {
        src: "/favicon.ico"
    }
};

export default function Editorial() {
    const dispatch = useDispatch();
    const didMount = useDidMount();
        
    useEffect(() => {
        dispatch(changePageName(META.title))
        // if (didMount) dispatch()
    }, [])

    return (
        <Layout meta={META} >
            <div>EDITORIAL CONTENT</div>
        </Layout>
    )
};
import Layout from "@/components/Layout";

const META = {
    title: "Editorial",
    description: "Hey SpiderMonkey, crawl me as editorialpage",
    favicon: {
        src: "/favicon.ico"
    }
}

export default function Editorial() {
    return (
        <Layout meta={META} >
            <div>EDITORIAL CONTENT</div>
        </Layout>
    )
};
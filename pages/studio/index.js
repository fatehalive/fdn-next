import Layout from "@/components/Layout";

const META = {
    title: "Studio",
    description: "Hey SpiderMonkey, crawl me as studiopage",
    favicon: {
        src: "/favicon.ico"
    }
}

export default function Studio() {
    return (
        <Layout meta={META} >
            <div>STUDIO CONTENT</div>
        </Layout>
    )
};
import Layout from "@/components/Layout";

const META = {
    title: "Reviews",
    description: "Hey SpiderMonkey, crawl me as reviewpage",
    favicon: {
        src: "/favicon.ico"
    }
}

export default function Review() {
    return (
        <Layout meta={META} >
            <div>REVIEW CONTENT</div>
        </Layout>
    )
};
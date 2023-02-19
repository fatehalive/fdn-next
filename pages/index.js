import Layout from "@/components/Layout";

const META = {
    title: "Home",
    description: "Hey SpiderMonkey, crawl me as homepage",
    favicon: {
        src: "/favicon.ico"
    }
}

export default function Home() {
    return (
        <Layout meta={META} >
            <div>HOMEPAGE CONTENT</div>
        </Layout>
    )
};
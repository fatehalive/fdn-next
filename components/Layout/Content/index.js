import SideBar from "@/components/Layout/SideBar";

export default function Content(props) {
    return (
        <main style={{ border: '1px solid black' }}>
            <SideBar />
            {props.children}
        </main>
    )
};
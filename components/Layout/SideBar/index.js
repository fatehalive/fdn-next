import Link from "next/link";

export default function SideBar() {
    return (
        <aside>
            <nav>
                <ul>
                    <li>
                        <Link href="/editorials">Editorials</Link>
                    </li>
                    <li>
                        <Link href="/reviews">Reviews</Link>
                    </li>
                    <li>
                        <Link href="/studio">Studio</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
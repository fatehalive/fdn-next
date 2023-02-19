import Link from "next/link";

export default function Header() {
    return (
        <header style={{ border: '1px solid black' }}>
            <button>iconmenu</button>
            <Link href="/"><img src="/icons/logo-fd.svg" alt="logo-brand" /></Link>

            <div>
                <input type="search"></input>
            </div>
            
            <button>Login/Signup</button>
        </header>
    )
};
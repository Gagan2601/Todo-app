'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });

const Navbar = () => {
    const searchParams = useSearchParams();
    const todosFilter = searchParams.get('todos');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {isClient && <ParticlesBg type="square" bg={true} />}
            <nav>
                <Link href="/" className={todosFilter === null ? "active" : ""}>All</Link>
                <Link href="/?todos=active" className={todosFilter === "active" ? "active" : ""}>Active</Link>
                <Link href="/?todos=completed" className={todosFilter === "completed" ? "active" : ""}>Completed</Link>
            </nav>
        </>
    );
}

export default Navbar;

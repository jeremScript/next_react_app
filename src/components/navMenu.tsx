'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"

export default function NavMenu() {
    const pathname = usePathname();

    return (
        <nav>
            <ul>
                <li>
                    <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={`link ${pathname === '/profil' ? 'active' : ''}`}
                        href="/profil"
                    >
                        Profil
                    </Link>
                </li>
                <li>
                    <Link
                        className={`link ${pathname === '/absences' ? 'active' : ''}`}
                        href="/absences"
                    >
                        Absences
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
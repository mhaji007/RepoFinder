import React from 'react';
import Link from 'next/link';

 const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/index" as="/index">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about" as="/about">
                        <a>
                            About</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;


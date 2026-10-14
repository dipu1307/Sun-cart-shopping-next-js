'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children, onClick, className=""}) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link href={href}
        onClick={onClick}
        className={`${className} ${isActive? "font-semibold text-green-900": "text-gray-600 hover:text-green-800"}`}>
            {children}
        </Link>
    );
};

export default NavLink;
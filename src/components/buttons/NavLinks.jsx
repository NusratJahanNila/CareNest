"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({href, children}) => {
    const path = usePathname();
    
    const isActive = href === '/' 
        ? path === href  
        : path.startsWith(href);
    
    return (
        <Link 
            className={`${isActive ? "text-primary" : "text-accent-content"} font-bold text-lg`} 
            href={href}
        >
            {children}
        </Link>
    );
};

export default NavLinks;
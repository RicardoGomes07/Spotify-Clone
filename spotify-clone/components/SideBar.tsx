"use client";
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import Box from "./Box";

 // This is a client component

interface SideBarProps {
    children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({
    children,
    // params,
}) => {
    const pathname = usePathname(); // lets you read the current URL's pathname.

    const routes = useMemo(() => [
        {
            icon : HiHome,
            label : 'Home',
            active : pathname !== '/home',
            href: '/',
        },
        {
            icon : BiSearch,
            label : 'Search',
            active : pathname === '/search',
            href: '/search',
        }
    ], [pathname]); // This is where you would define your routes
    return ( 
        <div className='flex h-full'>
            <div
                className="
                    hidden
                    md:flex
                    flex-col
                    gap-y-2
                    bg-black
                    h-full
                    w-[300px]
                    p-2
                "
            >
                <Box>
                    Sidebar Navigation
                </Box>
            </div>
        </div>
    );
}

export default SideBar;
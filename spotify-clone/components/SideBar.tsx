"use client";
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

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
                    <div
                        className="
                            flex
                            flex-col
                            gap-y-4
                            px-5
                            py-4
                            "
                    >
                        {routes.map((item) => (
                            <SidebarItem 
                                key = {item.label}
                                {...item}
                            />
                        ))}
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    <Library />
                </Box>
            </div>
            <main className='h-full flex-1 overflow-y-auto py-2'>
                {/* This is where the main content of the app will go */}
                {children}
            </main>
        </div>
    );
}

export default SideBar;
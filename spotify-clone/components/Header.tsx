"use client"
import { useRouter } from "next/navigation";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    const router = useRouter();
    const handleLogout = () => {
        // Perform logout logic here, such as clearing tokens or redirecting to a login page
        console.log('Logout clicked');
        router.push('/login'); // Redirect to the login page after logout
    }
    return (
        <div
            className={twMerge(`
                h-fit
                bg-gradient-to-b
                from-red-800  
                p-6 
            `,
                className
            )}
        >
            <div className="
                w-full
                mb-4
                flex
                items-center
                justify-between
            ">
                <div className="
                    hidden
                    md:flex
                    gap-x-2
                    items-center
                ">
                    {/*This button is for going back to the previous page*/}
                    <button
                        onClick={() => router.back()}
                        className="
                            rounded-full
                            bg-black
                            flex
                            items-center
                            justify-center
                            hover:opacity-75
                            transition
                        "
                    >
                        <RxCaretLeft 
                        className="text-white"
                        size={35}/>
                    </button>
                    {/*This button is for going to the next page*/}
                    <button
                        onClick={() => router.forward()}
                        className="
                            rounded-full
                            bg-black
                            flex
                            items-center
                            justify-center
                            hover:opacity-75
                            transition
                        "
                    >
                         {/*This button is for going back to the previous page*/}
                        <RxCaretRight 
                        className="text-white"
                        size={35}/>
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button
                        className="
                        rounded-full
                        bg-white
                        p-2
                        flex
                        items-center
                        justify-center
                        hover:opacity-80
                        transition
                        "
                    >    
                        <HiHome className="text-black" size={25} />
                    </button>
                    <button
                        className="
                        rounded-full
                        bg-white
                        p-2
                        flex
                        items-center
                        justify-center
                        hover:opacity-80
                        transition
                        "
                    >    
                        <BiSearch className="text-black" size={25} />
                    </button>
                </div>
                <div className="
                    flex
                    justify-between
                    gap-x-4
                    items-center"
                >
                 <>
                    <div>
                        <Button
                            onClick={() => {}}
                            className="
                                bg-transparent
                                text-neutral-300
                                font-medium
                            "
                        >
                            Sign up
                        </Button>
                    </div>
                    <div>
                        <Button
                            onClick={() => {}}
                            className="
                                bg-white
                                px-6
                                py-2
                            "
                        >
                            Log in
                        </Button>
                    </div>
                 </>
                </div>
            </div> 
            {children}
        </div>
    )
}
export default Header;
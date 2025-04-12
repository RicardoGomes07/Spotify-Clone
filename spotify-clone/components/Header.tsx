"use client"
import { useRouter } from "next/navigation";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

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
                from-emerald-800  
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
            </div> 
        </div>
    )
}
export default Header;
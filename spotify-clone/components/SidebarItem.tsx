import { IconType } from "react-icons";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
    icon: IconType; 
    label: string;
    active?: boolean;
    href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    icon: Icon, 
    label,
    active,
    href,
}) => {
    return ( 
        // This is a client component, so we can use the Link component from next/link
        // to navigate to the different pages in our app.
        // twMerge is a utility that allows us to merge class names together, and it is used here to conditionally apply the active class to the link.
        // The active class is applied when the item is active, and it changes the text color to white.
        <Link
            href={href}
            className={twMerge(`
                flex
                flex-row
                h-auto
                items-center
                w-full
                gap-x-4
                test-md
                font-medium
                cursor-pointer
                hover:text-white
                transition
                text-neutral-400
                py-1
            `,
                active && 'text-white'

            )}
        >
            <Icon size={30}/>
            <p className="truncate w-fit">{label}</p>
        </Link>
    );
}

export default SidebarItem;
"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

const Library = () => {
    const onClick = () => {
        // Handle click event here
    }
    return ( 
        <div className="flex flex-col ">
            <div className="
                flex
                items-center
                justify-between
                px-5
                py-4
            "
            >
                <div
                    className="
                        inline-flex
                        items-center
                        gap-x-2
                    "
                >
                    <TbPlaylist 
                    className="text-neutral-400"
                    size={30}/>
                    <p
                        className="
                            text-neutral-400
                            font-medium
                            text-md"
                    >
                        Your Library
                    </p>
                </div>
                <AiOutlinePlus 
                    onClick={onClick}
                    size={20}
                    className="
                        text-neutral-400
                        hover:text-white
                        cursor-pointer
                        transition
                    "
                />
            </div>
            <div className="
                flex
                flex-col
                gap-y-2
                mt-4
                px-3
            ">
                List of Songs
            </div>
        </div>
    );
}

export default Library;
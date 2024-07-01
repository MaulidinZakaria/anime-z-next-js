'use client'

import { useEffect } from "react";
import Link from "next/link";

const UserActionButton = ({ user }) => {
    useEffect(() => {
        const init = async () => {
            const { Dropdown, Ripple, initTWE } = await import("tw-elements");
            initTWE({ Dropdown, Ripple });
        };
        init();
    }, []);

    const actionLink = user ? "/api/auth/signout" : "/api/auth/signin";

    return (
        <div>
            {user ?
                <div className="relative flex justify-center items-center" data-twe-dropdown-ref>
                    <button
                        className="size-10 rounded-full overflow-hidden shadow-xl"
                        type="button"
                        id="dropdownMenuButton1d"
                        data-twe-dropdown-toggle-ref
                        aria-expanded="false"
                        data-twe-ripple-init
                        data-twe-ripple-color="light">
                        <img src={user?.image} alt="" className="h-full w-full object-cover" />
                    </button>
                    <ul
                        className="absolute z-[1000] float-left hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                        aria-labelledby="dropdownMenuButton1d"
                        data-twe-dropdown-menu-ref>
                        <li>
                            <p className="px-4 py-2 w-full text-base font-medium text-gray-600">{user?.name}</p>
                        </li>
                        <hr className="h-0 border border-t-0 border-solid border-gray-500" />
                        <li>
                            <a
                                className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                href={actionLink}
                                data-twe-dropdown-item-ref>
                                Sign Out
                            </a>
                        </li>
                    </ul>
                </div>
                :
                <Link href={actionLink} className="cursor-pointer bg-[#CF7500] py-2 px-5 rounded-lg shadow-lg text-base transition-all duration-300 hover:bg-[#F0A500] text-white text-base font-semibold">Sign In</Link>
            }
        </div>
    );
}

export default UserActionButton;

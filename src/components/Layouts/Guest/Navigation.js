// import GuestNavigations from '@/data/GuestNavigations';
import React, { useEffect } from 'react'
import GuestNavigations from '@/data/GuestNavigations'

const Navigation = ({ children }) => {
    const nav = GuestNavigations
    useEffect(() => {
        console.log(nav[0].title)
    })
    return (
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
            <div className="flex-1 px-2 mx-2">
                <span className="text-lg font-bold">{nav.title}</span>
            </div>
            <div className="flex-none hidden px-2 mx-2 lg:flex">
                <div className="flex items-stretch">
                    {children}
                    {nav.map(data =>
                        data.withSubNav ? (
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex="0"
                                    className="btn btn-ghost btn-sm rounded-btn">
                                    {data.title}
                                </div>
                                <ul
                                    tabIndex="0"
                                    className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 text-base-content">
                                    <li>
                                        {data.subNav.map(data => (
                                            <a className="btn btn-ghost btn-sm rounded-btn">
                                                {data.title}
                                            </a>
                                        ))}
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <a className="btn btn-ghost btn-sm rounded-btn">
                                {data.title}
                            </a>
                        ),
                    )}
                </div>
            </div>

            <div className="flex-none lg:hidden">
                <div className="dropdown dropdown-end">
                    <button className="btn btn-square btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-6 h-6 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <ul
                        tabIndex="0"
                        className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 text-base-content">
                        <li>
                            <a className="btn btn-ghost btn-sm rounded-btn">
                                Item 1
                            </a>
                        </li>
                        <li>
                            <a className="btn btn-ghost btn-sm rounded-btn">
                                Item 2
                            </a>
                        </li>
                        <li>
                            <a className="btn btn-ghost btn-sm rounded-btn">
                                Item 3
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation

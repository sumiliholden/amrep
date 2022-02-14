import ApplicationLogo from '@/components/ApplicationLogo'
import Dropdown from '@/components/Dropdown'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import ResponsiveNavLink, {
    ResponsiveNavButton,
} from '@/components/ResponsiveNavLink'
import { DropdownButton } from '@/components/DropdownLink'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Navigation = ({ user, children }) => {
    const router = useRouter()

    const { logout } = useAuth()

    const [open, setOpen] = useState(false)

    return (
        // SIDEBAR
        <div className="shadow drawer min-h-screen">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="flex flex-col drawer-content">
                {/* NAVBAR */}
                <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
                    <div className="px-2 mx-2 navbar-start">
                        <label
                            className="btn btn-square btn-ghost drawer-button"
                            htmlFor="my-drawer">
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
                        </label>
                        <span className="text-lg font-bold">daisyUI</span>
                    </div>
                    <div className="hidden px-2 mx-2 navbar-center lg:flex">
                        <div className="flex items-stretch">
                            <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
                            <a className="btn btn-ghost btn-sm rounded-btn">
                                Portfolio
                            </a>
                            <a className="btn btn-ghost btn-sm rounded-btn">
                                About
                            </a>
                            <a className="btn btn-ghost btn-sm rounded-btn">
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="navbar-end">
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
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                            </svg>
                        </button>
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
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* CONTENT */}
                <main className='mb-auto'>{children}</main>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li>
                        <a>Menu Item</a>
                    </li>
                    <li>
                        <a>Menu Item</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation

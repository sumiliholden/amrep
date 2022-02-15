import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/auth'
import { themeChange } from 'theme-change'
//components

import GuestNavigation from './Navigation'
const GuestLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'guest' })
    const [theme, themeSet] = useState('')
    useEffect(() => {
        themeSet(localStorage.theme === undefined ? 'cupcake': localStorage.theme)

    }, [])

    const changeTheme = (e) => {
        themeSet(e)
        localStorage.setItem("theme", e);
      };
    return (
        <div>
            <Head>
                <title>Laravel</title>
            </Head>
            <div id='themeset'
                className="rounded-lg bg-base-200 flex flex-col min-h-screen text-base-content"
                data-theme={theme }>
                    <h1 id='oten'></h1>
                <GuestNavigation>
                    <div className="dropdown dropdown-end ">
                        <button className="btn btn-ghost btn-sm rounded-btn">
                            Themes
                        </button>
                        <ul
                            tabIndex="0"
                            className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 text-base-content">
                            <li>
                                <a onClick={() => changeTheme('cupcake')}>
                                    cupcake
                                </a>
                            </li>
                            <li>
                                <a onClick={() => changeTheme('dark')}>Dark</a>
                            </li>
                            <li>
                                <a onClick={() => changeTheme('wireframe')}>
                                    Wireframe
                                </a>
                            </li>
                            <li>
                                <a onClick={() => changeTheme('retro')}>Retro</a>
                            </li>
                            <li>
                                <a onClick={() => changeTheme('synthwave')}>
                                    Blue potion
                                </a>
                            </li>
                        </ul>
                    </div>
                </GuestNavigation>

                <div className="font-sans text-gray-900 antialiased">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default GuestLayout

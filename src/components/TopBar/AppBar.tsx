import Link from 'next/link'
import React from 'react'
import HeadSection from './Head'

export const MainLinks = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Contact', path: '/contact'},
    {name: 'Login', path: '/login'},
    {name: 'Signup', path: '/signup'},
]

export const UserLinks = [
    {name: 'Profile', path: '/profile/[id]'},
    {name: 'Dashboard', path: '/dashboard/[id]'},
    {name: 'Settings', path: '/settings/[id]'},
    {name: 'Logout', path: '/logout/[id]'},
]
function AppBar(props:React.ReactNode) {
    React.useContext(props)
   
    return (
        <React.Fragment>
        <HeadSection/>
        <nav className='h-16 w-full border-b-4 border-b-indigo-500 shadow-xl shadow-indigo-500/40 rounded-md'>
            <div className="flex flex-row md:break-after-column">
                <div className="flex py-3 px-2 order-1">
                    <button>
                    <svg className="h-6 w-6 fill-current text-gray-500 hover:text-gray-700" viewBox="0 0 24 24">
                        <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                    </svg>
                    </button>
                </div>
                
                <div className="absolute py-3 px-2 right-0">
            
                    <Link href={MainLinks[4].path}>
                                <a>{MainLinks[4].name}</a>
                            </Link>
                    
                        </div>
                    </div>
                    
                </nav>
            </React.Fragment>
    )
}

export default AppBar;

export function getStaticProps() {
    return {
        props: {
            title: 'Home',
            description: 'This is the home page',
        },
    }
}

export function getStaticPaths() {
    return {
        paths: [
            {params: {id: '1'}},
            {params: {id: '2'}},
            {params: {id: '3'}},
            {params: {id: '4'}},
            {params: {id: '5'}},
        ],
        fallback: false,
    }
}
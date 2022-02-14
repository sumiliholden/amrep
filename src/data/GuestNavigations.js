const headerNavLinks = [
    {
        href: '',
        title: 'Company',
        withSubNav: true,
        subNav: [
            { href: '/portfolio', title: 'Portfolio' },
            { href: '/story', title: 'Our Story' },
            { href: '/team', title: 'Our Team' },
            { href: '/tutorials', title: 'Tutorials' },
            { href: '/blog', title: 'Blog' },
        ],
    },
    {
        href: '/services',
        title: 'Services',
        withSubNav: true,
        subNav: [
            { href: '/services/photo-editing', title: 'Photo Editing' },
            { href: '/services/video-editing', title: 'Video Editing' },
            { href: '/services/lawn-replacement', title: 'Lawn Replacement' },
            { href: '/services/virtual-staging', title: 'Virtual Staging' },
            { href: '/services/declutter', title: 'Declutter' },
            { href: '/services/virtual-twilight', title: 'Virtual Twilight' },
        ],
    },
    { href: '/contact', title: 'Contact', withSubNav: false, },

    { href: '/login', title: 'Sign in', withSubNav: false, },
    { href: '/register', title: 'Sign up', withSubNav: false, },
]

export default headerNavLinks

const socialList = [
    {
        title: 'linked-in',
        imgUrl: 'https://img.icons8.com/ios-glyphs/128/ffffff/linkedin.png',
        link: 'www.linkedin.com/in/abhishek-kasana-4a7836106',
        bgColor: '#0073a4',
    },
    {
        title: 'stackoverflow',
        imgUrl: 'https://img.icons8.com/ios/128/ffffff/stackoverflow-filled.png',
        link: 'https://stackoverflow.com/users/9057473/',
        bgColor: '#f48024',
    },
    {
        title: 'Android',
        imgUrl: 'https://img.icons8.com/material/128/ffffff/android-os.png',
        link: 'https://play.google.com/store/apps/dev?id=8404243559462055066',
        bgColor: '#7cb342',
    },
    {
        title: 'twitter',
        imgUrl: 'https://img.icons8.com/ios-glyphs/128/ffffff/twitter-circled.png',
        link: 'https://twitter.com/abhishekasana',
        bgColor: '#00aced',
    },
    {
        title: 'github',
        imgUrl: 'https://img.icons8.com/ios-glyphs/128/ffffff/github.png',
        link: 'https://github.com/abhishekasana',
        bgColor: '#24292d',
    },
];

const menuList = [
    {
        title: 'ABOUT',
        imgUrl: null,
        link: '/about-me',
        bgColor: '#fff'
    },
]

const featuredBlogs = [
    {
        title: "Birthday Attack",
        description: "A Birthday Attack is a brute force cryptographic attack which exploits the possibility of a hash collision. " +
            "This exploit cracks the mathematics behind the birthday paradox...",
        link: "/blog/birthday-attack",
        icon: "https://img.icons8.com/material-sharp/256/EA4C89/cyber-security.png",
        subscript: "Cryptography | 10 min read"
    }
]

export {
    socialList,
    menuList,
    featuredBlogs
}
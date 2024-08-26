const socialList = [
    {
        title: 'linked-in',
        imgUrl: 'https://img.icons8.com/ios-glyphs/128/ffffff/linkedin.png',
        link: 'https://www.linkedin.com/in/abhishek-kasana-4a7836106',
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
        title: 'about',
        imgUrl: null,
        link: '/about-me',
        bgColor: '#fff'
    },
]

const featuredBlogs = [
    {
        title: "Currency Arbitrage",
        description: "Using Graph Theory to Detect Arbitrage Opportunities in Currency Markets",
        link: "/blog/currency-arbitrage",
        icon: "https://img.icons8.com/ios/256/56569e/graph--v1.png",
        subscript: "Quant | 15 min read"
    },
    {
        title: "Text Search in PostgreSQL",
        description: "Implement wildcard & fuzzy search in PostgreSQL.",
        link: "/blog/text-search-in-postgresql",
        icon: "https://img.icons8.com/ios/256/56569e/database.png",
        subscript: "Database | 20 min read"
    },
    {
        title: "Github Pages with NextJS",
        description: "Setup your own free website with github pages using Next.js framework.",
        link: "/blog/github-pages-nextjs",
        icon: "https://img.icons8.com/pastel-glyph/256/56569e/website--v2.png",
        subscript: "Js | 15 min read"
    },
    {
        title: "Birthday Attack",
        description: "What is a Birthday Attack in cryptography?",
        link: "/blog/birthday-attack",
        icon: "https://img.icons8.com/material-sharp/256/56569e/cyber-security.png",
        subscript: "Cryptography | 10 min read"
    }
]

export {
    socialList,
    menuList,
    featuredBlogs
}
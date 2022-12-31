import { defaultTheme } from '@vuepress/theme-default';
import { searchPlugin } from '@vuepress/plugin-search';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';

export default {
    lang: 'fr-FR',
    title: 'Lostaria Guide',
    description: 'Ce guide contient l\'ensemble des informations essentielles concernant le serveur Minecraft Lostaria',

    head: [
        ['meta', { name: 'theme-color', content: '#6A5ACD' }],
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],

    plugins: [
        searchPlugin({
            locales: {
                "/": {
                    placeholder: "Rechercher",
                },
            },
        }),
        googleAnalyticsPlugin({ 'id': 'G-CNP5VLHFS3' }),
    ],

    theme: defaultTheme({
        displayAllHeaders: true,
        lastUpdatedText: 'Mis à jour le',
        contributorsText: "Contributeurs",
        logo: "/logo.png",
        navbar: [
            { text: 'Statistiques', link: 'https://lostaria.fr' },
            { text: 'Maps', link: 'https://maps.lostaria.fr' },
            { text: 'Discord', link: 'http://discord.lostaria.fr' },
            { text: 'Twitter', link: 'https://twitter.com/LostariaMC'},
        ],
        sidebar: [
            { link: "/README.md", text: "Introduction" },
            { link: "/team.md", text: "L'équipe" },
            {
                text: "Les jeux",
                collapsible: true,
                children: [
                    { link: "/minigames/koth.md", text: "KOTH" },
                ]
            },
        ]
    }),
}
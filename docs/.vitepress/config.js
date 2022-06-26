export default {
    base: '/Issue-template/',
    title: 'Coding Platform',
    themeConfig: {
        nav: [ 
            {
                text: 'GitHub',
                link: 'https://github.com/skkuding/next'
            }, 
            {
                text: 'Page',
                link: 'https://npc.skku.edu'
            }
        ],
        sidebar: [
            {
                text: 'Introduction',
                items: [
                    { text: 'What is Coding Platform?', link: '/introduction/codingplatform'},
                    { text: 'Contributing Guide', link: '/introduction/contributing'}
                ]
            }
        ]
    }
}
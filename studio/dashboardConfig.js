export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d04dbaf15091c0ec96505a4',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-kg69ygxu',
                  apiId: '1ffacade-9fe7-4f95-a9d4-c12acf9fe21f'
                },
                {
                  buildHookId: '5d04dbb0b84ff06b03d58153',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-uy1i64mh',
                  apiId: '20447784-2391-4774-9895-b6b39971070c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Matthaios/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-uy1i64mh.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

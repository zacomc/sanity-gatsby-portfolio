export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e7179329f793a63c7fdf5b1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-brs8xotx',
                  apiId: '0ed8de30-0590-4785-8cff-6dc1168b600b'
                },
                {
                  buildHookId: '5e7179332af0c659b98a204d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-znfqpz56',
                  apiId: '33219784-df71-4689-9ef1-20c9cbf24d0a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zacomc/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-znfqpz56.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

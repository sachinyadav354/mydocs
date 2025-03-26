import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/mydocs/blog',
    component: ComponentCreator('/mydocs/blog', '687'),
    exact: true
  },
  {
    path: '/mydocs/blog/archive',
    component: ComponentCreator('/mydocs/blog/archive', 'a0c'),
    exact: true
  },
  {
    path: '/mydocs/blog/authors',
    component: ComponentCreator('/mydocs/blog/authors', '1f2'),
    exact: true
  },
  {
    path: '/mydocs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/mydocs/blog/authors/all-sebastien-lorber-articles', '4dc'),
    exact: true
  },
  {
    path: '/mydocs/blog/authors/yangshun',
    component: ComponentCreator('/mydocs/blog/authors/yangshun', 'd7b'),
    exact: true
  },
  {
    path: '/mydocs/blog/first-blog-post',
    component: ComponentCreator('/mydocs/blog/first-blog-post', '23d'),
    exact: true
  },
  {
    path: '/mydocs/blog/long-blog-post',
    component: ComponentCreator('/mydocs/blog/long-blog-post', 'bac'),
    exact: true
  },
  {
    path: '/mydocs/blog/mdx-blog-post',
    component: ComponentCreator('/mydocs/blog/mdx-blog-post', '270'),
    exact: true
  },
  {
    path: '/mydocs/blog/tags',
    component: ComponentCreator('/mydocs/blog/tags', 'eed'),
    exact: true
  },
  {
    path: '/mydocs/blog/tags/docusaurus',
    component: ComponentCreator('/mydocs/blog/tags/docusaurus', '9c4'),
    exact: true
  },
  {
    path: '/mydocs/blog/tags/facebook',
    component: ComponentCreator('/mydocs/blog/tags/facebook', 'f19'),
    exact: true
  },
  {
    path: '/mydocs/blog/tags/hello',
    component: ComponentCreator('/mydocs/blog/tags/hello', '756'),
    exact: true
  },
  {
    path: '/mydocs/blog/tags/hola',
    component: ComponentCreator('/mydocs/blog/tags/hola', 'ae0'),
    exact: true
  },
  {
    path: '/mydocs/blog/welcome',
    component: ComponentCreator('/mydocs/blog/welcome', 'a08'),
    exact: true
  },
  {
    path: '/mydocs/markdown-page',
    component: ComponentCreator('/mydocs/markdown-page', '809'),
    exact: true
  },
  {
    path: '/mydocs/docs',
    component: ComponentCreator('/mydocs/docs', 'fc1'),
    routes: [
      {
        path: '/mydocs/docs',
        component: ComponentCreator('/mydocs/docs', 'd40'),
        routes: [
          {
            path: '/mydocs/docs',
            component: ComponentCreator('/mydocs/docs', '0d8'),
            routes: [
              {
                path: '/mydocs/docs/category/tutorial---basics',
                component: ComponentCreator('/mydocs/docs/category/tutorial---basics', 'cd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mydocs/docs/category/tutorial---extras',
                component: ComponentCreator('/mydocs/docs/category/tutorial---extras', 'dd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mydocs/docs/intro',
                component: ComponentCreator('/mydocs/docs/intro', 'a25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mydocs/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/mydocs/docs/tutorial-basics/congratulations', '394'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mydocs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/mydocs/docs/tutorial-basics/create-a-blog-post', '552'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mydocs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/mydocs/docs/tutorial-basics/create-a-document', '838'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mydocs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/mydocs/docs/tutorial-basics/create-a-page', '3e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mydocs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/mydocs/docs/tutorial-basics/deploy-your-site', 'aac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mydocs/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/mydocs/docs/tutorial-basics/markdown-features', '376'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mydocs/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/mydocs/docs/tutorial-extras/manage-docs-versions', '86f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mydocs/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/mydocs/docs/tutorial-extras/translate-your-site', '7ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/mydocs/',
    component: ComponentCreator('/mydocs/', '812'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

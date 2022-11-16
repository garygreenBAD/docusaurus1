import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '335'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'e05'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '4d3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '9f4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'd3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '5ad'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '26c'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'd8a'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'ac2'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '9f0'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9f0'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'a12'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'c63'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '81d'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'f56'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'c6d'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'd8d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '0e0'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags', '9a7'),
    exact: true
  },
  {
    path: '/docs/tags/aof',
    component: ComponentCreator('/docs/tags/aof', 'd6a'),
    exact: true
  },
  {
    path: '/docs/tags/frameworks',
    component: ComponentCreator('/docs/tags/frameworks', 'dc9'),
    exact: true
  },
  {
    path: '/docs/tags/introduction',
    component: ComponentCreator('/docs/tags/introduction', '93f'),
    exact: true
  },
  {
    path: '/docs/tags/scrum',
    component: ComponentCreator('/docs/tags/scrum', '992'),
    exact: true
  },
  {
    path: '/intro',
    component: ComponentCreator('/intro', '10b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '43f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '0a6'),
    routes: [
      {
        path: '/docs/Areas of Focus/intro',
        component: ComponentCreator('/docs/Areas of Focus/intro', '69a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Areas of Focus/Scrum/Scrum Artifacts',
        component: ComponentCreator('/docs/Areas of Focus/Scrum/Scrum Artifacts', 'f6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Areas of Focus/Scrum/Scrum Events',
        component: ComponentCreator('/docs/Areas of Focus/Scrum/Scrum Events', '3c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Areas of Focus/Scrum/Scrum Roles',
        component: ComponentCreator('/docs/Areas of Focus/Scrum/Scrum Roles', '1a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Areas of Focus/Scrum/Scrum Values',
        component: ComponentCreator('/docs/Areas of Focus/Scrum/Scrum Values', 'ac6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Frameworks/intro',
        component: ComponentCreator('/docs/Frameworks/intro', '398'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Frameworks/scrum',
        component: ComponentCreator('/docs/Frameworks/scrum', '255'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Solutions/intro',
        component: ComponentCreator('/docs/Solutions/intro', '923'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Solutions/Scrum/Scrum Backlog',
        component: ComponentCreator('/docs/Solutions/Scrum/Scrum Backlog', '79b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Solutions/Scrum/Scrum Backlog Refinement',
        component: ComponentCreator('/docs/Solutions/Scrum/Scrum Backlog Refinement', '0a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Solutions/Scrum/Scrum Daily Scrum',
        component: ComponentCreator('/docs/Solutions/Scrum/Scrum Daily Scrum', '85b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Solutions/Scrum/Scrum Sprint Backlog',
        component: ComponentCreator('/docs/Solutions/Scrum/Scrum Sprint Backlog', '232'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Solutions/Scrum/Scrum Sprint Planning',
        component: ComponentCreator('/docs/Solutions/Scrum/Scrum Sprint Planning', '97a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Solutions/Scrum/Scrum Sprint Retrospective',
        component: ComponentCreator('/docs/Solutions/Scrum/Scrum Sprint Retrospective', '55f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Solutions/Scrum/Scrum Sprint Review',
        component: ComponentCreator('/docs/Solutions/Scrum/Scrum Sprint Review', 'cd8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Tools/intro',
        component: ComponentCreator('/docs/Tools/intro', '831'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '96f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/community/__docusaurus/debug',
    component: ComponentCreator('/community/__docusaurus/debug', '4ca'),
    exact: true
  },
  {
    path: '/community/__docusaurus/debug/config',
    component: ComponentCreator('/community/__docusaurus/debug/config', 'd55'),
    exact: true
  },
  {
    path: '/community/__docusaurus/debug/content',
    component: ComponentCreator('/community/__docusaurus/debug/content', '4ca'),
    exact: true
  },
  {
    path: '/community/__docusaurus/debug/globalData',
    component: ComponentCreator('/community/__docusaurus/debug/globalData', '43f'),
    exact: true
  },
  {
    path: '/community/__docusaurus/debug/metadata',
    component: ComponentCreator('/community/__docusaurus/debug/metadata', '717'),
    exact: true
  },
  {
    path: '/community/__docusaurus/debug/registry',
    component: ComponentCreator('/community/__docusaurus/debug/registry', '11f'),
    exact: true
  },
  {
    path: '/community/__docusaurus/debug/routes',
    component: ComponentCreator('/community/__docusaurus/debug/routes', '756'),
    exact: true
  },
  {
    path: '/community/blog',
    component: ComponentCreator('/community/blog', '422'),
    exact: true
  },
  {
    path: '/community/blog/archive',
    component: ComponentCreator('/community/blog/archive', 'b14'),
    exact: true
  },
  {
    path: '/community/blog/first-blog-post',
    component: ComponentCreator('/community/blog/first-blog-post', '5a3'),
    exact: true
  },
  {
    path: '/community/blog/long-blog-post',
    component: ComponentCreator('/community/blog/long-blog-post', 'ece'),
    exact: true
  },
  {
    path: '/community/blog/mdx-blog-post',
    component: ComponentCreator('/community/blog/mdx-blog-post', 'e20'),
    exact: true
  },
  {
    path: '/community/blog/tags',
    component: ComponentCreator('/community/blog/tags', '632'),
    exact: true
  },
  {
    path: '/community/blog/tags/docusaurus',
    component: ComponentCreator('/community/blog/tags/docusaurus', 'a35'),
    exact: true
  },
  {
    path: '/community/blog/tags/facebook',
    component: ComponentCreator('/community/blog/tags/facebook', '15b'),
    exact: true
  },
  {
    path: '/community/blog/tags/hello',
    component: ComponentCreator('/community/blog/tags/hello', '1d6'),
    exact: true
  },
  {
    path: '/community/blog/tags/hola',
    component: ComponentCreator('/community/blog/tags/hola', 'a44'),
    exact: true
  },
  {
    path: '/community/blog/welcome',
    component: ComponentCreator('/community/blog/welcome', 'feb'),
    exact: true
  },
  {
    path: '/community/docs/tags',
    component: ComponentCreator('/community/docs/tags', '324'),
    exact: true
  },
  {
    path: '/community/docs/tags/aof',
    component: ComponentCreator('/community/docs/tags/aof', '495'),
    exact: true
  },
  {
    path: '/community/docs/tags/frameworks',
    component: ComponentCreator('/community/docs/tags/frameworks', '580'),
    exact: true
  },
  {
    path: '/community/docs/tags/introduction',
    component: ComponentCreator('/community/docs/tags/introduction', 'abb'),
    exact: true
  },
  {
    path: '/community/docs/tags/scrum',
    component: ComponentCreator('/community/docs/tags/scrum', 'd8a'),
    exact: true
  },
  {
    path: '/community/intro',
    component: ComponentCreator('/community/intro', '6f9'),
    exact: true
  },
  {
    path: '/community/markdown-page',
    component: ComponentCreator('/community/markdown-page', 'a59'),
    exact: true
  },
  {
    path: '/community/docs',
    component: ComponentCreator('/community/docs', '3f3'),
    routes: [
      {
        path: '/community/docs/Areas of Focus/intro',
        component: ComponentCreator('/community/docs/Areas of Focus/intro', '325'),
        exact: true,
        sidebar: "BADSidebar"
      },
      {
        path: '/community/docs/Areas of Focus/Scrum/Scrum Artifacts',
        component: ComponentCreator('/community/docs/Areas of Focus/Scrum/Scrum Artifacts', '191'),
        exact: true,
        sidebar: "BADSidebar"
      },
      {
        path: '/community/docs/Areas of Focus/Scrum/Scrum Events',
        component: ComponentCreator('/community/docs/Areas of Focus/Scrum/Scrum Events', 'b3d'),
        exact: true,
        sidebar: "BADSidebar"
      },
      {
        path: '/community/docs/Areas of Focus/Scrum/Scrum Roles',
        component: ComponentCreator('/community/docs/Areas of Focus/Scrum/Scrum Roles', '94a'),
        exact: true,
        sidebar: "BADSidebar"
      },
      {
        path: '/community/docs/Areas of Focus/Scrum/Scrum Values',
        component: ComponentCreator('/community/docs/Areas of Focus/Scrum/Scrum Values', 'e5c'),
        exact: true,
        sidebar: "BADSidebar"
      },
      {
        path: '/community/docs/Frameworks/intro',
        component: ComponentCreator('/community/docs/Frameworks/intro', 'f61'),
        exact: true,
        sidebar: "BADSidebar"
      },
      {
        path: '/community/docs/Frameworks/scrum',
        component: ComponentCreator('/community/docs/Frameworks/scrum', 'ef6'),
        exact: true,
        sidebar: "BADSidebar"
      },
      {
        path: '/community/docs/intro',
        component: ComponentCreator('/community/docs/intro', 'a9e'),
        exact: true,
        sidebar: "BADSidebar"
      },
      {
        path: '/community/docs/Solutions/intro',
        component: ComponentCreator('/community/docs/Solutions/intro', '741'),
        exact: true,
        sidebar: "BADSidebar"
      },
      {
        path: '/community/docs/Solutions/Scrum/Scrum Backlog',
        component: ComponentCreator('/community/docs/Solutions/Scrum/Scrum Backlog', '594'),
        exact: true,
        sidebar: "BADSidebar"
      },
      {
        path: '/community/docs/Solutions/Scrum/Scrum Backlog Refinement',
        component: ComponentCreator('/community/docs/Solutions/Scrum/Scrum Backlog Refinement', 'ebe'),
        exact: true,
        sidebar: "BADSidebar"
      },
      {
        path: '/community/docs/Solutions/Scrum/Scrum Daily Scrum',
        component: ComponentCreator('/community/docs/Solutions/Scrum/Scrum Daily Scrum', '375'),
        exact: true,
        sidebar: "BADSidebar"
      },
      {
        path: '/community/docs/Solutions/Scrum/Scrum Sprint Backlog',
        component: ComponentCreator('/community/docs/Solutions/Scrum/Scrum Sprint Backlog', 'a4a'),
        exact: true,
        sidebar: "BADSidebar"
      },
      {
        path: '/community/docs/Solutions/Scrum/Scrum Sprint Planning',
        component: ComponentCreator('/community/docs/Solutions/Scrum/Scrum Sprint Planning', '187'),
        exact: true,
        sidebar: "BADSidebar"
      },
      {
        path: '/community/docs/Solutions/Scrum/Scrum Sprint Retrospective',
        component: ComponentCreator('/community/docs/Solutions/Scrum/Scrum Sprint Retrospective', 'f47'),
        exact: true,
        sidebar: "BADSidebar"
      },
      {
        path: '/community/docs/Solutions/Scrum/Scrum Sprint Review',
        component: ComponentCreator('/community/docs/Solutions/Scrum/Scrum Sprint Review', 'f97'),
        exact: true,
        sidebar: "BADSidebar"
      },
      {
        path: '/community/docs/Tools/intro',
        component: ComponentCreator('/community/docs/Tools/intro', '603'),
        exact: true,
        sidebar: "BADSidebar"
      }
    ]
  },
  {
    path: '/community/',
    component: ComponentCreator('/community/', 'c09'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

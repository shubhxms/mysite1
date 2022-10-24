import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '60f0eb5c08b147078e7318397419c35a',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'shubham',
  domain: 'https://shubhxms.github.io',
  author: 'shubham',

  // open graph metadata (optional)
  description: 'shubhams internet home',

  // social usernames (optional)
  twitter: 'shubhxms',
  github: 'shubhxms',
  linkedin: 'shubham-d-shah',
  newsletter: 'https://shubhxms.substack.com', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
//   navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'shelf',
      pageId: '76b900671b174aad99a709666db4baa4'
    },
    {
      title: 'craft',
      pageId: '34530d5aa5ae410e95c5ac997cb482a0'
    },
    {
      title: 'contact',
      pageId: 'd2ac3c3aef0f40cea1b6dac2d7c65a94'
    }
  ]
})

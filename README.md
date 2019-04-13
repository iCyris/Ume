# Ume

[![npm](https://badgen.net/npm/v/saber-theme-ume)](https://npm.im/saber-theme-ume)

> Ume is an elegant theme for [Saber.js](https://github.com/egoist/saber).

![Ume](./media/Ume.png)

## Install

```bash
yarn add saber-theme-ume
```

In your `saber-config.yml`:

```yml
theme: ume
```

## Plugins

```bash
yarn add saber-plugin-query-posts saber-plugin-generate-feed saber-highlighter-prism
```

## Layouts

- `page`: For normal/blog post pages.

## Configs

### Site Config

Configure site title, description etc in your `saber-config.yml`:

```yml
siteConfig:
  title: My Site
  description: About this website..
  author: My Name
  url: https://example.com
  email: my@email.com
```

### Theme Config

```yml
themeConfig:
  title: The Title shown on the index page.
  subTitle: The subTitle shown on the index page.
  copyRight: © Copyright
  
  sideBar:
    - title: About
      link: /about.html
    - title: Tags
      link: /tags.html  # you need to add `/example/pages/tags.vue` in your `pages` folder to enable the tag cloud page.

  # The Home section on sidebar, this will shown on mobile device.
  spHome:
    title: Home
    link: /
```

### Markdown Config

```yml
markdown:
  highlighter: prism
```

### Plugin Config

```yml
plugins:

  # Google Analytics
  # - resolve: saber-plugin-google-analytics
  #   options:
  #     trackId: ''

  - resolve: saber-plugin-generate-feed
  - resolve: saber-plugin-query-posts
```

## License

MIT.

## Thanks

Inspired from [hexo-theme-journal](https://github.com/SumiMakito/hexo-theme-journal/).



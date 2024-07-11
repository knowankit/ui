# UI Package

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

[![Storybook](https://github.com/storybooks/brand/blob/master/badge/badge-storybook.svg)](https://bangthetable.github.io/ui)

UI component and style package for BTT frontend apps.

## Demo

The storybook is deployed in the [Github pages](https://bangthetable.github.io/ui/).

## Setup

- Add this package to your BTT app `yarn add bangthetable/ui`
- Import components: [https://bangthetable.github.io/ui](https://bangthetable.github.io/ui)

## Upgrade

- `docker-compose exec <app> yarn upgrade ui`
- `docker-compose stop <app>`
- `docker-compose rm <app>`
- `docker-compose up -d`

## Run Storybook app locally

- `yarn run storybook`

## Deploy Storybook

Storybook is deployed via the `gh-pages` branch on this repo.

- `yarn storybook:deploy`

## Note

[NextJS only allows you to add relative styles to _app.tsx file](https://nextjs.org/docs/messages/css-global). The _app.tsx is rendered for all the pages present inside a NextJS application. Because of these, when the styles are imported from UI into _app.tsx, the styles of new home pages are also getting affected. As a result, we can't port this repository into [blue-haven](https://github.com/bangthetable/blue-haven).

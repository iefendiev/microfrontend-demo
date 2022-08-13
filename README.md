# Demo microfrontend app with monorepo architecture with shared Tailwind configs

This is a sample / practice project and feedbacks are welcomed!

## Microfrontend

- Webpack Module Federation plugin

  This plugin is used with React apps bootstrapped with CRA. `App1` & `App2` are being consumed by `Shell` app and details can be found in webpack config files.

## Monorepo

- Turborepo

  It is used for accessing shared configs and UI components from root directory. The main challenge was using this with CRAs and not with Next.js since module transpiling is more difficult with this way.

## Styling

- Tailwind CSS

  It is applied to demonstrate styling a common component such as Button.jsx. Both postcss and tailwind configs can be found in packages/ui directory and other app configs are imported from here. In order to use tailwind for css modules, `postcss-loader` is added to all webpack config files.

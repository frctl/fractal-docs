# Fractal website

Site and docs for Fractal, a tool for building website component libraries: [https://fractal.build](https://fractal.build)

Built using [VuePress](https://vuepress.vuejs.org/).

## Running locally

1. Download or clone this repo
2. Install dependencies: `yarn`
3. Start the development server: `yarn docs:dev`
4. (optional) Build static files `yarn docs:build`

## Deployment
http://fractal.build is hosted using Github Pages. Deployment is done via the `deploy.sh` script within the project root.

1. Run `bash deploy.sh` from the project root

TLDR; will do the following:

```
yarn docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:samuelgoddard/fractal-docs.git master:gh-pages
```

## Useful Links
* Full VuePress documentation [https://vuepress.vuejs.org](https://vuepress.vuejs.org/)

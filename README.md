# Fractal website

Site and docs for Fractal, a tool for building website component libraries: [https://fractal.build](https://fractal.build)

Built using [VuePress](https://vuepress.vuejs.org/).

## Running locally

1. Download or clone this repo
2. Install dependencies: `npm ci`
3. Start the development server: `npm start`
4. (optional) Build static files `npm run build`

## Deployment
http://fractal.build is hosted using [Netlify](https://www.netlify.com/). Deployment is triggered by pushing to the `master` branch

This will essentially do the following:

```
npm run build
cd docs/.vuepress/dist
```

## Useful Links
* Full VuePress documentation [https://vuepress.vuejs.org](https://vuepress.vuejs.org/)

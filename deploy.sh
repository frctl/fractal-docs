#!/usr/bin/env sh

# abort on errors
set -e

# build the flat files
yarn docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# add all files and commit
git init
git add -A
git commit -m 'deploy'

# force deploy to the commit to the gh-pages repo
git push -f git@github.com:samuelgoddard/fractal-docs.git master:gh-pages

# navigate back to the root
cd -

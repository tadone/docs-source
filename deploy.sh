#!/usr/bin/env bash
set -e

yarn docs:build

cd vuepress

git init
git add -A
git config user.name $GH_NAME
git config user.email $GH_EMAIL
git commit -m 'Deploy from CircleCI'

git push --force --quiet $CIRCLE_REPOSITORY_URL master:tadone.github.io

cd -

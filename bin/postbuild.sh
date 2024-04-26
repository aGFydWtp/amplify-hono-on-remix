#!/bin/bash

rm -rf ./.amplify-hosting

mkdir -p ./.amplify-hosting/compute/default

cp -r ./build ./.amplify-hosting/compute/default/build
cp -r bin/package.json ./.amplify-hosting/compute/default

cp -r public ./.amplify-hosting/static

cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json

rm -rf node_modules
yarn install --production
cp -r ./node_modules ./.amplify-hosting/compute/default/node_modules

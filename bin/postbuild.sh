#!/bin/bash

rm -rf ./.amplify-hosting

mkdir -p ./.amplify-hosting/compute/default

cp -r ./build ./.amplify-hosting/compute/default/build
cp -r ./package.json ./.amplify-hosting/compute/default

cp -r public ./.amplify-hosting/static

cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json

cd .amplify-hosting/compute/default
bun install --production

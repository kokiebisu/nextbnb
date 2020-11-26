#! /bin/zsh

# auth
cd ../auth
yarn upgrade

# run development server
cd ..
skaffold dev
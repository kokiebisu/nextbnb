#! /bin/zsh

git checkout master
git pull origin develop --no-edit

git checkout develop
git pull origin develop --no-edit

git checkout shared
git pull origin develop --no-edit

git checkout storybook
git pull origin develop --no-edit

git checkout stay
git pull origin develop --no-edit

git checkout kube
git pull origin develop --no-edit

git checkout server
git pull origin develop --no-edit

git checkout refactor
git pull origin develop --no-edit

git checkout hooks
git pull origin develop --no-edit

git checkout package
git pull origin develop --no-edit

git checkout circleci
git pull origin develop --no-edit

git checkout documentation
git pull origin develop --no-edit

git checkout develop
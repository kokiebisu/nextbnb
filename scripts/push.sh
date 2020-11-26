#! /bin/zsh
branch_name=$(git symbolic-ref --short -q HEAD)
str=$*
git add -A
git commit -m ${str}
git push origin ${branch_name}

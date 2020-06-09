#! /bin/bash

function git-branch-name {
  git symbolic-ref --short -q HEAD
}
function git-branch-prompt {
  local branch=`git-branch-name`
  echo $branch
  git push -f origin $branch:test
#   if [ $branch ]; then printf " [%s]" $branch; fi
}
echo `git-branch-prompt`
# PS1="\u@\h \[\033[0;36m\]\W\[\033[0m\]\[\033[0;32m\]\$(git-branch-prompt)\[\033[0m\] \$ "


# git pull origin master
echo "Success\n";
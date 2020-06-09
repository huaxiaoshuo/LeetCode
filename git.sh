#! /bin/bash
# chmod +x ./git.sh   使git.sh具备运行权限

# 获取本地分支名称
function get-branch-name {
  git symbolic-ref --short -q HEAD
}

# 本地分支代码push到远程分支
function git-branch-push {
  local branch=`get-branch-name`
  git push -f origin $branch:test
}
git-branch-push

echo "Success";
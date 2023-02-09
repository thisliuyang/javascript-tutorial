(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{166:function(t,n,e){t.exports=e.p+"assets/img/bg2015120901.3bc9d5f2.png"},177:function(t,n,e){"use strict";e.r(n);var i=[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"常用-git-命令清单"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用-git-命令清单","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用 Git 命令清单")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("img",{attrs:{src:e(166),alt:"bg2015120901"}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("blockquote",[n("ul",[n("li",[this._v("Workspace：工作区")]),this._v(" "),n("li",[this._v("Index / Stage：暂存区")]),this._v(" "),n("li",[this._v("Repository：仓库区（或本地仓库）")]),this._v(" "),n("li",[this._v("Remote：远程仓库")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"新建代码库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新建代码库","aria-hidden":"true"}},[this._v("#")]),this._v(" 新建代码库")])},function(){var t=this.$createElement,n=this._self._c||t;return n("blockquote",[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("# 在当前目录新建一个Git代码库\n$ git init\n\n# 新建一个目录，将其初始化为Git代码库\n$ git init [project-name]\n\n# 下载一个项目和它的整个代码历史\n$ git clone [url]\n")])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Git的设置文件为"),n("code",[this._v(".gitconfig")]),this._v("，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。")])},function(){var t=this.$createElement,n=this._self._c||t;return n("blockquote",[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('# 显示当前的Git配置\n$ git config --list\n\n# 编辑Git配置文件\n$ git config -e [--global]\n\n# 设置提交代码时的用户信息\n$ git config [--global] user.name "[name]"\n$ git config [--global] user.email "[email address]"\n')])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"增加-删除文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#增加-删除文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 增加/删除文件")])},function(){var t=this.$createElement,n=this._self._c||t;return n("blockquote",[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("# 添加指定文件到暂存区\n$ git add [file1] [file2] ...\n\n# 添加指定目录到暂存区，包括子目录\n$ git add [dir]\n\n# 添加当前目录的所有文件到暂存区\n$ git add .\n\n# 添加每个变化前，都会要求确认\n# 对于同一个文件的多处变化，可以实现分次提交\n$ git add -p\n\n# 删除工作区文件，并且将这次删除放入暂存区\n$ git rm [file1] [file2] ...\n\n# 停止追踪指定文件，但该文件会保留在工作区\n$ git rm --cached [file]\n\n# 改名文件，并且将这个改名放入暂存区\n$ git mv [file-original] [file-renamed]\n")])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"代码提交"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码提交","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码提交")])},function(){var t=this.$createElement,n=this._self._c||t;return n("blockquote",[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("# 提交暂存区到仓库区\n$ git commit -m [message]\n\n# 提交暂存区的指定文件到仓库区\n$ git commit [file1] [file2] ... -m [message]\n\n# 提交工作区自上次commit之后的变化，直接到仓库区\n$ git commit -a\n\n# 提交时显示所有diff信息\n$ git commit -v\n\n# 使用一次新的commit，替代上一次提交\n# 如果代码没有任何新变化，则用来改写上一次commit的提交信息\n$ git commit --amend -m [message]\n\n# 重做上一次commit，并包括指定文件的新变化\n$ git commit --amend [file1] [file2] ...\n")])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"分支"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分支","aria-hidden":"true"}},[this._v("#")]),this._v(" 分支")])},function(){var t=this.$createElement,n=this._self._c||t;return n("blockquote",[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("# 列出所有本地分支\n$ git branch\n\n# 列出所有远程分支\n$ git branch -r\n\n# 列出所有本地分支和远程分支\n$ git branch -a\n\n# 新建一个分支，但依然停留在当前分支\n$ git branch [branch-name]\n\n# 新建一个分支，并切换到该分支\n$ git checkout -b [branch]\n\n# 新建一个分支，指向指定commit\n$ git branch [branch] [commit]\n\n# 新建一个分支，与指定的远程分支建立追踪关系\n$ git branch --track [branch] [remote-branch]\n\n# 切换到指定分支，并更新工作区\n$ git checkout [branch-name]\n\n# 切换到上一个分支\n$ git checkout -\n\n# 建立追踪关系，在现有分支与指定的远程分支之间\n$ git branch --set-upstream [branch] [remote-branch]\n\n# 合并指定分支到当前分支\n$ git merge [branch]\n\n# 选择一个commit，合并进当前分支\n$ git cherry-pick [commit]\n\n# 删除分支\n$ git branch -d [branch-name]\n\n# 删除远程分支\n$ git push origin --delete [branch-name]\n$ git branch -dr [remote/branch]\n")])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"标签"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#标签","aria-hidden":"true"}},[this._v("#")]),this._v(" 标签")])},function(){var t=this.$createElement,n=this._self._c||t;return n("blockquote",[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("# 列出所有tag\n$ git tag\n\n# 新建一个tag在当前commit\n$ git tag [tag]\n\n# 新建一个tag在指定commit\n$ git tag [tag] [commit]\n\n# 删除本地tag\n$ git tag -d [tag]\n\n# 删除远程tag\n$ git push origin :refs/tags/[tagName]\n\n# 查看tag信息\n$ git show [tag]\n\n# 提交指定tag\n$ git push [remote] [tag]\n\n# 提交所有tag\n$ git push [remote] --tags\n\n# 新建一个分支，指向某个tag\n$ git checkout -b [branch] [tag]\n")])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"查看信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看信息","aria-hidden":"true"}},[this._v("#")]),this._v(" 查看信息")])},function(){var t=this.$createElement,n=this._self._c||t;return n("blockquote",[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('# 显示有变更的文件\n$ git status\n\n# 显示当前分支的版本历史\n$ git log\n\n# 显示commit历史，以及每次commit发生变更的文件\n$ git log --stat\n\n# 搜索提交历史，根据关键词\n$ git log -S [keyword]\n\n# 显示某个commit之后的所有变动，每个commit占据一行\n$ git log [tag] HEAD --pretty=format:%s\n\n# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件\n$ git log [tag] HEAD --grep feature\n\n# 显示某个文件的版本历史，包括文件改名\n$ git log --follow [file]\n$ git whatchanged [file]\n\n# 显示指定文件相关的每一次diff\n$ git log -p [file]\n\n# 显示过去5次提交\n$ git log -5 --pretty --oneline\n\n# 显示所有提交过的用户，按提交次数排序\n$ git shortlog -sn\n\n# 显示指定文件是什么人在什么时间修改过\n$ git blame [file]\n\n# 显示暂存区和工作区的差异\n$ git diff\n\n# 显示暂存区和上一个commit的差异\n$ git diff --cached [file]\n\n# 显示工作区与当前分支最新commit之间的差异\n$ git diff HEAD\n\n# 显示两次提交之间的差异\n$ git diff [first-branch]...[second-branch]\n\n# 显示今天你写了多少行代码\n$ git diff --shortstat "@{0 day ago}"\n\n# 显示某次提交的元数据和内容变化\n$ git show [commit]\n\n# 显示某次提交发生变化的文件\n$ git show --name-only [commit]\n\n# 显示某次提交时，某个文件的内容\n$ git show [commit]:[filename]\n\n# 显示当前分支的最近几次提交\n$ git reflog\n')])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"远程同步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#远程同步","aria-hidden":"true"}},[this._v("#")]),this._v(" 远程同步")])},function(){var t=this.$createElement,n=this._self._c||t;return n("blockquote",[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("# 下载远程仓库的所有变动\n$ git fetch [remote]\n\n# 显示所有远程仓库\n$ git remote -v\n\n# 显示某个远程仓库的信息\n$ git remote show [remote]\n\n# 增加一个新的远程仓库，并命名\n$ git remote add [shortname] [url]\n\n# 取回远程仓库的变化，并与本地分支合并\n$ git pull [remote] [branch]\n\n# 上传本地指定分支到远程仓库\n$ git push [remote] [branch]\n\n# 强行推送当前分支到远程仓库，即使有冲突\n$ git push [remote] --force\n\n# 推送所有分支到远程仓库\n$ git push [remote] --all\n")])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"撤销"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#撤销","aria-hidden":"true"}},[this._v("#")]),this._v(" 撤销")])},function(){var t=this.$createElement,n=this._self._c||t;return n("blockquote",[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("# 恢复暂存区的指定文件到工作区\n$ git checkout [file]\n\n# 恢复某个commit的指定文件到暂存区和工作区\n$ git checkout [commit] [file]\n\n# 恢复暂存区的所有文件到工作区\n$ git checkout .\n\n# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变\n$ git reset [file]\n\n# 重置暂存区与工作区，与上一次commit保持一致\n$ git reset --hard\n\n# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变\n$ git reset [commit]\n\n# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致\n$ git reset --hard [commit]\n\n# 重置当前HEAD为指定commit，但保持暂存区和工作区不变\n$ git reset --keep [commit]\n\n# 新建一个commit，用来撤销指定commit\n# 后者的所有变化都将被前者抵消，并且应用到当前分支\n$ git revert [commit]\n\n# 暂时将未提交的变化移除，稍后再移入\n$ git stash\n$ git stash pop\n")])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[this._v("#")]),this._v(" 其他")])},function(){var t=this.$createElement,n=this._self._c||t;return n("blockquote",[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("# 生成一个可供发布的压缩包\n$ git archive\n")])])])])}],a=e(0),r=Object(a.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("作者： "),e("a",{attrs:{href:"https://www.thisliuyang.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("刘洋"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("日期： "),e("a",{attrs:{href:"https://www.thisliuyang.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("2016年4月30日"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://learngitbranching.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("通过一系列刺激的关卡挑战，逐步深入的学习 Git 的强大功能 "),e("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("下面是我整理的常用 Git 命令清单。几个专用名词的译名如下。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),e("p",[t._v("（完）")])])},i,!1,null,null,null);n.default=r.exports}}]);
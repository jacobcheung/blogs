(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{688:function(t,a,e){"use strict";e.r(a);var s=e(9),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("基础服务")]),t._v(" "),e("p",[t._v("Inspire by http://seven-kl.netease.com/docs/27432/#/component/layout")]),t._v(" "),e("ul",[e("li",[t._v("一期\n"),e("ul",[e("li",[t._v("[x] 组件 element，必要时自定义样式")]),t._v(" "),e("li",[t._v("[x] AI组件 + kaola组件")]),t._v(" "),e("li",[t._v("[ ] 模板")]),t._v(" "),e("li",[t._v("[ ] 官网 Vuepress")])])]),t._v(" "),e("li",[t._v("二期\n"),e("ul",[e("li",[t._v("区块物料")])])])]),t._v(" "),e("h1",{attrs:{id:"jumpter-lab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jumpter-lab"}},[t._v("#")]),t._v(" jumpter lab")]),t._v(" "),e("h2",{attrs:{id:"_1-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[t._v("#")]),t._v(" 1. 安装")]),t._v(" "),e("h3",{attrs:{id:"一：安装conda（推荐）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一：安装conda（推荐）"}},[t._v("#")]),t._v(" 一：安装conda（推荐）")]),t._v(" "),e("p",[t._v("conda隔离环境作用（有点类似虚拟机）。")]),t._v(" "),e("ul",[e("li",[t._v("记住安装位置")]),t._v(" "),e("li",[t._v("把conda命令放在zsh中。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 创建虚拟环境并下载jupyterlab cookiecutter nodejs git。\nconda create -n jupyterlab-ext --override-channels --strict-channel-priority -c conda-forge -c anaconda jupyterlab cookiecutter nodejs git\n\n# 激活虚拟环境\n# 此时安装的jupyterlab是在其env环境内，使用which pip命令就理解了\nconda activate jupyterlab-ext\n")])])]),e("h3",{attrs:{id:"二：或者直接安装jupyterlab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二：或者直接安装jupyterlab"}},[t._v("#")]),t._v(" 二：或者直接安装jupyterlab")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("pip install jupyterlab cookiecutter\n")])])]),e("blockquote",[e("p",[t._v("使用conda虚拟环境时，以下所有的操作都要执行"),e("code",[t._v("conda activate jupyterlab-ext")]),t._v("以后")])]),t._v(" "),e("h2",{attrs:{id:"_2-启动jupyterlab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动jupyterlab"}},[t._v("#")]),t._v(" 2. 启动jupyterlab")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("jupyter lab "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启jupyter lab")]),t._v("\njupyter lab build "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 手动编译application。当完成插件修改时，手动build可以自动install 所有插件")]),t._v("\n")])])]),e("h2",{attrs:{id:"_3-插件开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-插件开发"}},[t._v("#")]),t._v(" 3. 插件开发")]),t._v(" "),e("h3",{attrs:{id:"下载模板代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载模板代码"}},[t._v("#")]),t._v(" 下载模板代码")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# cookiecutter工具下载\ncookiecutter https://github.com/jupyterlab/extension-cookiecutter-ts --checkout v1.0\n\ncd jupyterlab_apod\n\n# 初始项目依赖并构建项目\njlpm install\njupyter labextension install . # 插件安装到jupyterlab工具上\n")])])]),e("h3",{attrs:{id:"jupyter插件应用到jupyterlab上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jupyter插件应用到jupyterlab上"}},[t._v("#")]),t._v(" jupyter插件应用到jupyterlab上")]),t._v(" "),e("p",[t._v("https://jupyterlab.readthedocs.io/en/stable/user/extensions.html")]),t._v(" "),e("p",[t._v("类似于npm插件：")]),t._v(" "),e("ul",[e("li",[t._v("install 安装没带--no-build时，会重启lab进程；")]),t._v(" "),e("li",[t._v("install支持多个package一起安装")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("jupyter labextension list "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 已安装的list")]),t._v("\n\njupyter labextension "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" my-extension "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm包(安装后自动会编译application)")]),t._v("\njupyter labextension "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" --no-build "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装本地包,同时不编译application")]),t._v("\n\njupyter labextension uninstall my-extension\n")])])]),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("p",[t._v("https://juejin.im/post/5dc2658d6fb9a04a6d7f1e0d")])])}),[],!1,null,null,null);a.default=n.exports}}]);
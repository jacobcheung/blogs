(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{441:function(n,e,t){"use strict";t.r(e);var s=t(7),a=Object(s.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("公司ndp流程，以dl.netease.com为例：")]),n._v(" "),t("ol",[t("li",[n._v("80端口访问到"),t("strong",[n._v("杭研")]),n._v("机器，机器上的nginx会转发到"),t("strong",[n._v("AI")]),n._v("机器上的80端口")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("# 杭研\nserver {\n    listen 80;\n\n    server_name dl.netease.com;\n    index index.html;\n\n    charset utf-8;\n    location / {\n        proxy_pass http://dramatic-offical-website; # 代理到目标地址\n    }\n}\n\n# 设定负载均衡后台服务器列表\nupstream dramatic-offical-website {\n    server 10.192.106.133;\n}\n")])])]),t("ol",{attrs:{start:"2"}},[t("li")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("# AI机器：10.192.106.133\nserver {\n    listen 80;\n\n    index index.html;\n    charset utf-8;\n\n    location / {\n        # root  /home/mm/deeplearn_fed/test/dist; # 静态文件模板\n        proxy_pass http://10.192.106.133:3000; # 或者Node/Java服务\n        index  index.html index.htm dashboard.html;\n    }\n")])])]),t("h2",{attrs:{id:"登录跳板集并操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#登录跳板集并操作"}},[n._v("#")]),n._v(" 登录跳板集并操作")]),n._v(" "),t("ol",[t("li",[n._v("堡垒机设置 http://doc.hz.netease.com/pages/viewpage.action?pageId=203188176\n"),t("ul",[t("li",[n._v(".ssh/config添加login配置")]),n._v(" "),t("li",[n._v("ssh-add -K .ssh/id_rsa  #将私钥添加进 Mac 本身的钥匙串")])])]),n._v(" "),t("li",[n._v("堡垒机操作。堡垒机类似之前的be8，以此为跳板，到指定机器。")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("# 登录到指定机器上\nssh login\nssh hzabj-aidept-dl4.server.163.org\n\n# 查看nginx\nsudo -iu mm\ncd /etc/nginx/conf.d/\n\n# linux重启nginx命令\nsudo /etc/init.d/nginx reload\n")])])]),t("blockquote",[t("p",[n._v("ssh-add命令是把专用密钥添加到ssh-agent的高速缓存中。该命令位置在/usr/bin/ssh-add。")])])])}),[],!1,null,null,null);e.default=a.exports}}]);
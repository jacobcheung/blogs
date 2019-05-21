(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{320:function(e,t,v){"use strict";v.r(t);var a=v(9),_=Object(a.a)({},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"http"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http","aria-hidden":"true"}},[e._v("#")]),e._v(" http")]),e._v(" "),v("h3",{attrs:{id:"三次握手，四次挥手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三次握手，四次挥手","aria-hidden":"true"}},[e._v("#")]),e._v(" 三次握手，四次挥手")]),e._v(" "),v("p",[e._v("TCP三次握手")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("第一次握手")]),e._v("：建立连接时，客户端"),v("code",[e._v("发送syn包")]),e._v("（syn=j）到服务器，并"),v("code",[e._v("进入SYN_SENT状态")]),e._v("，等待服务器确认；SYN：同步序列编号（Synchronize Sequence Numbers）。")]),e._v(" "),v("li",[v("code",[e._v("第二次握手")]),e._v("：服务器收到syn包，必须确认客户的SYN（ack=j+1），同时自己也发送一个SYN包（syn=k），即"),v("code",[e._v("SYN+ACK包")]),e._v("，此时服务器进入"),v("code",[e._v("SYN_RECV状态")]),e._v("；")]),e._v(" "),v("li",[v("code",[e._v("第三次握手")]),e._v("：客户端收到服务器的"),v("code",[e._v("SYN+ACK包")]),e._v("，向服务器发送确认包ACK(ack=k+1），此包发送完毕，客户端和服务器进入"),v("code",[e._v("ESTABLISHED（TCP连接成功）状态")]),e._v("，完成三次握手。\n完成三次握手，客户端与服务器开始传送数据。这样就保证了，每次传送数据都会准确到达目标设备了。")])]),e._v(" "),v("p",[e._v("TCP四次挥手")]),e._v(" "),v("ol",[v("li",[e._v("客户端A发送一个"),v("code",[e._v("FIN")]),e._v("，用来关闭客户A到服务器B的数据传送。")]),e._v(" "),v("li",[e._v("服务器B收到这个FIN，它"),v("code",[e._v("发回一个ACK")]),e._v("，确认序号为收到的序号加1。和SYN一样，一个FIN将占用一个序号。")]),e._v(" "),v("li",[e._v("服务器B关闭与客户端A的连接，发送一个"),v("code",[e._v("FIN给客户端A")]),e._v("。")]),e._v(" "),v("li",[v("code",[e._v("客户端A发回ACK")]),e._v("报文确认，并将确认序号设置为收到序号加1。")])]),e._v(" "),v("h3",{attrs:{id:"状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#状态码","aria-hidden":"true"}},[e._v("#")]),e._v(" 状态码")]),e._v(" "),v("p",[e._v("202: 服务器已接受请求，但尚未处理。 204: 服务器成功处理了请求，没有返回任何内容。")]),e._v(" "),v("p",[e._v("Cache-Control、Expires、Etag 和 Last-Modified 来设置 HTTP 缓存外")]),e._v(" "),v("p",[v("code",[e._v("强缓存：让客户端决定是否向服务器发送请求")]),e._v("（在chrome下表现为200 from cache）")]),e._v(" "),v("ul",[v("li",[e._v("http1.0\n"),v("ul",[v("li",[e._v("Expires"),v("sup",[v("code",[e._v("通用")])]),e._v("。启用缓存和定义缓存时间。时间是相对服务器")]),e._v(" "),v("li",[e._v("Pragma"),v("sup",[v("code",[e._v("通用")])]),e._v("。禁用缓存，字段值为no-cache的时候")])])]),e._v(" "),v("li",[e._v("http1.1\n"),v("ul",[v("li",[e._v("Cache-Control"),v("sup",[v("code",[e._v("通用")])]),e._v("。启用缓存/禁用缓存/定义时间（max-age相对时间）")])])])]),e._v(" "),v("p",[e._v("优先级从高到低分别是 Pragma -> Cache-Control -> Expires 。")]),e._v(" "),v("p",[v("code",[e._v("对比缓存")]),e._v("：让客户端与服务器之间能实现缓存文件是否更新的验证。")]),e._v(" "),v("ul",[v("li",[e._v("Last-Modified"),v("sup",[v("code",[e._v("响应")])]),e._v("。响应时，告诉浏览器资源的最后修改时间。")]),e._v(" "),v("li",[e._v("If-Modified-Since"),v("sup",[v("code",[e._v("请求")])]),e._v("。再次请求时，发送Last-Modified值。服务器拿到对比文件修改时间，没修改304，有修改200。")])]),e._v(" "),v("p",[v("code",[e._v("协商缓存")]),e._v("：因为存在文件修改，但内容没改，所以另外一种方式通过ETag数据比对（优先级高于Last-Modified / If-Modified-Since）")]),e._v(" "),v("ul",[v("li",[e._v("ETag"),v("sup",[v("code",[e._v("响应")])]),e._v("。")]),e._v(" "),v("li",[e._v("If-None-Match"),v("sup",[v("code",[e._v("请求")])]),e._v("。")])]),e._v(" "),v("blockquote",[v("p",[e._v("通用首部字段，这意味着它能分别在请求报文和响应报文中使用")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://images2015.cnblogs.com/blog/632130/201702/632130-20170210141453338-1263276228.png",alt:""}})]),e._v(" "),v("h3",{attrs:{id:"安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安全","aria-hidden":"true"}},[e._v("#")]),e._v(" 安全")]),e._v(" "),v("ol",[v("li",[v("p",[v("code",[e._v("XSS")]),e._v("：跨站脚本攻击，是属于代码注入的一种。攻击者通过将代码注入网页中，其他用户看到会受到影响(代码内容有请求外部服务器);\n防范：")]),e._v(" "),v("ul",[v("li",[e._v("转义 < > 这些特殊字符为实体字符")]),e._v(" "),v("li",[e._v("利用正则判断攻击脚本")]),e._v(" "),v("li",[e._v("尽量修改节点文本而不是修改节点内容html")])])]),e._v(" "),v("li",[v("p",[v("code",[e._v("CSRF")]),e._v('（Cross-site request forgery）：一种跨站请求伪造，冒充用户发起请求，完成一些违背用户请求的行为。比如，你开发的网站中，有一个购买商品的操作，使用get接口。那么黑客网站就可以通过<image src="开发网站地址"，去调用你的开发网站（比如刷票）。\n防范：')]),e._v(" "),v("ul",[v("li",[e._v("尽量对要修改数据的请求使用post而不是get")]),e._v(" "),v("li",[e._v("给每一次用户登陆分配一个临时token，用服务端的setCookie头将此token种入用户cookie中，每次请求比对用户方token与服务器端token是否吻合。")]),e._v(" "),v("li",[e._v("服务器禁止跨域请求")]),e._v(" "),v("li",[e._v("及时清除用户的无效cookie")])])]),e._v(" "),v("li",[v("p",[e._v("网络劫持攻击。防范：https加密")])])]),e._v(" "),v("h2",{attrs:{id:"react"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#react","aria-hidden":"true"}},[e._v("#")]),e._v(" React")]),e._v(" "),v("h3",{attrs:{id:"setstate"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#setstate","aria-hidden":"true"}},[e._v("#")]),e._v(" setState")]),e._v(" "),v("h3",{attrs:{id:"redux"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redux","aria-hidden":"true"}},[e._v("#")]),e._v(" Redux")]),e._v(" "),v("h3",{attrs:{id:"mobx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mobx","aria-hidden":"true"}},[e._v("#")]),e._v(" Mobx")]),e._v(" "),v("h3",{attrs:{id:"生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生命周期","aria-hidden":"true"}},[e._v("#")]),e._v(" 生命周期")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://user-images.githubusercontent.com/6310131/57915545-9ed18d80-78c3-11e9-8aa5-6d1fb2cd6f63.png",alt:"image"}})]),e._v(" "),v("ul",[v("li",[e._v("创建时。将我们的组件插入到DOM中\n"),v("ul",[v("li",[e._v("constructor")]),e._v(" "),v("li",[e._v("render")]),e._v(" "),v("li",[e._v("componentDidMount")])])]),e._v(" "),v("li",[e._v("更新时\n"),v("ul",[v("li",[e._v("shouldComponentUpdate")]),e._v(" "),v("li",[e._v("render")]),e._v(" "),v("li",[e._v("componentDidUpdate")])])]),e._v(" "),v("li",[e._v("卸载时\n"),v("ul",[v("li",[e._v("componentWillunMount")])])]),e._v(" "),v("li",[e._v("废弃的三个生命周期\n"),v("ul",[v("li",[v("s",[e._v("componentWillMount")])]),e._v(" "),v("li",[v("s",[e._v("componentWillReceiveProps")])]),e._v(" "),v("li",[v("s",[e._v("componentWillUpdate")])])])]),e._v(" "),v("li",[e._v("取而代之的是两个新的生命周期函数\n"),v("ul",[v("li",[e._v("static getDerivedStateFromProps。当我们接收到新的属性想去修改我们state，可以使用getDerivedStateFromProps")]),e._v(" "),v("li",[e._v("getSnapshotBeforeUpdate")])])])]),e._v(" "),v("h3",{attrs:{id:"immutable-js"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#immutable-js","aria-hidden":"true"}},[e._v("#")]),e._v(" immutable.js")]),e._v(" "),v("p",[e._v("Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable 实现的原理是 "),v("code",[e._v("Persistent Data Structure（持久化数据结构）")]),e._v("，也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了 "),v("code",[e._v("Structural Sharing（结构共享）")]),e._v("，即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享。")]),e._v(" "),v("p",[e._v("Immutable.js本质上是一个JavaScript的持久化数据结构的库")]),e._v(" "),v("h3",{attrs:{id:"hooks"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hooks","aria-hidden":"true"}},[e._v("#")]),e._v(" Hooks")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("hooks是什么")]),e._v(" "),v("ul",[v("li",[e._v("React Hooks是React特殊的一类函数。要解决的问题是状态共享，是继 render-props 和 higher-order components 之后的第三种状态共享方案，不会产生 JSX 嵌套地狱问题。这个状态指的是状态逻辑，所以称为状态逻辑复用会更恰当，因为只共享数据处理逻辑，不会共享数据本身。")]),e._v(" "),v("li",[e._v("React Hooks 带来的好处不仅是 “更 FP，更新粒度更细，代码更清晰”，还有如下三个特性：\n"),v("ul",[v("li",[e._v("多个状态不会产生嵌套，写法还是平铺的（renderProps 可以通过 compose 解决，可不但使用略为繁琐，而且因为强制封装一个新对象而增加了实体数量）。")]),e._v(" "),v("li",[e._v("Hooks 可以引用其他 Hooks。")]),e._v(" "),v("li",[e._v("更容易将组件的 UI 与状态分离。")])])])])]),e._v(" "),v("li",[v("p",[e._v("为什么要hooks")]),e._v(" "),v("ul",[v("li",[e._v("复用有状态的组件太难。之前使用渲染属性（Render Props）和高阶组件（Higher-Order Components）复用，但层级太多")]),e._v(" "),v("li",[e._v("生命周期钩子函数里的逻辑太乱。")]),e._v(" "),v("li",[e._v("class this指向问题")])])])]),e._v(" "),v("h3",{attrs:{id:"为什么要fiber（v16引入）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要fiber（v16引入）","aria-hidden":"true"}},[e._v("#")]),e._v(" 为什么要fiber（V16引入）")]),e._v(" "),v("p",[e._v("性能。react在进行组件渲染时，从setState开始到渲染完成整个过程是同步的（“一气呵成”）。如果需要渲染的组件比较庞大，js执行会占据主线程时间较长，会导致页面响应度变差，使得react在动画、手势等应用中效果比较差。")]),e._v(" "),v("p",[e._v("React 15 及之前版本，"),v("code",[e._v("协调算法（Stack Reconciler）会一次同步处理整个组件树。它会递归遍历每个组件（虚拟DOM树），去比较新旧两颗树，得到需要更新的部分")]),e._v("。这个过程基于递归调用，一旦开始，很难去打断。也就是说，一旦工作量大，就会堵塞整个主线程（The main thread is the same as the UI thread.）。\n而事实上，我们的更新工作可能并不需要一次性全部完成，比如 offscreen 的 UI 更新并不紧急，比如 动画 需要优先完成——我们可以根据优先级调整工作，把diff过程按时间分片！")]),e._v(" "),v("h2",{attrs:{id:"vue"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue","aria-hidden":"true"}},[e._v("#")]),e._v(" Vue")]),e._v(" "),v("h3",{attrs:{id:"ssr"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ssr","aria-hidden":"true"}},[e._v("#")]),e._v(" SSR")]),e._v(" "),v("ul",[v("li",[e._v("服务端渲染\n服务端在返回 html 之前，在特定的区域，符号里用数据填充，再给客户端，客户端只负责解析 HTML 。")]),e._v(" "),v("li",[e._v("客户端渲染html 仅仅作为静态文件，客户端端在请求时，服务端不做任何处理，直接以原文件的形式返回给客户端客户端，然后根据 html 上的 JavaScript，生成 DOM 插入 html。")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/3/4/161ef7bf329e8812?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),e._v(" "),v("p",[e._v("其基本实现原理：")]),e._v(" "),v("ul",[v("li",[e._v("app.js 作为客户端与服务端的公用入口，导出 Vue 根实例，供客户端 entry 与服务端 entry 使用。客户端 entry 主要作用挂载到 DOM 上，服务端 entry 除了创建和返回实例，还进行路由匹配与数据预获取。")]),e._v(" "),v("li",[e._v("webpack 为客服端打包一个 Client Bundle ，为服务端打包一个 Server Bundle 。")]),e._v(" "),v("li",[e._v("服务器接收请求时，会根据 url，加载相应组件，获取和解析异步数据，创建一个读取 Server Bundle 的 BundleRenderer，然后生成 html 发送给客户端。")])]),e._v(" "),v("p",[e._v("Vue SSR 的实现，主要就是把 Vue 的组件输出成一个完整 HTML。纯客户端输出过程有一个 complier 过程（「下题」中有一个简单描述），主要作用是将 template 转化成 render 字符串 。\nVue SSR 需要做的事多点（输出完整 HTML），除了 complier -> vnode，还需如数据获取填充至 HTML、客户端混合（hydration）、缓存等等。")]),e._v(" "),v("h3",{attrs:{id:"vue-router"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-router","aria-hidden":"true"}},[e._v("#")]),e._v(" Vue-Router")]),e._v(" "),v("ul",[v("li",[e._v("history")]),e._v(" "),v("li",[e._v("hash")]),e._v(" "),v("li",[e._v("abstract")])]),e._v(" "),v("h2",{attrs:{id:"css"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#css","aria-hidden":"true"}},[e._v("#")]),e._v(" CSS")]),e._v(" "),v("h3",{attrs:{id:"flex"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex","aria-hidden":"true"}},[e._v("#")]),e._v(" flex")]),e._v(" "),v("ul",[v("li",[e._v("容器主要属性\n"),v("ul",[v("li",[e._v("flex-direction：确定主轴方向")]),e._v(" "),v("li",[e._v("justify-content：主轴")]),e._v(" "),v("li",[e._v("align-items： 交叉轴")])])]),e._v(" "),v("li",[e._v("项目属性\n"),v("ul",[v("li",[e._v("flex： <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> 默认值为0 1 auto")])])])]),e._v(" "),v("h2",{attrs:{id:"其他"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[e._v("#")]),e._v(" 其他")]),e._v(" "),v("h3",{attrs:{id:"小程序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小程序","aria-hidden":"true"}},[e._v("#")]),e._v(" 小程序")]),e._v(" "),v("p",[e._v("小程序以离线包方式下载到本地，通过微信客户端载入和启动，开发规范简洁，技术封装彻底，自成开发体系，有 Native 和 H5 的影子，但又绝不雷同。小程序本身定位为一个简单的逻辑视图层框架。")]),e._v(" "),v("ol",[v("li",[e._v("原理：\n"),v("ul",[v("li",[e._v("小程序本质就是一个"),v("code",[e._v("单页面应用")]),e._v("，所有的页面渲染和事件处理，都在一个页面内进行，但又可以通过微信客户端调用原生的各种接口；")]),e._v(" "),v("li",[e._v("它的架构，是"),v("code",[e._v("数据驱动的架构模式")]),e._v("，它的UI和数据是分离的，所有的页面更新，都需要通过对数据的更改来实现；")]),e._v(" "),v("li",[v("code",[e._v("功能可分为webview和appService两个部分")]),e._v("；\nwebview用来展现UI，appService有来处理业务逻辑、数据及接口调用；\n两个部分在两个进程中运行，通过系统层JSBridge实现通信，实现UI的渲染、事件的处理等。(this.data的属性是不可以同步到视图的，必须调用this.setData()方法)")])])]),e._v(" "),v("li",[e._v("生命周期函数：\n"),v("ul",[v("li",[e._v("onLoad() 页面加载时触发，只会调用一次，可获取当前页面路径中的参数。")]),e._v(" "),v("li",[e._v("onShow() 页面显示/切入前台时触发，一般用来发送数据请求；")]),e._v(" "),v("li",[e._v("onReady() 页面初次渲染完成时触发, 只会调用一次，代表页面已可和视图层进行交互。")]),e._v(" "),v("li",[e._v("onHide() 页面隐藏/切入后台时触发, 如底部 tab 切换到其他页面或小程序切入后台等。")]),e._v(" "),v("li",[e._v("onUnload() 页面卸载时触发，如redirectTo或navigateBack到其他页面时。")])])]),e._v(" "),v("li",[v("code",[e._v("bind事件")]),e._v("绑定"),v("code",[e._v("不会阻止冒泡")]),e._v("事件向上冒泡，"),v("code",[e._v("catch事件")]),e._v("绑定可以"),v("code",[e._v("阻止")]),e._v("冒泡事件向上冒泡。")]),e._v(" "),v("li",[v("code",[e._v("mpvue")]),e._v(" 修改了 Vue.js 的 "),v("code",[e._v("运行时框架 runtime")]),e._v(" 和"),v("code",[e._v("代码编译器 compiler")]),e._v(" 实现，使其可以运行在小程序环境中，从而为小程序开发引入了整套 Vue.js 开发体验。\n"),v("ul",[v("li",[v("code",[e._v("生命周期和数据同步")]),e._v("。在 Vue.js 触发数据更新时实现数据同步。数据更新发端于小程序，处理自 Vue.js，Vue.js 数据变更后再同步到小程序。")]),e._v(" "),v("li",[v("code",[e._v("事件代理机制")]),e._v("。小程序组件节点上触发事件后，只要找到虚拟 DOM 上对应的节点，触发对应的事件。另一方面，Vue.js 事件响应如果触发了数据更新，其生命周期函数更新将自动触发，在此函数上同步更新小程序数据，数据同步也就实现了。")])])])]),e._v(" "),v("h3",{attrs:{id:"electron"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#electron","aria-hidden":"true"}},[e._v("#")]),e._v(" Electron")]),e._v(" "),v("p",[e._v("官网里这么说："),v("code",[e._v("electron 提供了一个 Nodejs 的运行时，专注于构建桌面应用，同时使用 web 页面来作为应用的 GUI")]),e._v("。你可以将其看作是一个由 JavaScript 控制的迷你版的 Chromium 浏览器。")]),e._v(" "),v("p",[e._v("翻译一下：它是一个运行时，可以像 Node 一样这样执行：electron app.js；也是一个使用 html + css + JavaScript 构建跨平台原生桌面应用的框架。本质上，electron 就是一个带了 Chrome 浏览器的壳子（无需考虑兼容性的问题）。")]),e._v(" "),v("p",[e._v("electron 用 web 页面作为它的 GUI，而不是绑定了 GUI 库的 JavaScript。它结合了 Chromium、Node.js 和用于调用操作系统本地功能的 APIs（如打开文件窗口、通知、图标等）。")]),e._v(" "),v("p",[v("code",[e._v("具有两个进程，分别是主进程，以及渲染进程")]),e._v("。")]),e._v(" "),v("h3",{attrs:{id:"算法排序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#算法排序","aria-hidden":"true"}},[e._v("#")]),e._v(" 算法排序")]),e._v(" "),v("h4",{attrs:{id:"冒泡算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#冒泡算法","aria-hidden":"true"}},[e._v("#")]),e._v(" 冒泡算法")]),e._v(" "),v("h4",{attrs:{id:"快速排序算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#快速排序算法","aria-hidden":"true"}},[e._v("#")]),e._v(" 快速排序算法")]),e._v(" "),v("h3",{attrs:{id:"webpack"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webpack","aria-hidden":"true"}},[e._v("#")]),e._v(" webpack")]),e._v(" "),v("p",[e._v("插件：DllPlugin和DllReferencePlugin、MiniCssExtractPlugin、HtmlWebpackPlugin、webpack.DefinePlugin")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/948614-1752f5c8993cc1a0.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp",alt:""}})])])},[],!1,null,null,null);_.options.__file="前端面试.md";t.default=_.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{505:function(e,t,r){"use strict";r.r(t);var a=r(7),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"vue3-设计思想"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue3-设计思想"}},[e._v("#")]),e._v(" Vue3 设计思想")]),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#_1-vue3-设计目标"}},[e._v("1. Vue3 设计目标")]),r("ul",[r("li",[r("a",{attrs:{href:"#_1-1-更快-proxy"}},[e._v("1.1 更快 - Proxy")])]),r("li",[r("a",{attrs:{href:"#_1-2-更快-virtual-dom-重构"}},[e._v("1.2 更快 - Virtual Dom 重构")])]),r("li",[r("a",{attrs:{href:"#_1-3-更快-更多编译优化"}},[e._v("1.3 更快 - 更多编译优化")])])])]),r("li",[r("a",{attrs:{href:"#_2-vue-设计思考"}},[e._v("2. Vue 设计思考")]),r("ul",[r("li",[r("a",{attrs:{href:"#_2-1-scope"}},[e._v("2.1 Scope")])]),r("li",[r("a",{attrs:{href:"#_2-2-jsx-vs-template"}},[e._v("2.2 JSX vs Template")])])])]),r("li",[r("a",{attrs:{href:"#_3-参考"}},[e._v("3. 参考")])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"_1-vue3-设计目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue3-设计目标"}},[e._v("#")]),e._v(" 1. Vue3 设计目标")]),e._v(" "),r("ul",[r("li",[e._v("更小")]),e._v(" "),r("li",[r("strong",[e._v("更快")]),e._v(" "),r("ol",[r("li",[e._v("Object.defineProperty -> Proxy")]),e._v(" "),r("li",[e._v("Virtual Dom 重构 -> 利用模板代码，确定动态和静态代码，在VDom Diff时优化")]),e._v(" "),r("li",[e._v("更多编译优化 -> 利用模板代码，尽可能预先优化编译的代码\n"),r("ul",[r("li",[e._v("slot默认编译为函数（不存在父子组件强耦合）")]),e._v(" "),r("li",[e._v("Momomorphic vnode factory")]),e._v(" "),r("li",[e._v("Compiler-generated flags for vnode/children types（VNode带上类型）")])])])])]),e._v(" "),r("li",[r("strong",[e._v("加强TypeScript支持")]),e._v(" "),r("ul",[r("li",[e._v("Function API")])])]),e._v(" "),r("li",[e._v("加强API设计一致性")]),e._v(" "),r("li",[e._v("提高自身可维护性")]),e._v(" "),r("li",[e._v("开放更多底层功能\n"),r("ul",[r("li",[e._v("响应式数据监听（即Vue2.x的Object.observer）")])])])]),e._v(" "),r("h3",{attrs:{id:"_1-1-更快-proxy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-更快-proxy"}},[e._v("#")]),e._v(" 1.1 更快 - Proxy")]),e._v(" "),r("p",[r("strong",[e._v("Proxy减少了组件实例初始化开销")]),e._v("。在Vue2中，"),r("code",[e._v("初始化组件时")]),e._v("会对data的属性递归调用包装（Object.defineProperty）;而在Vue3中，初始化只是书写Proxy的代理handler（Proxy包装），当"),r("code",[e._v("运行时")]),e._v("getter某个属性时，才去重新Proxy包装该值，减少了初始化组件的时间。"),r("a",{attrs:{href:"https://lq782655835.github.io/blogs/vue/vue3-reactive.html#_2-reactive",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue3此部分源码讲解"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("ES6 Proxy数据监听优点：")]),e._v(" "),r("ol",[r("li",[e._v("对对象进行直接监听, 可以"),r("code",[e._v("弥补Object.defineProperty无法监听新增删除属性的短板")])]),e._v(" "),r("li",[r("code",[e._v("无需再遍历对象进行设置")]),e._v("监听函数Object.defineProperty")]),e._v(" "),r("li",[e._v("可以"),r("code",[e._v("适用于Array")]),e._v(", 不需要再分成两种写法")])]),e._v(" "),r("h3",{attrs:{id:"_1-2-更快-virtual-dom-重构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-更快-virtual-dom-重构"}},[e._v("#")]),e._v(" 1.2 更快 - Virtual Dom 重构")]),e._v(" "),r("p",[r("code",[e._v("VDOM作用, 状态（或者叫数据）驱动UI，开发者只考虑状态改变，而UI会自动变化，这就是VDOM的最大价值。")]),e._v("所以在VDOM基础上，UI不仅可以是DOM元素（web端），也可以是Native（移动端）。")]),e._v(" "),r("h4",{attrs:{id:"传统virtual-dom的性能瓶颈"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#传统virtual-dom的性能瓶颈"}},[e._v("#")]),e._v(" 传统Virtual DOM的性能瓶颈")]),e._v(" "),r("p",[e._v("数据变更之后，新的Virtual DOM和旧的Virtual DOM进行 patch 算法比较，并算出二者之间的差异，将差异进行修改。但是传统Virtual DOM，进行算法比对时颗粒度是组件，每个组件作为一个颗粒。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://user-images.githubusercontent.com/6310131/71469020-deba0500-2802-11ea-9651-a1708157f4b1.png",alt:"image"}})]),e._v(" "),r("p",[e._v("虽然Vue能够保证触发更新的组件最小化，但是单个组件内部依然需要遍历该组件的整个Virtual DOM树。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://user-images.githubusercontent.com/6310131/71469032-e7aad680-2802-11ea-9d03-1582054c4d02.png",alt:"image"}})]),e._v(" "),r("p",[e._v("传统Virtual DOM的性能跟模板大小正相关，跟动态节点的数量无关。模板或者组件有多大，那么在进行数据更新时损耗的性能就有多大，但实际上，这种方式利用率很低。如上图所示，在上述template中，发生改变的地方只有message插值的部分，整体结构不变，但是数据更新的时候，比对整个template结构，这样就存在性能损耗。\n所以在一些组件整个模板内只有少量动态节点的情况下，传统方法遍历存在性能的浪费。")]),e._v(" "),r("h4",{attrs:{id:"vue3-0-virtual-dom"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue3-0-virtual-dom"}},[e._v("#")]),e._v(" Vue3.0 Virtual DOM")]),e._v(" "),r("p",[e._v("如果要追求极致的性能，最快速的就是利用模板进行数据监听，当数据变化时，直接更新对应的DOM元素（此时可以不用VDOM，"),r("a",{attrs:{href:"https://svelte.dev/blog/virtual-dom-is-pure-overhead",target:"_blank",rel:"noopener noreferrer"}},[e._v("Svelte"),r("OutboundLink")],1),e._v("框架就是无VDOM）。这种方式适合开发纯template模板，因为一旦模板确定，就可以根据模板进行预编译，简单高效。")]),e._v(" "),r("p",[e._v("但这种开发方式有个弊端，无法利用js的灵活性。当开发者使用render function/JSX时，根本无法预知代码意图，所以Svelte书写上无法支持render function/JSX。Vue3所要做的：保留VDOM，兼容手写render function，同时最大化利用模版静态信息。")]),e._v(" "),r("h4",{attrs:{id:"解决方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[e._v("#")]),e._v(" 解决方案")]),e._v(" "),r("p",[r("code",[e._v("动静结合")]),e._v("，找到动态变化的部分，更新时只对比可以变化的部分，减少性能损耗。")]),e._v(" "),r("p",[r("code",[e._v("实现上，就是在模板编译时，给各个VNode带上type类型，区分不同的变更需求，然后在VDOM时对不同type的VNode更新做优化处理")]),e._v("。Vue3重构的VDOM源码讲解，会在往后单独开一篇文章讲解，这里把核心源码贴上：")]),e._v(" "),r("ul",[r("li",[e._v("Vue3 DOM算法：https://github.com/vuejs/vue-next/blob/master/packages/runtime-core/src/renderer.ts")]),e._v(" "),r("li",[e._v("Vue2 DOM算法：https://github.com/vuejs/vue/blob/dev/src/core/vdom/patch.js")])]),e._v(" "),r("h3",{attrs:{id:"_1-3-更快-更多编译优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-更快-更多编译优化"}},[e._v("#")]),e._v(" 1.3 更快 - 更多编译优化")]),e._v(" "),r("p",[e._v("主要是利用模板代码的可预见性，在编译时做好编译优化")]),e._v(" "),r("ul",[r("li",[e._v("优化slots生成。slot编译时统一为函数（v-slot），父子组件slot渲染分离。")]),e._v(" "),r("li",[e._v("静态内容提取。模板不变时，diff跳过（Vue2已优化）")]),e._v(" "),r("li",[e._v("静态属性提取\n"),r("img",{attrs:{src:"https://user-images.githubusercontent.com/6310131/71466334-3c961f00-27fa-11ea-9202-075037a0de77.png",alt:"image"}})]),e._v(" "),r("li",[e._v("内联函数提取\n"),r("img",{attrs:{src:"https://user-images.githubusercontent.com/6310131/71466569-ef667d00-27fa-11ea-9623-bdbcf34bbe66.png",alt:"image"}})])]),e._v(" "),r("h2",{attrs:{id:"_2-vue-设计思考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue-设计思考"}},[e._v("#")]),e._v(" 2. Vue 设计思考")]),e._v(" "),r("h3",{attrs:{id:"_2-1-scope"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-scope"}},[e._v("#")]),e._v(" 2.1 Scope")]),e._v(" "),r("p",[e._v("框架职责，React主要聚合在底层，不会像Angular一样大包大揽，拥有Route、Form解决方案等。")]),e._v(" "),r("ol",[r("li",[e._v("Scope小\n"),r("ul",[r("li",[e._v("优点：只关注底层，不用再维护额外的解决方案，都丢给社区。上手快，因为记忆小。")]),e._v(" "),r("li",[e._v("缺点：解决方案分散（另一个维度，造就社区繁荣）")])])])]),e._v(" "),r("h3",{attrs:{id:"_2-2-jsx-vs-template"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-jsx-vs-template"}},[e._v("#")]),e._v(" 2.2 JSX vs Template")]),e._v(" "),r("ol",[r("li",[e._v("JSX：\n"),r("ul",[r("li",[e._v("优点：完整的JS表达能力、视图即数据")]),e._v(" "),r("li",[e._v("缺点：VDOM难以优化，因为js动态性，无法预先优化")])])]),e._v(" "),r("li",[e._v("Template\n"),r("ul",[r("li",[e._v("优点：可以预先优化VDOM")])])])]),e._v(" "),r("h2",{attrs:{id:"_3-参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-参考"}},[e._v("#")]),e._v(" 3. 参考")]),e._v(" "),r("p",[e._v("以上思想主要来自Vue作者尤雨溪的多个VueConf大会视频，笔者在理解基础上进行总结，建议读者完整看原视频。")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.bilibili.com/video/av56093550?from=search&seid=17425026665332701435",target:"_blank",rel:"noopener noreferrer"}},[e._v("VueConf 2019-上海演讲视频"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.bilibili.com/video/av48968552?from=search&seid=11269305592002355043",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue 3.0 进展@VueConf CN 2018"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.bilibili.com/video/av80042358?from=search&seid=17425026665332701435",target:"_blank",rel:"noopener noreferrer"}},[e._v("在框架设计中寻求平衡"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=v.exports}}]);
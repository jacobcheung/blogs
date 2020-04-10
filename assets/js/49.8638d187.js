(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{316:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"es6-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-object"}},[t._v("#")]),t._v(" ES6-Object")]),t._v(" "),a("p",[t._v("Object是js最重要的数据结构，es6对其进行了重大升级。除了"),a("a",{attrs:{href:"https://github.com/lq782655835/blogs/issues/23",target:"_blank",rel:"noopener noreferrer"}},[t._v("解构"),a("OutboundLink")],1),t._v("外，Object还提供了大量的基础方法。另外Object对象属性及其方法太常用，有些相似的方法容易使用错误，故根据"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),a("OutboundLink")],1),t._v("归类整理。注意文中重点标注的文字以及角标标注的ES发布版本。")]),t._v(" "),a("h2",{attrs:{id:"_1-key-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-key-value"}},[t._v("#")]),t._v(" 1. Key/Value")]),t._v(" "),a("h3",{attrs:{id:"_1-1-object-keys-obj-es5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-object-keys-obj-es5"}},[t._v("#")]),t._v(" 1.1 Object.keys(obj)"),a("sup",[a("code",[t._v("ES5")])])]),t._v(" "),a("p",[t._v("该方法返回一个"),a("code",[t._v("给定对象的自身可枚举属性")]),t._v("组成的数组。")]),t._v(" "),a("p",[t._v("只列出自身的枚举属性（内部使用obj.hasOwnProperty(prop)指示对象自身属性中是否具有指定的属性）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keys "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" prop "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"_1-2-object-values-obj-es8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-object-values-obj-es8"}},[t._v("#")]),t._v(" 1.2 Object.values(obj)"),a("sup",[a("code",[t._v("ES8")])])]),t._v(" "),a("p",[t._v("该方法返回一个"),a("code",[t._v("给定对象自身的所有可枚举属性值")]),t._v("的数组。")]),t._v(" "),a("p",[t._v("只列出自身的枚举属性值")]),t._v(" "),a("h3",{attrs:{id:"_1-3-object-entries-obj-es8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-object-entries-obj-es8"}},[t._v("#")]),t._v(" 1.3 Object.entries(obj)"),a("sup",[a("code",[t._v("ES8")])])]),t._v(" "),a("p",[t._v("该方法返回一个"),a("code",[t._v("给定对象自身可枚举属性的键值对")]),t._v("数组。")]),t._v(" "),a("p",[t._v("只列出自身枚举的键值对数组。")]),t._v(" "),a("p",[t._v("Object.fromEntries()"),a("sup",[a("code",[t._v("Stage 3")])]),t._v("是其逆方法，把键值对列表转换为一个对象.")]),t._v(" "),a("h3",{attrs:{id:"_1-4-object-getownpropertynames-obj"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-object-getownpropertynames-obj"}},[t._v("#")]),t._v(" 1.4 Object.getOwnPropertyNames(obj)")]),t._v(" "),a("p",[t._v("该方法返回一个数组，该数组对元素是 obj"),a("code",[t._v("自身拥有的枚举或不可枚举属性")]),t._v("名称字符串。")]),t._v(" "),a("p",[t._v("自身的枚举和不枚举属性都会列出")]),t._v(" "),a("h3",{attrs:{id:"_1-5-for-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-for-in"}},[t._v("#")]),t._v(" 1.5 for ... in")]),t._v(" "),a("p",[t._v("for...in语句以任意顺序遍历一个"),a("code",[t._v("对象的可枚举属性(包括原型链上的可枚举属性)")]),t._v("。包括原型链上的可枚举属性。")]),t._v(" "),a("p",[t._v("自身和原型链上的属性。")]),t._v(" "),a("h2",{attrs:{id:"_2-descriptor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-descriptor"}},[t._v("#")]),t._v(" 2. Descriptor")]),t._v(" "),a("h3",{attrs:{id:"_2-1-object-defineproperty-obj-prop-descriptor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-object-defineproperty-obj-prop-descriptor"}},[t._v("#")]),t._v(" 2.1 Object.defineProperty(obj, prop, descriptor)")]),t._v(" "),a("p",[t._v("该方法会直接在一个对象上定义"),a("code",[t._v("一个")]),t._v("新属性，或者修改一个对象的现有属性， 并返回这个对象。")]),t._v(" "),a("ul",[a("li",[t._v("descriptor\n"),a("ul",[a("li",[t._v("configurable。 如果为false，则任何尝试删除目标属性或修改属性特性（writable, configurable, enumerable）的行为将被无效化。所以通常属性都有特性时，可以把configurable设置为true即可。")]),t._v(" "),a("li",[t._v("writable 是否可写。设置成 false，则任何对该属性改写的操作都无效（但不会报错，严格模式下会报错），默认false。")]),t._v(" "),a("li",[t._v("enumerable。是否能在for-in循环中遍历出来或在Object.keys中列举出来。")])])])]),t._v(" "),a("p",[a("code",[t._v("Reflect.defineProperty(target, propertyKey, attributes)")]),t._v("和以上Object.defineProperty类似，不过它返回一个Boolean值")]),t._v(" "),a("p",[a("code",[t._v("Object.getOwnPropertyDescriptor()")]),t._v("返回对象对应的属性描述符。")]),t._v(" "),a("h4",{attrs:{id:"案例："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例："}},[t._v("#")]),t._v(" 案例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" object1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("object1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'property1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  writable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nobject1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("property1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("77")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// throws an error in strict mode")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("object1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("property1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// expected output: 42")]),t._v("\n")])])]),a("h4",{attrs:{id:"实际应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实际应用"}},[t._v("#")]),t._v(" 实际应用")]),t._v(" "),a("ol",[a("li",[t._v("代理：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// old")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//加入有一个目标节点， 我们想设置其位移时是这样的")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" targetDom "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'target'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" transformText "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'translateX('")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntargetDom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webkitTransform "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" transformText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntargetDom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" transformText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// new")]),t._v("\nObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'translateX'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" transformText "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'translateX('")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        dom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webkitTransform "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" transformText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        dom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" transformText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这样再后面调用的时候, 十分简单")]),t._v("\ndom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("translateX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("translateX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("express获取属性时警告内容")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'urlencoded'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bodyParser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'compress'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Most middleware (like '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("') is no longer bundled with Express and must be installed separately.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    configurable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-2-object-defineproperties-obj-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-object-defineproperties-obj-props"}},[t._v("#")]),t._v(" 2.2 Object.defineProperties(obj, props)")]),t._v(" "),a("p",[t._v("该方法直接在一个对象上定义"),a("code",[t._v("一个或多个")]),t._v("新的属性或修改现有属性，并返回该对象。")]),t._v(" "),a("p",[t._v("Object.getOwnPropertyDescriptors()"),a("sup",[a("code",[t._v("ES8")])]),t._v("返回对象所有属性描述符。该方法引入目的是为了解决Object.assign()无法正确拷贝get属性和set属性的问题，"),a("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/object-methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("详见此"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"_3-other"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-other"}},[t._v("#")]),t._v(" 3. Other")]),t._v(" "),a("h3",{attrs:{id:"_3-1-object-create-proto-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-object-create-proto-props"}},[t._v("#")]),t._v(" 3.1 Object.create(proto, [props])")]),t._v(" "),a("p",[t._v("根据已有的对象作为原型，创建新的对象。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Object.create polyfill")]),t._v("\nObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("proto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("F")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("F")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" proto\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("F")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"举例："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例："}},[t._v("#")]),t._v(" 举例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  isHuman"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("printIntroduction")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("My name is ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(". Am I human? ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isHuman"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" me "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Matthew"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "name" is a property set on "me", but not on "person"')]),t._v("\nme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isHuman "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// inherited properties can be overwritten")]),t._v("\nme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printIntroduction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myObject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"思考题：为什么要有object-create-null-？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考题：为什么要有object-create-null-？"}},[t._v("#")]),t._v(" 思考题：为什么要有Object.create(null)？")]),t._v(" "),a("p",[t._v("Object.create(null)创建一个对象，但这个对象的原型链为null，即Fn.prototype = null")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回纯{}对象，无prototype")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attr "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// throw error")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// throw error")]),t._v("\n\nb "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {}")]),t._v("\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attr "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// throw error")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// d表现与c一致，毕竟只是多嵌套了一层原型链")]),t._v("\nc "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { __proto__: {constructor: ƒ, ...} }")]),t._v("\nc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attr "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\nc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {constructor: ƒ, ...}")]),t._v("\nc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "[object Object]"')]),t._v("\n")])])]),a("p",[a("code",[t._v("需要Object.create(null)的时候")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("需要一个非常干净且高度可定制的对象当作数据字典的时候")]),t._v(" "),a("li",[t._v("不考虑for in到原型链的属性（与Object.keys()等效）")])]),t._v(" "),a("p",[t._v("所以绝大部分时候是直接使用"),a("code",[t._v("{}")])]),t._v(" "),a("h3",{attrs:{id:"_3-2-object-assign-target-sources-es6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-object-assign-target-sources-es6"}},[t._v("#")]),t._v(" 3.2 Object.assign(target, ...sources)"),a("sup",[a("code",[t._v("ES6")])])]),t._v(" "),a("p",[t._v("该方法用于将所有可枚举属性的值从一个或多个源对象"),a("code",[t._v("复制")]),t._v("到目标对象。它将返回目标对象。（翻看源码能知道，它是一层浅拷贝）")]),t._v(" "),a("h3",{attrs:{id:"_3-3-object-is-value1-value2-es6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-object-is-value1-value2-es6"}},[t._v("#")]),t._v(" 3.3 Object.is(value1, value2)"),a("sup",[a("code",[t._v("ES6")])])]),t._v(" "),a("p",[t._v("该方法判断两个值是否是相同的值。")]),t._v(" "),a("p",[t._v("解决ES5中只有===和==判断的不足"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness",target:"_blank",rel:"noopener noreferrer"}},[t._v("Equality comparisons and sameness"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_3-4-object-freeze-obj-stage-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-object-freeze-obj-stage-1"}},[t._v("#")]),t._v(" 3.4 Object.freeze(obj)"),a("sup",[a("code",[t._v("Stage 1")])])]),t._v(" "),a("p",[t._v("该方法可以"),a("code",[t._v("冻结")]),t._v("一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。该方法返回被冻结的对象。目前该方法在tc39 Stage1阶段，兼容性需要看后续发展。")]),t._v(" "),a("p",[t._v("Object.isFrozen(obj)判断一个对象是否被冻结")]),t._v(" "),a("h3",{attrs:{id:"_3-5-对象的扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-对象的扩展"}},[t._v("#")]),t._v(" 3.5 对象的扩展")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象属性简写")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" baz "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等价于{ foo: foo }")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象方法简写")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" baz1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等价于 func1: function() {}")]),t._v("\n  foo\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"参考文档："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档："}},[t._v("#")]),t._v(" 参考文档：")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN Object"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/tc39/proposals/blob/master/finished-proposals.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("tc39 finished-proposals"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness",target:"_blank",rel:"noopener noreferrer"}},[t._v("Equality comparisons and sameness\n"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
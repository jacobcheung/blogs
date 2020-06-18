(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{560:function(e,t,r){"use strict";r.r(t);var _=r(9),v=Object(_.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"http-2与http-1-x比较"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-2与http-1-x比较"}},[e._v("#")]),e._v(" Http/2与Http/1.x比较")]),e._v(" "),r("p",[e._v("了解下http1的缺点，以及http2的特性。注意的是，HTTP/2 仍是对之前 HTTP 标准的扩展，而非替代。 HTTP 的应用语义不变，提供的功能不变，HTTP 方法、状态代码、URI 和标头字段等这些核心概念也不变。 这些方面的变化都不在 HTTP/2 考虑之列。")]),e._v(" "),r("h2",{attrs:{id:"http-1-x"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-1-x"}},[e._v("#")]),e._v(" HTTP/1.x")]),e._v(" "),r("p",[e._v("HTTP 协议可以算是现阶段 Web 上面最通用的协议了，在之前很长一段时间，很多应用都是基于 HTTP/1.x 协议，HTTP/1.x 协议是一个文本协议，"),r("strong",[e._v("可读性非常好，但其实并不高效")]),e._v("，笔者主要碰到过几个问题：")]),e._v(" "),r("h3",{attrs:{id:"_1-parser"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-parser"}},[e._v("#")]),e._v(" 1. Parser")]),e._v(" "),r("p",[e._v("如果要解析一个完整的 HTTP 请求，首先我们需要能正确的读出 HTTP header。HTTP header 各个 fields 使用 \\r\\n 分隔，然后跟 body 之间使用 \\r\\n\\r\\n 分隔。解析完 header 之后，我们才能从 header 里面的 content-length 拿到 body 的 size，从而读取 body。")]),e._v(" "),r("p",[e._v("这套流程其实并不高效，因为我们"),r("code",[e._v("需要读取多次，才能将一个完整的 HTTP 请求给解析出来")]),e._v("，虽然在代码实现上面，有很多优化方式，譬如：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("一次将一大块数据读取到 buffer 里面避免多次 IO read")])]),e._v(" "),r("li",[r("p",[e._v("读取的时候直接匹配 \\r\\n 的方式流式解析")])])]),e._v(" "),r("p",[e._v("但上面的方式对于高性能服务来说，终归还是会有开销。其实最主要的问题在于，"),r("code",[e._v("HTTP/1.x 的协议是 文本协议，是给人看的，对机器不友好")]),e._v("，如果要对机器友好，二进制协议才是更好的选择。")]),e._v(" "),r("p",[e._v("如果大家对解析 HTTP/1.x 很感兴趣，可以研究下 http-parser，一个非常高效小巧的 C library，见过不少框架都是集成了这个库来处理 HTTP/1.x 的。")]),e._v(" "),r("h3",{attrs:{id:"_2-request-response"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-request-response"}},[e._v("#")]),e._v(" 2. Request/Response")]),e._v(" "),r("p",[e._v("HTTP/1.x 另一个问题就在于它的交互模式，"),r("code",[e._v("一个连接每次只能一问一答，也就是client 发送了 request 之后，必须等到 response，才能继续发送下一次请求。")])]),e._v(" "),r("p",[e._v("这套机制是非常简单，但会造成网络连接利用率不高。"),r("code",[e._v("如果需要同时进行大量的交互，client 需要跟 server 建立多条连接")]),e._v("(浏览器一般有最长6个连接)，但连接的建立也是有开销的，所以为了性能，通常这些连接都是长连接一直保活的，虽然对于 server 来说同时处理百万连接也没啥太大的挑战，但终归效率不高。")]),e._v(" "),r("h3",{attrs:{id:"_3-push"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-push"}},[e._v("#")]),e._v(" 3. Push")]),e._v(" "),r("p",[e._v("用 HTTP/1.x 做过推送的同学，大概就知道有多么的痛苦，因为 HTTP/1.x 并没有推送机制。所以通常两种做法：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Long polling 方式，也就是直接给 server 挂一个连接，等待一段时间（譬如 1 分钟），如果 server 有返回或者超时，则再次重新 poll。")])]),e._v(" "),r("li",[r("p",[e._v("Web-socket，通过 upgrade 机制显式的将这条 HTTP 连接变成裸的 TCP，进行双向交互。")])])]),e._v(" "),r("p",[e._v("相比 Long polling，笔者还是更喜欢 web-socket 一点，毕竟更加高效，只是 web-socket 后面的交互并不是传统意义上面的 HTTP 了。")]),e._v(" "),r("h2",{attrs:{id:"http-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-2"}},[e._v("#")]),e._v(" Http/2")]),e._v(" "),r("p",[e._v("HTTP/2 是一个二进制协议，这也就意味着它的可读性几乎为 0。")]),e._v(" "),r("p",[e._v("在了解 HTTP/2 之前，需要知道一些通用术语：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Stream： 一个双向流，"),r("code",[e._v("一条连接可以有多个 streams")]),e._v("。")])]),e._v(" "),r("li",[r("p",[e._v("Message： 也就是逻辑上面的 request，response。")])]),e._v(" "),r("li",[r("p",[e._v("Frame:：数据传输的最小单位。每个 Frame 都属于一个特定的 stream 或者整个连接。一个 message 可能有多个 frame 组成。")])])]),e._v(" "),r("p",[e._v("详细解释下二进制分帧层（Frame），HTTP/2 所有性能增强的核心在于新的二进制分帧层，它定义了如何封装 HTTP 消息并在客户端与服务器之间传输。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://developers.google.com/web/fundamentals/performance/http2/images/binary_framing_layer01.svg?hl=zh-CN",alt:""}})]),e._v(" "),r("p",[e._v("这里所谓的“层”，指的是位于套接字接口与应用可见的高级 HTTP API 之间一个经过优化的新编码机制：HTTP 的语义（包括各种动词、方法、标头）都不受影响，不同的是传输期间对它们的编码方式变了。 HTTP/1.x 协议以换行符作为纯文本的分隔符，而 HTTP/2 将所有传输的信息分割为更小的消息和帧，并采用二进制格式对它们编码。")]),e._v(" "),r("p",[e._v("这样一来，客户端和服务器为了相互理解，都必须使用新的二进制编码机制：HTTP/1.x 客户端无法理解只支持 HTTP/2 的服务器，反之亦然。 不过不要紧，现有的应用不必担心这些变化，因为客户端和服务器会替我们完成必要的分帧工作。")]),e._v(" "),r("h3",{attrs:{id:"_1-多路复用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-多路复用"}},[e._v("#")]),e._v(" 1. 多路复用")]),e._v(" "),r("p",[e._v("在 HTTP/1.x 中，"),r("strong",[e._v("如果客户端要想发起多个并行请求以提升性能，则必须使用多个 TCP 连接")]),e._v("。 这是 HTTP/1.x 交付模型的直接结果，该模型可以保证每个连接每次只交付一个响应（响应排队）。 更糟糕的是，"),r("strong",[e._v("这种模型也会导致队首阻塞")]),e._v("，从而造成底层 TCP 连接的效率低下。")]),e._v(" "),r("p",[e._v("HTTP/2 通过 stream 支持了连接的多路复用，提高了连接的利用率。一条连接可以包含多个 streams，多个 streams 发送的数据互相不影响。")]),e._v(" "),r("blockquote",[r("p",[e._v("解决Http/1中一问一答式，可批量发送多个请求（都是通过二进制分帧frame传输数据）。同时解决队首阻塞问题。")])]),e._v(" "),r("h3",{attrs:{id:"_2-标头压缩"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-标头压缩"}},[e._v("#")]),e._v(" 2. 标头压缩")]),e._v(" "),r("p",[e._v("Http/1缺点：每个 HTTP 传输都承载一组标头，这些标头说明了传输的资源及其属性。 在 HTTP/1.x 中，此元数据始终以纯文本形式，通常会给每个传输增加 500–800 字节的开销。如果使用 HTTP Cookie，增加的开销有时会达到上千字节。")]),e._v(" "),r("p",[e._v("Http/2解决方案：为了减少此开销和提升性能，HTTP/2 使用 HPACK 压缩格式压缩请求和响应标头元数据，这种格式采用两种简单但是强大的技术：")]),e._v(" "),r("ul",[r("li",[e._v("这种格式支持通过静态霍夫曼代码对传输的标头字段进行编码，从而减小了各个传输的大小。")]),e._v(" "),r("li",[e._v("这种格式要求客户端和服务器同时维护和更新一个包含之前见过的标头字段的索引列表（换句话说，它可以建立一个共享的压缩上下文），此列表随后会用作参考，对之前传输的值进行有效编码。")])]),e._v(" "),r("p",[e._v("简单理解就是，由于是frame二进制传递数据，通过"),r("code",[e._v("维护共同的索引表")]),e._v("来对重复的表头进行值压缩。")]),e._v(" "),r("blockquote",[r("p",[e._v("解决Http/1中Header太大（如Cookie）。")])]),e._v(" "),r("h3",{attrs:{id:"_3-服务器推送"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-服务器推送"}},[e._v("#")]),e._v(" 3. 服务器推送")]),e._v(" "),r("p",[e._v("HTTP/2 新增的另一个强大的新功能是，服务器可以对一个客户端请求发送多个响应。 换句话说，除了对最初请求的响应外，服务器还可以向客户端推送额外资源，而无需客户端明确地请求。")]),e._v(" "),r("blockquote",[r("p",[e._v("解决Http/1中一问一答，服务器无法主动推送。")])]),e._v(" "),r("h3",{attrs:{id:"_4-数据流优先级"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-数据流优先级"}},[e._v("#")]),e._v(" 4. 数据流优先级")]),e._v(" "),r("p",[e._v("因为一条连接允许多个 streams 在上面发送 frame，那么在一些场景下面，我们还是希望 stream 有优先级，方便对端为不同的请求分配不同的资源。譬如对于一个 Web 站点来说，优先加载重要的资源，而对于一些不那么重要的图片啥的，则使用低的优先级。")]),e._v(" "),r("h3",{attrs:{id:"_5-流控制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-流控制"}},[e._v("#")]),e._v(" 5. 流控制")]),e._v(" "),r("p",[e._v("HTTP/2 也支持流控，如果 sender 端发送数据太快，receiver 端可能因为太忙，或者压力太大，或者只想给特定的 stream 分配资源，receiver 端就可能不想处理这些数据。譬如，如果 client 给 server 请求了一个视频，但这时候用户暂停观看了，client 就可能告诉 server 别再发送数据了。")])])}),[],!1,null,null,null);t.default=v.exports}}]);
## 项目简介
这个项目是用 Express 框架写成的，主要返回一些基本的请求信息，有些个人觉得有趣的信息也会一起放上来。如果你有任何好的想法，你可以在 Issues 中提，我会尽快做好更新！

最后，如果你喜欢这个项目，欢迎点一下 Star (´･ᴗ･`)

## 项目运行
```
// Clone 项目到本地
git clone git@github.com:Shoufu/nodejs-test-ajax.git
// 进入项目文件夹
cd nodejs-test-ajax
// 安装项目所需的库，如果安装了 Yarn 可以运行 yarn 代替
npm install
// 项目运行，默认监听 3000 端口
npm start
```

## 使用方法和代码示例
运行项目后，访问 `http://localhost:3000/` 即可获取基本的返回信息，包括请求的方法，请求头，Cookies，请求的 URL 和 IP 地址。请求方法支持最新的 HTTP 方法，包括 PUT、DELETE 和 PATCH 等。
```
// [GET] http://localhost:3000/
{
    method: "GET",
    headers: {
        host: "localhost:3000",
        connection: "keep-alive",
        upgrade-insecure-requests: "1",
        user-agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36",
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        accept-encoding: "gzip, deflate, br",
        accept-language: "zh-CN,zh;q=0.9,en;q=0.8",
        cookie: "_ga=GA1.1.1475505677.1500279485",
        if-none-match: "W/"279-hwOx8mXMQEm5ScwaO+5508sz1tU""
    },
    cookies: {
        _ga: "GA1.1.1475505677.1500279485"
    },
    url: "/",
    originAddress: "localhost"
}
```

如果请求的 URL 包含参数 Params，则返回的信息中会包含 params 字段，值为请求时的 Params 值。

目前只支持一级参数的查询，更加深入的查询会返回 404 的错误。

如果请求的 URL 包含查询参数 Query，则返回的信息中会包含 query 字段，值为 Query 查询的所有字段和值的集合。
```
// [GET] http://localhost:3000/abc?a=1&b=2&c=3
{
    method: "GET",
    params: "abc",
    query: {
        a: "1",
        b: "2",
        c: "3"
    },
    // 其余信息同上，不再赘述，下同
    ...
}
```

如果请求的 URL 包含请求体 Body，则返回的信息中会包含 body 字段，值为请求体所有字段和值的集合。
```
// [POST] http://localhost:3000/abc
// Data: { a: "1", b: "2", c: "3" }
{
    "method": "POST",
    "params": "abc",
    "body": {
        "a": "1",
        "b": "2",
        "c": "3"
    },
    ...
}
```

如果请求的路径不存在或者出现服务器错误，则会返回一个对象，该对象的字段为 `status`，值为返回的 HTTP 状态码。
```
// [GET] http://localhost:3000/path/not/exist
{
    status: 404
}
```


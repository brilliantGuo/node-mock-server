## 项目简介
这个项目是用 Express 框架写成的，主要返回一些基本的请求信息，有些个人觉得有趣的信息也会一起放上来。如果你有任何好的想法，你可以在 Issues 中提，我会尽快做好更新；或者愿意协助我一起完善该项目，欢迎你 PR ！

最后，如果你喜欢这个项目，欢迎点一下 Star ，或者 Follow 一下我也是极好的 (´･ᴗ･`)

## 项目运行
```
// Clone 项目到本地
git clone git@github.com:Shoufu/nodejs-test-ajax.git
// 进入项目文件夹
cd nodejs-test-ajax
// 安装项目所需的库，如果安装了 Yarn 可以运行 yarn 代替
npm install
// 项目运行，默认监听 3000 端口
npm start
```

## 使用方法
运行项目后，访问 `http://localhost:3000/` 即可获取基本的返回信息，包括请求的方法（method），请求头（headers），Cookies，请求的 URL 和 IP 地址（originAddress）。请求方法支持最新的 HTTP 方法，包括 PUT、DELETE 和 PATCH 等。

如果请求的 URL 包含参数 Params，则返回的信息中会包含 params 字段，值为请求时的 Params 值。

如果请求的 URL 包含查询参数 Query，则返回的信息中会包含 query 字段，值为 Query 查询的所有字段和值的集合。

如果请求的 URL 包含请求体 Body，则返回的信息中会包含 body 字段，值为请求体所有字段和值的集合。

返回数据格式示例如下：
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
    headers: {
        host: "localhost:3000",
        connection: "keep-alive",
        upgrade-insecure-requests: "1",
        user-agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.162 Safari/537.36",
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        accept-encoding: "gzip, deflate, br",
        accept-language: "zh-CN,zh;q=0.9,en;q=0.8",
        cookie: "_ga=GA1.1.1475505677.1500279485"
    },
    cookies: {
        _ga: "GA1.1.1475505677.1500279485"
    },
    url: "/abc?a=1&b=2&c=3",
    originAddress: "localhost"
}
```
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
    "headers": {
        "cache-control": "no-cache",
        "postman-token": "49775a2c-1deb-4a06-b9d8-4cea6e483c0a",
        "user-agent": "PostmanRuntime/7.1.1",
        "accept": "*/*",
        "host": "localhost:3000",
        "cookie": "SESSIONID=s%3AGXU3XQpdLXtcwh6EQ4Nko2AKpLDjoggw.2oYnE%2F5Tz2P4qM9gmZxg8OwZLKKKuJ5yRojFwf9m4Yw",
        "content-type": "application/x-www-form-urlencoded",
        "accept-encoding": "gzip, deflate",
        "content-length": "11",
        "connection": "keep-alive"
    },
    "cookies": {
        "SESSIONID": "s:GXU3XQpdLXtcwh6EQ4Nko2AKpLDjoggw.2oYnE/5Tz2P4qM9gmZxg8OwZLKKKuJ5yRojFwf9m4Yw"
    },
    "url": "/abc",
    "originAddress": "localhost"
}
```
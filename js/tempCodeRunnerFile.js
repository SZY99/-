app.all('/json-server', (request, response) => {
    // 设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    const data = {
        name: 'adfwf'
    };
    let str = JSON.stringify(data);
    response.send(str);
});
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));

app.all('/data', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const body = request.body;
    console.log('后端收到：', body);


    if (body.username === 'admin' && body.password === '123456') {

        response.send({
            code: 200,
            msg: '登录成功',
            data: body
        });
    } else {

        response.send({
            code: 400,
            msg: '账号或密码错误',
            data: body
        });
    }
});


app.use(express.static(__dirname + '/'));

app.listen(8000, () => {
    console.log('服务启动成功,端口8000...');
});
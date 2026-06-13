const express = require('express')
const app = express()
app.all('*', (req, res) =>
    res.setHeader('Access-Control-Allow-Origin', '*'))

//【只在这个数组新增课程，别的代码一辈子不用改】
app.get('/api/course', req => {
    const list = [
        { title: 'HTML+CSS入门', info: '零基础搭建网页' },
        { title: 'JS基础', info: '实现页面交互' },
        { title: 'Axios请求', info: '前后端数据交互' }
    ]
    res.send(list)
})
app.listen(8000, () => console.log('mock服务启动'))
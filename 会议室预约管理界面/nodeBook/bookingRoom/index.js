// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// const cors=require('cors');

// var indexRouter = require('./routes/index');
// // var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(cors());//后端跨域

// app.use('/', indexRouter);
// // app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;


const { app, pool} =require('./connect')
// 
// const detail= require('./router/detail')
// const types= require('./router/menuitems')
const api= require('./routes/api')

app.all('*', (req, res, next) => {
    //这里处理全局拦截，一定要写在最上面
    next()
})


app.all('/', (req, res) => {
    pool.getConnection((err, conn) => {
        res.json({ type: 'test'})
        pool.releaseConnection(conn) // 释放连接池，等待别的连接使用
    })
})

// 接口使用
app.use('/',api)

app.listen(8080, () => {
    console.log('服务启动8080端口')
})

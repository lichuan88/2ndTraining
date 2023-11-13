var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const UserRouter = require('./routes/admin/UserRouter');

const cors=require('cors');
const JWT = require('./util/JWT');
var app = express();
app.use(cors())
app.use(express.json())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use((req, res, next) => {
  
  if (req.url == "/adminapi/user/login") {
    next()
    console.log("路径" + req.url)
    return;
  }
 
  var payload = JWT.verify(token)
  console.log("第二次请求" + req.url)
  if (token) {
    if (payload) {
      const newtoken = JWT.generate({
        _id: payload._id,
        username:payload.username
      }, "10s")
      console.log("这是新的"+ newtoken)
     
      next()
    } else {
      res.status(401).send({ errCode: "-1", errorInfo: "token过期" })
      return
    }
  }
 
})


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(UserRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  return  // 使用 return 终止后续代码
});

module.exports = app;

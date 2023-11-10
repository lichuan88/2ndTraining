const express = require("express");
const app = express();
// 导入 cors 中间件
const cors = require("cors");
// 导入配置文件
const config = require("./config");

const expressJWT = require("express-jwt");

const bodyParser = require("body-parser");
// 将 cors 注册为全局中间件
app.use(cors());
/* {
  origin: "http://www.giveon.cn:3301",
} */
/* //解析json格式的中间件
app.use(express.json());
// 配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件
app.use(express.urlencoded({ extended: false })); */
// 解析 application/json 格式的请求体
app.use(bodyParser.json());

// 解析 application/x-www-form-urlencoded 格式的请求体
app.use(bodyParser.urlencoded({ extended: false }));
//错误级别中间件
app.use(function (req, res, next) {
  // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
  res.cc = function (err, status = 1) {
    res.send({
      // 状态
      status,
      // 状态描述，判断 err 是 错误对象 还是 字符串
      message: err instanceof Error ? err.message : err,
    });
  };
  next();
});

//注册将 JWT 字符串 解析还原成 JSON对象的中间件
app.use(
  expressJWT({ secret: config.jwtSecretKey }).unless({
    path: [/^\/api\//],
  })
);
// 导入并注册用户路由模块
const userRouter = require("./router/user");
const userAdminRouter = require("./router/adminuser");
app.use("/api", userRouter);
app.use("/admin", userAdminRouter);

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8880, function () {
  console.log("api server running at http://127.0.0.1:8880");
});

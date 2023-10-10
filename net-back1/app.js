// 导入 express 模块
const express = require("express");
// 创建 express 的服务器实例
const app = express();
const router = express.Router();
// 导入 cors 中间件
const cors = require("cors");
// 将 cors 注册为全局中间件
app.use(cors());
const db = require("../db/index"); //数据库
router.get("/net", function (req, res) {
  res.send({
    code: 200,
    message: "获取成功",
    data: "123",
  });
});
// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8888, function () {
  console.log("api server running at http://127.0.0.1:8888");
});

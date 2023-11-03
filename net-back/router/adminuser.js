const express = require("express");
// 创建路由对象
const router = express.Router();

// 导入用户路由处理函数模块
const userHandler = require("../router_handle/user");

router.post("/addadmin", userHandler.AddAdmin); //添加网管
router.delete("/deladmin", userHandler.DelAdmin); //删除网管

// 将路由对象共享出去
module.exports = router;

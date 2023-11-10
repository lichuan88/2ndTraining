const express = require("express");
// 创建路由对象
const router = express.Router();

// 导入用户路由处理函数模块
const userHandler = require("../router_handle/user");
// // 1. 导入验证表单数据的中间件
// const expressJoi = require("@escook/express-joi");
// 2. 导入需要的验证规则对象
// const { reg_login_schema } = require("../schema/user");

/* router.post("/token", userHandler.getToken); //获取token */
router.get("/getnetadmin", userHandler.getNetAdmin); //获取网管列表（用户端）
router.get("/getIdentity", userHandler.GetIdentity); //获取indentity列表
router.get("/getDornetadmin", userHandler.getDorNetAdmin); //获取指定身份组的网管列表
/* router.post("/addadmin", userHandler.AddAdmin); //添加网管
router.delete("/deladmin", userHandler.DelAdmin); //删除网管 */
router.get("/recadmin", userHandler.RecommendAdmin); //推荐网管
router.post("/login", userHandler.LoginSystem); //登录账号

// 将路由对象共享出去
module.exports = router;

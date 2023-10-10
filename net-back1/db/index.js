// 导入 mysql 模块
const mysql = require("mysql");

// 创建数据库连接对象
const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "280010", //密码
  database: "net_admin_phone-book", //数据库
});

// 向外共享 db 数据库连接对象
module.exports = db;

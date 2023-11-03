const mysql = require("mysql2/promise");
const sqlsentence = require("../mysql2/sql");
// 用这个包来生成 Token 字符串
const jwt = require("jsonwebtoken");
// 导入配置文件
const config = require("../config");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "280010",
  database: "net_admin_phone-book",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
//获取网管列表
exports.getNetAdmin = (req, res) => {
  console.log(req.body);
  getnetadmin()
    .then((rows) => {
      res.json(rows);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
      console.log(error);
    });
};

function getnetadmin() {
  return new Promise(async (resolve, reject) => {
    try {
      const connection = await pool.getConnection();
      const [rows, fields] = await connection.execute(
        sqlsentence.getnetadminsql
      );
      connection.release();
      const formattedData = {
        code: 200,
        message: "Success",
        data: [],
      };
      rows.forEach((row) => {
        formattedData.data.push({
          identity_group_id: row.identity_group_id,
          identity_group: row.identity_group,
          admins: row.admins,
        });
      });
      resolve(formattedData);
    } catch (error) {
      reject(error);
    }
  });
}
//获取身份组的网管列表
exports.getDorNetAdmin = (req, res) => {
  const dor = req.query.identity_group_id;
  getDornetadmin(dor)
    .then((rows) => {
      res.json(rows);
    })
    .catch((error) => {
      /* res.status(500).json({ error: error.message }); */
      console.log(error);
    });
};
function getDornetadmin(dor) {
  console.log(dor);
  return new Promise(async (resolve, reject) => {
    try {
      const connection = await pool.getConnection();
      const [rows, fields] = await connection.execute(
        sqlsentence.getDornetadminsql,
        [dor]
      );
      connection.release();
      if (!rows.length) {
        // 如果没有查询到任何数据
        const connection = await pool.getConnection();
        const [rows, fields] = await connection.execute(
          sqlsentence.getIdentityGroupsql,
          [dor]
        );
        resolve({
          code: 200,
          message: "Success",
          data: {
            identity_group_id: dor,
            identity_group: rows[0].identity_group,
            admins: [],
          },
        });
        connection.release();
        return;
      }
      console.log(rows);
      const admins = rows.map((row) => ({
        admin: row.admin,
        grade: row.grade,
        identity_group_id: row.identity_group_id,
        phone: row.phone,
        short_number: row.short_number,
        identity_group: row.identity_group,
      }));
      const formattedData = {
        code: 200,
        message: "Success",
        data: {
          identity_group_id: rows[0].identity_group_id,
          identity_group: rows[0].identity_group,
          admins: admins,
        },
      };
      resolve(formattedData);
    } catch (error) {
      reject(error);
    }
  });
}
//获取身份组名字和id
exports.GetIdentity = (req, res) => {
  getIdentity()
    .then((rows) => {
      res.json(rows);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
      console.log(error);
    });
};
function getIdentity() {
  return new Promise(async (resolve, reject) => {
    try {
      const connection = await pool.getConnection();
      const [rows, fields] = await connection.execute(
        sqlsentence.getIdentitysql
      );
      connection.release();
      const formattedData = {
        code: 200,
        message: "Success",
        data: [],
      };
      rows.forEach((row) => {
        formattedData.data.push({
          identity_group_id: row.identity_group_id,
          identity_group: row.identity_group,
        });
      });
      resolve(formattedData);
    } catch (error) {
      reject(error);
    }
  });
}
//添加网管
exports.AddAdmin = (req, res) => {
  const user = req.body;
  addadmin(user)
    .then((rows) => {
      res.json(rows);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
      console.log(error);
    });
};
function addadmin(user) {
  return new Promise(async (resolve, reject) => {
    try {
      const adminValue = user.adminValue;
      const gradeValue = user.gradeValue;
      const identityGroupIdValue = user.identityGroupIdValue;
      const phoneValue = user.phoneValue;
      const shortNumberValue = user.shortNumberValue;
      const connection = await pool.getConnection();
      if (adminValue == "" || phoneValue == "" || identityGroupIdValue == "") {
        const formattedData = {
          code: 400,
          message: "Eorror",
          data: "关键值不能为空",
        };
        resolve(formattedData);
        return;
      }
      const [existRows, exitfields] = await connection.execute(
        sqlsentence.queryadminsql,
        [adminValue]
      );
      if (existRows.length > 0) {
        const formattedData = {
          code: 400,
          message: "Eorror",
          data: "已存在相同的值",
        };
        resolve(formattedData);
        return;
      }
      const [rows, fields] = await connection.execute(sqlsentence.addadminsql, [
        adminValue,
        gradeValue,
        identityGroupIdValue,
        phoneValue,
        shortNumberValue,
      ]);
      connection.release();
      const formattedData = {
        code: 200,
        message: "Success",
        data: "添加成功",
      };
      resolve(formattedData);
    } catch (error) {
      reject(error);
    }
  });
}
//删除网管
exports.DelAdmin = (req, res) => {
  const user = req.query.admin;
  deladmin(user)
    .then((rows) => {
      res.json(rows);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
      console.log(error);
    });
};
function deladmin(user) {
  return new Promise(async (resolve, reject) => {
    try {
      const connection = await pool.getConnection();
      const [rows, fields] = await connection.execute(sqlsentence.deladminsql, [
        user,
      ]);
      console.log(user);
      connection.release();
      const formattedData = {
        code: 200,
        message: "Success",
        data: "删除成功",
      };
      resolve(formattedData);
    } catch (error) {
      reject(error);
    }
  });
}
//推荐网管
exports.RecommendAdmin = (req, res) => {
  recommendadmin()
    .then((rows) => {
      res.json(rows);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
      console.log(error);
    });
};
function recommendadmin(user) {
  return new Promise(async (resolve, reject) => {
    try {
      const connection = await pool.getConnection();
      const [rows, fields] = await connection.execute(sqlsentence.recommendsql);
      connection.release();
      const formattedData = {
        code: 200,
        message: "Success",
        data: {
          grade1: rows[1].grade - 2000,
          grade2: rows[0].grade - 2000,
        },
      };
      resolve(formattedData);
    } catch (error) {
      reject(error);
    }
  });
}
//获取token
exports.getToken = (req, res) => {
  const user = req.body;
  Gettoken(user)
    .then((rows) => {
      res.json(rows);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
      console.log(error);
    });
};
function Gettoken(user) {
  return new Promise(async (resolve, reject) => {
    try {
      /* const connection = await pool.getConnection();
      const [rows, fields] = await connection.execute(sqlsentence.recommendsql); 
      connection.release();*/
      if (user.username == "admin" && user.password == "000000") {
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {
          expiresIn: config.expiresIn, // token 有效期为 10 个小时
        });
        console.log(tokenStr);
        const formattedData = {
          code: 200,
          message: "获取token成功",
          token: "Bearer " + tokenStr,
        };
        resolve(formattedData);
      }
    } catch (error) {
      reject(error);
    }
  });
}

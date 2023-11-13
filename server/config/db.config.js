const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/company-system")
  .then(() => {
    // 连接成功后的逻辑
    console.log('成功连接到数据库');

    // 验证连接状态
    if (mongoose.connection.readyState === 1) {
      console.log('连接状态：已连接');
    } else {
      console.log('连接状态：未连接');
    }
  })
  .catch((error) => {
    // 连接失败后的逻辑
    console.error('无法连接到数据库:', error);
  });
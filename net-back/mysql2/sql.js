//获取网管列表 (用户端)
exports.getnetadminsql =
  "SELECT net_work.identity_group_id, identity_group, JSON_ARRAYAGG(JSON_OBJECT('admin', `admin`, 'phone', `phone`, 'short_number', `short_number`, 'grade', `grade`, 'identity_group_id', net_work.identity_group_id)) AS `admins` FROM net_work JOIN identity ON identity.identity_group_id = net_work.identity_group_id GROUP BY net_work.identity_group_id ORDER BY CASE WHEN net_work.identity_group_id = '移动人员' AND identity.identity_group_id = net_work.identity_group_id THEN 0 ELSE 1 END ASC;";
//获取单个宿舍组的网管列表 （后台）点击卡片后 进入立即调用
exports.getDornetadminsql =
  "SELECT admin,grade,net_work.identity_group_id as identity_group_id,phone,short_number,identity_group FROM net_work,identity WHERE net_work.identity_group_id =? And identity.identity_group_id = net_work.identity_group_id";
//获取身份组列表
exports.getIdentitysql =
  "SELECT identity_group_id, identity_group FROM identity;";
//获取指定id 的对应身份组名称
exports.getIdentityGroupsql =
  "SELECT identity_group FROM identity WHERE identity_group_id = ?;";

//添加网管
exports.addadminsql =
  "INSERT INTO net_work (admin, grade, identity_group_id, phone, short_number) VALUES (?, ?, ?, ?, ?)";
//查看是否有相同的admin
exports.queryadminsql = " SELECT * FROM `net_work` WHERE `admin` = ?";
//删除网管
exports.deladminsql = "DELETE FROM `net_work` WHERE `admin` = ?;";
// 推荐最新两届网管
exports.recommendsql =
  "SELECT DISTINCT grade FROM net_work ORDER BY grade DESC LIMIT 2;";
//登录账号
exports.loginsql = "SElECT * FROM admin WHERE admin_id = ?";

export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-full","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["新增","查看","修改","删除"],"menu":"证件查询","menuJump":"列表","tableName":"zhengjianchaxun"}],"menu":"证件查询管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","修改","删除","审核"],"menu":"查询信息","menuJump":"列表","tableName":"chaxunxinxi"}],"menu":"查询信息管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["新增","查看","修改","删除"],"menu":"教育培训","menuJump":"列表","tableName":"jiaoyupeixun"}],"menu":"教育培训管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","修改","删除","审核"],"menu":"认证申请","menuJump":"列表","tableName":"renzhengshenqing"}],"menu":"认证申请管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看","修改","删除","新增"],"menu":"便民服务","menuJump":"列表","tableName":"bianminfuwu"}],"menu":"便民服务管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","修改","删除"],"menu":"代缴服务","menuJump":"列表","tableName":"daijiaofuwu"}],"menu":"代缴服务管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"投诉建议","tableName":"messages"}],"menu":"投诉建议"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["新增","查看","修改","删除"],"menu":"管理员","tableName":"users"}],"menu":"管理员管理"},{"child":[{"appFrontIcon":"cuIcon-group","buttons":["查看","修改","删除"],"menu":"交流论坛","tableName":"forum"}],"menu":"交流论坛"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"通知公告","tableName":"news"},{"appFrontIcon":"cuIcon-similar","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-service","buttons":["新增","查看","修改","删除"],"menu":"在线客服","tableName":"chat"},{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","我要查询"],"menu":"证件查询列表","menuJump":"列表","tableName":"zhengjianchaxun"}],"menu":"证件查询模块"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","申请认证"],"menu":"教育培训列表","menuJump":"列表","tableName":"jiaoyupeixun"}],"menu":"教育培训模块"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","我要缴费"],"menu":"便民服务列表","menuJump":"列表","tableName":"bianminfuwu"}],"menu":"便民服务模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","删除"],"menu":"查询信息","menuJump":"列表","tableName":"chaxunxinxi"}],"menu":"查询信息管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","删除"],"menu":"认证申请","menuJump":"列表","tableName":"renzhengshenqing"}],"menu":"认证申请管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["删除","查看","支付"],"menu":"代缴服务","menuJump":"列表","tableName":"daijiaofuwu"}],"menu":"代缴服务管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","我要查询"],"menu":"证件查询列表","menuJump":"列表","tableName":"zhengjianchaxun"}],"menu":"证件查询模块"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","申请认证"],"menu":"教育培训列表","menuJump":"列表","tableName":"jiaoyupeixun"}],"menu":"教育培训模块"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","我要缴费"],"menu":"便民服务列表","menuJump":"列表","tableName":"bianminfuwu"}],"menu":"便民服务模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}

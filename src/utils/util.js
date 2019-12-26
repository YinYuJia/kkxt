// 格式化日期函数
function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

// 日期转换为Number
function DateToNumber(date) {
  let dateNum = date.replace(/-/g, '');
  return dateNum
}

// Number转换为日期
function NumberToDate(number) {
  // (typeof (number) =="number")
  let num = number.toString();
  let result = num.slice(0, 4) + '-' + num.slice(4, 6) + '-' + num.slice(6, 8);
  return result;

}

//手机号校验
function checkPhone(phoneStr) {
  return /^1[3456789]\d{9}$/.test(phoneStr)
}
//电话号码校验
function checkHomePhone(phoneStr) {
  return /\d{7,8}/.test(phoneStr)
}
// 发票号检验
function checkInvoice(value) {
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
 * 身份证号码校验
 */
function idCard(value) {
  if (value && (!(/\d{17}[\d|x]|\d{15}/).test(value) || (value.length !== 15 && value.length !== 18))) {
    return false;
  } else if (value == '') {
    return false
  } else {
    return true;
  }
}

// 获取地址栏参数
function paramStr(name) {
  var url = window.location.href || window.location.hash
  var after = url.split("?")[1];
  if (after) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = after.match(reg);
    if (r != null) {
      var a = '8afac8196b0b9ab2016b46f1c6e36c4e-ticket#/';
      var str1 = decodeURIComponent(r[2])
      var str = ''
      if (str1.substr(str1.length - 2, 2) == '#/') {
        str = str1.substr(0, str1.length - 2)
        return str
      } else {
        return decodeURIComponent(r[2])
      }
    } else {
      return null;
    }
  }
}

// mail 校验
function checkMail(value){
  var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return reg.test(value);
}


// 检验姓名
function checkName(name){
  var reg = /[0-9]/;
  if(reg.test(name)){
      return true;
  }else{
      return false;
  }
}

//把对象拼接到url上
function ParameterMatching(url, param) { 
  var urlLink = '';
  $.each(param, function(item, key) {
      var link = '&' + item + "=" + key;
      urlLink += link;
  })
  urlLink = url + "?" + urlLink.substr(1);
  return urlLink.replace(' ', '');
 }
//获取昨天日期 //    -1 代表前一天，-2前两天...
 function getDay(num, str) {
  var today = new Date();
  var nowTime = today.getTime();
  var ms = 24*3600*1000*num;
  today.setTime(parseInt(nowTime + ms));
  var oYear = today.getFullYear();
  var oMoth = (today.getMonth() + 1).toString();
  if (oMoth.length <= 1) oMoth = '0' + oMoth;
  var oDay = today.getDate().toString();
  if (oDay.length <= 1) oDay = '0' + oDay;
  return oYear + str + oMoth + str + oDay;
}

// 冒泡排序
function maopao(arr1) { 
  for(var i=1;i<=arr1.length-1;i++){ //外层循环管排序的次数
      for(var j=0;j<=arr1.length-i-1;j++){
          if(arr1[j].electricity<=arr1[j+1].electricity){
              var temp=arr1[j];
              arr1[j]=arr1[j+1];
              arr1[j+1]=temp;
          }
      }
  }
  return arr1
  }


 


export default {
  formatDate,
  DateToNumber,
  NumberToDate,
  checkPhone,
  checkHomePhone,
  checkInvoice,
  idCard,
  paramStr,
  checkMail,
  ParameterMatching,
  getDay,
  maopao
}

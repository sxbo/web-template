/**
 * 字符串压缩算法 
 * 输入aaaabbbbccddd
 * 输出a4b4c2d3
 */
;(function(str){
    if(typeof str !== "string" || str ==""){
        throw new Error("参数错误")
    }
    var strArr = str.split("");
    var strArr1 = [];
    strArr1[0] = strArr[0];
    strArr1[1] = 1;
    var curValue = strArr[0];
    for(let i=0; i<strArr.length; i++){
        var value = strArr[i];
        var index = strArr1.indexOf(value);
        if(index >= 0){
            strArr1[index + 1] = strArr1[index + 1]+1;
        }else{
            strArr1.push(value);
            strArr1.push(1);
        }
    }
    console.log(strArr1);
    var arrStr = strArr1.join("");
    console.log(arrStr);
})({a:"sdf"})

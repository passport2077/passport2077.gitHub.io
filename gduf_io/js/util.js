function getParam() {
    var url = location.search;
    var info = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            if (strs[i].indexOf("studentName=") != -1) {
                info['studentName'] = decodeURIComponent(strs[i].replace("studentName=", ""));
            };
            if (strs[i].indexOf("studentId=") != -1) {
                info['studentId'] = decodeURIComponent(strs[i].replace("studentId=", ""));
            };
            if (strs[i].indexOf("studentSex=") != -1) {
                info['studentSex'] = decodeURIComponent(strs[i].replace("studentSex=", ""));
            };
        };
        return info;
    } else {
        info = {
            "studentName": "宁昊威",
            "studentId": "201571201",
            "studentSex": "男",
        }
        return info;
    }
}

function formatStatus() {
    if (getParam()["outType"] == "临时出校（一天仅一次）") {
        return "<font color=green>报备完成</font>";
    } else {
        return "<font color=green>审批通过</font>";
    };
}

function getMoble() {
    var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
    var i = parseInt(10 * Math.random());
    var prefix = prefixArray[i];
    for (var j = 0; j < 8; j++) {
        prefix = prefix + Math.floor(Math.random() * 10);
    }
    return prefix;
}

function randomOutSchoolID() {
    var randomNum = '';
    for (var i = 0; i < 5; i++) {
        randomNum += Math.floor(Math.random() * 10);
    }
    return new Date().Format("yyyyMMdd" + randomNum)
}
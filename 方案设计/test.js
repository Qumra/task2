function timeago(date) {
    var ago = new Date(date)
    var now = new Date()

    var timediff = now - ago
    if (timediff < 0) {
        return "超前了"
    }
    var minute = 1000 * 60;      //把分，时，天，周，月用毫秒表示
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
    var month = day * 30;
    var year = day * 365;

    var years = parseInt(timediff / year)
    if (years >= 1)
        return `${years}年前`

    var months = parseInt(timediff / month)
    if (months >= 1)
        return `${months}月前`

    var weeks = parseInt(timediff / week)
    if (weeks >= 1)
        return `${weeks}周前`

    var days = parseInt(timediff / day)
    if (days >= 1)
        return `${days}天前`

    var hours = parseInt(timediff / hour)
    if (hours >= 1)
        return `${hours}小时前`

    var minutes = parseInt(timediff / minute)
    if (minutes >= 1)
        return `1小时前`

    return "1小时前"
}

let bb = timeago(new Date("2018/11/21 22:56"))
console.log(bb)
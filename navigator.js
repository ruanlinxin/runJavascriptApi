function showNavigator() {
    var box = document.getElementById('navigatorBox')
    // 输出app信息
    var keys = ['appVersion', 'userAgent', 'appName', 'language', 'platform']
    var list = []
    each(keys, function (key, i) {
        list.push('<div><div class="key">' + key + '</div><div class="value">' + navigator[key] +
            '</div></div>')
    })
    box.innerHTML = list.join('')
}

var compatibilityList = []
var resultList = []

function query(id) {
    return document.getElementById(id)
}

function each(arr, cb) {
    var len = arr.length
    for (var i = 0; i < len; i++) {
        cb(arr[i], i, arr)
    }
}

function setCompatibilityList(arr) {
    each(arr, function (item) {
        compatibilityList.push(item)
    })
}

function testApi() {
    each(compatibilityList, function (item) {
        try {
            new Function(item)()
            resultList.push('<div>' + item + '<span style="color:green">成功</span></div>')
        } catch (e) {
            resultList.push('<div>' + item + '<span style="color:red">失败</span></div>')
        }
    })

    query('apiBox').innerHTML = resultList.join('<hr/>')
}
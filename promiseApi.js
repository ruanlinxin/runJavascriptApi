setCompatibilityList([
    'new Promise(function(res,rej){res()}).then().catch()',
    'Promise.resolve()',
    'Promise.reject().then().catch(function(){})',
    'Promise.any([]).then().catch(function(){})',
    'Promise.all([]).then().catch(function(){})',
    'Promise.race([]).then().catch(function(){})',
])
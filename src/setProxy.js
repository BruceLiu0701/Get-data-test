const proxy =require('http-proxy-middleware')

module.exports=function(app){
    app.use(
        proxy('api1',{
            target:'http://cloud.weyutech.com/API_TEST/api/WeyuLogin',
            changeOrigin:true,
            pathRewrite:{'^/api1':''}
        }),
        proxy('api2',{
            target:'http://cloud.weyutech.com/API_TEST/api/GetGrid',
            changeOrigin:true,
            pathRewrite:{'^api2':''}
        })
    )
}
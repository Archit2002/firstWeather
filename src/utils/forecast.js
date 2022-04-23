const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=81dcb9cd6871b8cc71a069576d9273c0&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+''
    request({url,json:true},(error,{body}={})=>{
        if(error){
            callback('Unable to connect to weather server!',undefined)
        }
        else if(body.error){
            callback('Invalid location',undefined)
        }
        else{
          callback(undefined,{
            // location:body.location.name,
            temperature:body.current.temperature
          })  
        }
    })
}
module.exports={
    forecast
}
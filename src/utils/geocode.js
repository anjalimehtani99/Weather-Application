const request = require('request')

const geocode= (address,callback) =>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYW5qYWxpMTk5OSIsImEiOiJja2h5dTZqZzUwOTJ1MnNxaHB5MG80emR6In0.tf4xYGue_JnRCgJZv5S3Ow&limit=1'
    request({ url,json:true},(error,{body}) => {
        if(error)
        {
            callback('Unable to connect to location services!',undefined)
        }
        else if(body.features.length===0){
            callback('Unable to find the location.Try searching another',undefined)
        }
        else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })

}

module.exports=geocode
var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=39813235a4a8d83dcae9eb2c716a67f5&units=imperial';

module.exports = {
	getTemp:function(location){

		//deals with the spaces
		var encodedLocation = encodeURIComponent(location);
		
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res){
			if(res.data.cod&&res.data.message){
				throw new Error(res.data.message);
			} else{
				return res.data.main.temp
			}
		},function(err){
			throw new Error(err.response.data.message);
		});
	}
}
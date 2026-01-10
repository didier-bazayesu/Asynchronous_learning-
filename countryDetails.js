async function fetchCountryDetails(countryName){
    try{
        let countryDetails = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        let country = await countryDetails.json();
        country.forEach(async ele=>{
            console.log(ele.name.common);
            const [lat,lon] = ele.latlng
            let weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
            
            let data =  await weather.json();
             console.log(ele.capital[0]);
            console.log(`${data?.current_weather?.temperature} °C`)
           
        })
    
    await Promise.all(country)

    }catch(err){
        console.error(err);
    }
// .then(console.log)
}


fetchCountryDetails("Namibia")
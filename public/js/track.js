
const ipTracker = function(){
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_q6vTjgcPP0sVPqJII09xeQAeD1u5J&ipAddress=8.8.8.8`).then(function (response){
      console.log(response);
      console.log(response.url);
      return response.json();
    }).then(function(response){
        console.log(response)
        console.log(response.location.region);
        fetch(`https://restcountries.com/v3.1/name/${response.location.region}`).then(function(response){
            console.log(response.json())
        })
    }).catch(err =>{
        console.log(`ip address not found${err}`)
      })
    .finally(()=>{
      console.log("Api calling finished")
    })
  }
  ipTracker();


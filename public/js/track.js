
const ipTracker = function(){
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_q6vTjgcPP0sVPqJII09xeQAeD1u5J&ipAddress=8.8.8.8`).then(function (response){
      console.log(response);
      console.log(response.url);
      return response.json();
    }).then(function(response){
        console.log(response)
        console.log(response.location.region);
        console.log(response.location.lat);
        console.log(response.location.lng);
        
    }).catch(err =>{
        console.log(`ip address not found${err}`)
      })
    .finally(()=>{
      console.log("Api calling finished")
    })
  }
  ipTracker();


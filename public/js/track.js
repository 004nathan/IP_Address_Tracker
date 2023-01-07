
const ipTracker = function(){
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_q6vTjgcPP0sVPqJII09xeQAeD1u5J&ipAddress=172.17.61.92`).then(function (response){
      console.log(response);
      return response.json();
    }).catch(err =>{
        console.log(`ip address not found${err}`)
      })
    .finally(()=>{
      console.log("Api calling finished")
    })
  }
  ipTracker();


const ipTracker = function(){
    fetch(``).then(function (response){
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
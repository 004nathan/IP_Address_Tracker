var  mapContainer =   document.getElementById("map");
let ipAddress="1.6.0.0";
window.addEventListener("load", (event) => {
    ipTracker(ipAddress);
    });
    // get country details from ipaddress api
const ipTracker = function(ipAddress){
fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_q6vTjgcPP0sVPqJII09xeQAeD1u5J&ipAddress=${ipAddress}`)
    .then(function (response){
      console.log(response);
      console.log(response.url);
      return response.json();
    }).then(function(response){
      mapContainer.innerHTML = "";
       mapContainer.innerHtml=getMap(response.location.lat,response.location.lng);
    }).catch(err =>{
        console.log(`ip address not found${err}`)
      })
    .finally(()=>{
      console.log("Api calling finished")
    })
  }
  // get map from latitude and longtitude
  const getMap = (lat, lng) => {
    let mapOptions = {
      center: [lat, lng],
      zoom: 10,
    };
    map = new L.map("map", mapOptions);
    let layer = new L.TileLayer(
      "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    );
    let marker = new L.marker([lat, lng]).addTo(map);
    map.addLayer(layer);
  };
  //call getip method
function getIP(){
  ipAddress =document.getElementById("search-bar").value;
    if(ipAddress!=" " && ipAddress!=undefined && ipAddress!=null){
       ipTracker(ipAddress);
    }
}
  


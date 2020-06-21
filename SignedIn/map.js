
function setup(){

    let cnv = createCanvas(500,500);
    cnv.parent('Map'); 
    background(255);
    //location api request
    loadJSON('http://api.ipstack.com/103.253.169.40?access_key=9632b30fb2e4aa4289d8d9c150f47f75',gotLocation);

    

}
let locX;
let locY;

function gotLocation(data){
    console.log(data);
    let longitude = data.longitude;
    let latitude = data.latitude;


    L.mapbox.accessToken = 'pk.eyJ1Ijoicm9oYW5hbGtob3IiLCJhIjoiY2tibTZiMjl3MDkzMjJybWk2ajd4bDJ4OSJ9.HqfnRp1uZ5CxWKBO1URIsQ';
    var Map = L.mapbox.map('Map')
    .setView([ latitude , longitude ], 12)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));
    
    //Latitudes range from -90 to 90. Longitudes range from -180 to 180
    locX = map( longitude , -90, 90 , 0 , width );
    locY = map( latitude , -180, 180 , 0 , height );

    circle(loxX,locY , 10);

    
    
}

function draw(){

}
function myMap() {
  var mapProp = {
      center:new google.maps.LatLng(49.382308, -121.434165),
      zoom: 15,
    };
  var map = new google.maps.Map(document.getElementById("location"),mapProp);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(49.382308, -121.434165),
    map: map,
    title: "Hanky's Restaurant Location"
  });
}

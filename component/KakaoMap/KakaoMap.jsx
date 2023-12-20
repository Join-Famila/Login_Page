import React, { useEffect } from "react";

const { kakao } = window;

export default function KakaoMap({location}) {
    useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(location, function(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        const marker = new kakao.maps.Marker({
          map: map,
          position: coords
        });

        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;">${location}</div>`
        });
        infowindow.open(map, marker);

        map.setCenter(coords);
      } 
    }); 
  }, [location]);

    return <div id="map" style={{
        width: "90vw",
        height: "55vh"
    }}></div>;
}

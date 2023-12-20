import React from 'react';
import * as styles from './ShowMapStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,  faX } from "@fortawesome/free-solid-svg-icons";
import KakaoMap from '../../KakaoMap/KakaoMap';

const ShowMap = ({
    toggleBottomSheet,
    location,
    locationDetail
}) => {
    
    const copyLocation = () => {
        const inputElement = document.createElement('input');
        inputElement.value = location;

        document.body.appendChild(inputElement);
        inputElement.select();
        document.execCommand('copy');
        document.body.removeChild(inputElement);

        alert('주소가 복사되었습니다!');
    };

  return (
      <>
          <styles.BottomSheetHeader>
              <p>지도 보기</p>
              <FontAwesomeIcon icon={faX}
                  style={{
                      color: "lightgray",
                      cursor: "pointer"
                  }}
                onClick={toggleBottomSheet}
              />
          </styles.BottomSheetHeader>
          <styles.MapComponent>
              <KakaoMap location={ location} />
          </styles.MapComponent>
          <styles.LocationInfoContainer>
              <styles.LocationInfo>
                  <styles.LocationDetail>{locationDetail}</styles.LocationDetail>
                      <styles.Location>{location}</styles.Location>
                      <styles.LocationCopy onClick={copyLocation}>주소 복사하기</styles.LocationCopy>
              </styles.LocationInfo>
          </styles.LocationInfoContainer>
      </>
  )
}

export default ShowMap
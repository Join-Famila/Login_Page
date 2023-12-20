import React,{useState} from 'react'
import * as styles from './FooterMenuStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMountainCity, faFaceSmile, faUser } from "@fortawesome/free-solid-svg-icons";

const FooterMenu = () => {

     const [currentPageSelect, setCurrentPageSelect] = useState('home');

    // const goToHome = () => {
    //     // navigate("/");
    // }
    // const goToLifeSupport = () => {
    //     // navigate("/");
    // }
    // const goToActivityMeeting = () => {
    //     // navigate("/");
    // }
    // const goToMyInfo = () => {
    //     // navigate("/");
    // }

    const homeButton = () => {
        console.log("home");
        setCurrentPageSelect('home');
    }
    const lifeSupportButton = () => {
        console.log("lifeSupport");
        setCurrentPageSelect('lifeSupport');
    }
    const activityMeetingButton = () => {
        console.log("activityMeeting");
        setCurrentPageSelect("activityMeeting");
    }
    const myInfoButton = () => {
        console.log("myInfo");
        setCurrentPageSelect("myInfo");
    }
    const goToCreateMeeting = () => {
        
    }

    return (
      <>
          <styles.CreateMeeting onClick={goToCreateMeeting}>+ 모임 만들기</styles.CreateMeeting>
          <styles.FooterBody>
              <styles.menuHome onClick={homeButton}
               style={{
                color: currentPageSelect === 'home' ? '#f5935c' : '#8a8d9e',
                }}
              >
                  <FontAwesomeIcon icon={faHouse} />
                  <p>홈</p>
              </styles.menuHome>
              <styles.menuLifeSupport onClick={lifeSupportButton}
              style={{
                color: currentPageSelect === 'lifeSupport' ? '#f5935c' : '#8a8d9e',
                }}
              >
                  <FontAwesomeIcon icon={faMountainCity} />
                  <p>생활도움</p>
              </styles.menuLifeSupport>
              <styles.menuActivityMeeting onClick={activityMeetingButton}
              style={{
                color: currentPageSelect === 'activityMeeting' ? '#f5935c' : '#8a8d9e',
                  }}
              >
                  <FontAwesomeIcon icon={faFaceSmile} />
                  <p>모임활동</p>
              </styles.menuActivityMeeting>
              <styles.menuMyInfo onClick={myInfoButton}
              style={{
                color: currentPageSelect === 'myInfo' ? '#f5935c' : '#8a8d9e',
                }}
              >
                  <FontAwesomeIcon icon={faUser} />
                  <p>내 정보</p>
              </styles.menuMyInfo>
            
        </styles.FooterBody>
      </>
  )
}

export default FooterMenu
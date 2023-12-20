import React from 'react'
import * as styles from './HeaderMenuStyle';
import logo from "../../assets/famila_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const HeaderMenu = () => {

    const goToNotification = () => {
        console.log("goToNotification");
        // navigate("/");
    }

  return (
      <styles.HeaderBody>
          <styles.LogoImg src={logo} alt="logo" />
          <styles.NotificationIcon onClick={goToNotification}>
            <FontAwesomeIcon icon={faBell} />
            <styles.NotificationDot />
        </styles.NotificationIcon>
    </styles.HeaderBody>
  )
}

export default HeaderMenu
import styled from 'styled-components';

export const HeaderBody = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    margin: 3%;
    align-items: center;
    z-index: 10;
    width: 95%;
    top: 0;
    left: 0;
    background-color: white;
`
export const LogoImg = styled.img`
    width: 100px;
`

export const NotificationIcon = styled.div`
  position: relative;
  margin-right: 10px; /* 아이콘과 로고 사이 여백을 조절할 수 있습니다. */
`;

export const NotificationDot = styled.div`
  position: absolute;
  top: 1px; /* 점을 위로 조절합니다. */
  right: -4px; /* 점을 오른쪽으로 조절합니다. */
  width: 5px;
  height: 5px;
  background-color: red;
  border-radius: 50%;
  content: "";
`;
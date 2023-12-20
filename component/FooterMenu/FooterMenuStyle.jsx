import styled from 'styled-components';

export const FooterBody = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    padding: 5% 0;
    border-top: 1px solid lightgray;
    align-items: center;
    z-index: 10;
    width: 100%;
    bottom: 0;
    left: 0;
    color: #8a8d9e;
    background-color: white;
    div{
        text-align: center;
        width: 25%;
        cursor: pointer;
        p{
            margin: 0;
        }
    }
`

export const CreateMeeting = styled.div`
   position: fixed;
    bottom: 90px; /* 원하는 위치로 조절하세요 */
    right: 20px; /* 원하는 위치로 조절하세요 */
    padding: 10px;
    background-color: #f7a070;
    color: #fff;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    width: 120px;
    text-align: center;
    font-weight: bold;
    z-index: 12;
`

export const menuHome = styled.div`

`
export const menuLifeSupport = styled.div`

`
export const menuActivityMeeting = styled.div`

`
export const menuMyInfo = styled.div`

`
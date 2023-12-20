import styled from 'styled-components';

export const MainBody = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 10%;
    margin-bottom: 30%;
`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15%;
`

export const InfoText = styled.div`
    p{
        margin: 0 auto;
        font-weight: bold;
    }
`

export const ProfileIconImg = styled.img`
    margin: 5%;
`

export const MyMeeting = styled.div`
    font-weight: bold;
    margin: 5%;
    span{
        color: #f7a070;
    }
`

export const FindMeeting = styled.div`
    display: flex;
    overflow: auto;
    justify-content: space-around;

`

export const MeetingItem = styled.div`
    max-width: 33%;
    margin-right: 5%;
    text-align: center;
    img{
        border-radius: 50%;
    }
    p{
        word-break: break-word;
        margin: 0;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* 표시할 줄 수 */
        -webkit-box-orient: vertical;
        text-align: left;
    }

`
export const FindMoreMeeting = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid lightgray;
  color: lightgray;
  width: 60px;
  height: 60px;
  padding: 0.5em;
  word-break: keep-all;
  text-align: center;
  margin-top: 0.5em;
  font-size: 14px;
  cursor: pointer;
`

export const AccountRegister = styled.div`
    display: flex;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin: 5%;
    padding: 2%;
    font-size: 15px;
    word-break: keep-all;
    color: gray;
    div{
        margin-left: 2%;
    }
    span{
        color: #f7a070;
        text-decoration: underline;
        &:visited {
            color: #f7a070;
            text-decoration: underline;
        }
    }
`
export const MeetingSchedule = styled.div`
    p{
        font-weight: bold;
        margin: 5%;
        span{
            color: #f7a070;
        }
    }
`

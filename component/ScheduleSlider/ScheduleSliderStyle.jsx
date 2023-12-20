import styled from 'styled-components';
import Slider from 'react-slick';

export const StyledSlider = styled(Slider)`
    width: 90%;
    display: flex;
    .slick-list{
        margin-right: -30px;
    }
    .slick-slide{
        >div{
            width: 90%;
            margin-left: 6%;
        }
    }
    .slick-dots{
        margin-left: 5%;
    }
`

export const MeetingScheduleItem = styled.div`
    border-radius: 10px;
    border: 1px solid lightgray;
    overflow: hidden;
`

export const ScheduleTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f7a070;
    color: white;
    font-size: 14px;
    padding: 3%;
    img{
        width: 20px;
        height: 20px;
        margin-right: 2%;
    }
`

export const ScheduleInfo = styled.div`
    font-weight: bold;
`
    
export const ScheduleDate = styled.div`
    display: flex;
    margin: 2% 1%;
`

export const ScheduleInfoCategory = styled.span`
    color: #AfB2C0;
    margin-right: 10px;
    font-size: 14px;
    font-weight: normal;
`
export const ScheduleLocation = styled.div`
    display: flex;
    margin: 2% 1%;
    p{
        color: #AfB2C0;
        text-decoration: underline;
        margin: 0;
        margin-left: 10px;
    }
`
export const SchedulePeople = styled.div`
    display: flex;
    margin: 2% 1%;
`

export const MeetingDues = styled.div`
    color: #f7a070;
    border-top: 1px solid lightgray;
    margin: 2%;
    text-align: center;
    padding: 2%;
    svg{
        font-weight: normal;
        margin: 0 5px;
    }
`

export const JoinMeetingButton = styled.div`
    width: 100%;
    padding: 3% 0;
    margin: 5% 0;
    text-align: center;
    border-radius: 50px;

`
import styled from 'styled-components';

export const BottomSheetHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
    p{
        font-weight: bold;
        padding: 5% 0;
        margin: 0;
        span{
            color: #f7a070;
        }
    }
`
export const MeetingItemsDiv = styled.div`
    overflow: auto;
    height: 100%;
    flex: 1;
    
`

export const MeetingItem = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
    padding: 3% 0;
    img{
        border-radius: 50%;
    }
    
`

export const MeetingItemTexts = styled.div`
     margin-left: 5%;
     width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    // white-space: nowrap;
`
export const MeetingTitle = styled.p`
    font-weight: bold;
    margin: 2% 0;
    
`
export const MeetingOrder = styled.p`
    font-size: 12px;
    color: #f7a070;
    margin: 0;
`
export const MeetingLocation = styled.p`
    font-size: 14px;
    color: gray;
    margin: 0;
`


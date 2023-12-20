import React,{useState} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as styles from './ScheduleSliderStyle'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWonSign } from "@fortawesome/free-solid-svg-icons";
// import { Link } from 'react-router-dom';

const ScheduleSlider = ({ meetingSchedule, onMeetingClick, handleSelectBottomSheetPage }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10px',
    };

    const joinedMeeting = (meetingId, joined) => {
        // onMeetingClick 함수 호출하여 부모 컴포넌트에 업데이트된 정보 전달
        onMeetingClick(meetingId, !joined);
    };

  return (
        <styles.StyledSlider {...settings}>
              {meetingSchedule.map((meeting, index) => (
                  <div key={index}>
                      <styles.MeetingScheduleItem >
                          <styles.ScheduleTitle>
                              <img src={meeting.img} alt="img" /> {meeting.title}
                          </styles.ScheduleTitle>
                          <styles.ScheduleInfo>
                              <styles.ScheduleDate>
                                  <styles.ScheduleInfoCategory>날짜</styles.ScheduleInfoCategory>
                                  {meeting.date}
                                  {meeting.time}
                                  <span style={{ color: "red", marginLeft: "10px" }}>{meeting.dDay}</span>
                              </styles.ScheduleDate>
                              <styles.ScheduleLocation>
                                  <styles.ScheduleInfoCategory>위치</styles.ScheduleInfoCategory>
                                  {meeting.location}
                                  <p onClick={()=>handleSelectBottomSheetPage("showMap", index)}>(지도보기)</p>
                              </styles.ScheduleLocation>
                              <styles.SchedulePeople>
                                  <styles.ScheduleInfoCategory>인원</styles.ScheduleInfoCategory>
                                  <span style={{ color: "red" }}>{meeting.currentPeople}</span>/{meeting.maxPeople}
                                  <span style={{ color: "#AfB2C0", marginLeft: "10px", fontWeight: "normal" }}>({meeting.maxPeople - meeting.currentPeople}자리 남음)</span>
                              </styles.SchedulePeople>
                              <styles.MeetingDues>
                                  회비 : <FontAwesomeIcon icon={faWonSign} />{meeting.dues}원
                              </styles.MeetingDues>
                          </styles.ScheduleInfo>
                      </styles.MeetingScheduleItem>
                        <styles.JoinMeetingButton
                        onClick={() => joinedMeeting(index, meeting.joined)}
                          style={{
                              backgroundColor: meeting.joined ? "white" : "#f7a070",
                              color: meeting.joined ? "#f7a070" : "white",
                              boxShadow: meeting.joined ? "0 0 0 1px #f7a070 inset" : "none",
                              // 내부에 선 생성하려고 boxShadow 사용함
                              // border: meeting.joined ?  "1px solid #f7a070 " : "white",
                            }}>
                        {meeting.joined ? "참여 취소" : "일정 참여"}
                    </styles.JoinMeetingButton>
                  </div>
              ))
              }
        </styles.StyledSlider>
  );
};

export default ScheduleSlider;

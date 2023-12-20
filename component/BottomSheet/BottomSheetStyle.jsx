import styled from 'styled-components';

export const BottomSheetBody = styled.div`
    position: fixed;
    bottom: -5%;
    left: 0;
    width: 90%;
    height: ${({ isOpen }) => (isOpen ? '60%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '20' : '0')};
    // transition: height 0.5s ease-in-out;
    transition: height 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    background-color: #fff;
    box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.1);
    padding: 5%;
    padding-top: 0;
    padding-bottom: 20%;
`

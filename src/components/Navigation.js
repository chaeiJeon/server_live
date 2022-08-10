import React from "react";
import styled from "styled-components";

const NavigationBox = styled.div`
  background-color: white;
  opacity: 90%;
  border-radius: 35px;
  padding: 10px 30px;
`;
const NavigationItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const NavigationItem = styled.div`
  font-weight: bold;
  font-size: 15px;
  padding: 0 20px;
  letter-spacing: -1px;
  color: ${(props) => props.Color};

  @media (max-width: 530px) {
    font-size: 13px;
    padding: 0 13px;
  }
`;
function Navigation({ children }) {
  return (
    <NavigationBox>
      <NavigationItemWrapper>
        <NavigationItem>초등학교</NavigationItem>
        <NavigationItem>중학교</NavigationItem>
        <NavigationItem>고등학교</NavigationItem>
        <NavigationItem>대학교</NavigationItem>
        <NavigationItem Color="#955959">MY</NavigationItem>
      </NavigationItemWrapper>
    </NavigationBox>
  );
}
export default Navigation;

import React from "react";
import styled from "styled-components";

const SubNavigationBox = styled.div`
  background-color: transparent;
  width: 100%;
  padding: 10px 30px;
`;
const SubNavigationItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const SubNavigationItem = styled.div`
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
function SubNavigation({ children }) {
  return (
    <SubNavigationBox>
      <SubNavigationItemWrapper>
        <SubNavigationItem Color="#D74C4C">HOT</SubNavigationItem>
        <SubNavigationItem>ALL</SubNavigationItem>
      </SubNavigationItemWrapper>
    </SubNavigationBox>
  );
}
export default SubNavigation;

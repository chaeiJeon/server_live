import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import MainBox from "../components/MainBox";
import SubNavigation from "../components/SubNavigation";
const Contents = styled.div`
  width: 100%;
`;
const TableHead = styled.div`
  background-color: rgba(255, 255, 255, 0.22);
  border-radius: 35px;
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  flex: ${(props) => props.flex};
`;
const TableBody = styled.div`
  background-color: transparent;
`;
const TableRow = styled.div`
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  display: flex;
`;
const TableData = styled.div`
  padding: 0 7px;
  flex: ${(props) => props.flex};
`;
function Main() {
  return (
    <Layout>
      <Navigation />
      <MainBox>
        <SubNavigation />
        <Contents>
          <TableHead>
            <TableData flex="1">제목</TableData>
            <TableData>참여인원</TableData>
            <TableData>날짜</TableData>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableData flex="1">건대에서 만날 사람</TableData>
              <TableData>3명 / 10명</TableData>
              <TableData>날짜</TableData>
            </TableRow>
            <TableRow>
              <TableData flex="1">건대에서 만날 사람</TableData>
              <TableData>3명 / 10명</TableData>
              <TableData>날짜</TableData>
            </TableRow>
            <TableRow>
              <TableData flex="1">건대에서 만날 사람</TableData>
              <TableData>3명 / 10명</TableData>
              <TableData>날짜</TableData>
            </TableRow>
          </TableBody>
        </Contents>
      </MainBox>
    </Layout>
  );
}

export default Main;

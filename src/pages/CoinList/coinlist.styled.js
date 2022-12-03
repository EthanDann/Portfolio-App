import styled from "styled-components";

export const Body = styled.body`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondary};
  transition: ${(props) => props.theme.transition};
`;

export const ChartsContainer = styled.div`
  display: flex;
`;

export const TableContainer = styled.div`
  width: auto;
  margin: auto;
  padding: 5rem;
`;
export const CoinContainer = styled.div`
  overflow: auto;
  border-radius: 10px;
  background-color: ${(props) => props.theme.main};
  transition: ${(props) => props.theme.transition};
`;
export const CoinTable = styled.table`
  font-size: 0.8rem;
  margin: auto;
  padding: 1rem;
  border-radius: 10px;
  border-collapse: collapse;
  background-color: ${(props) => props.theme.main};
  transition: ${(props) => props.theme.transition};
`;
export const ScrollableDiv = styled.div`
  width: auto;
  height: auto;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-corner {
    background: ${(props) => props.theme.secondary};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.main};
    border-radius: 4px;
  }
  @media (min-height: 1024px) {
    height: 480px;
  }
  @media (min-width: 768px) {
    height: 600px;
  }
`;
export const ScrollText = styled.h4`
  text-align: center;
`;
export const TableHeader = styled.thead`
  position: sticky;
  background-color: ${(props) => props.theme.main};
  top: 0;
  z-index: 5;
`;
export const HeaderTr = styled.tr``;
export const Styledth = styled.th`
  text-align: left;
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-size: 0.7rem;
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6) {
    padding-left: 1rem;
  }
  &: nth-child(2) {
    width: 10%;
  }
`;
export const TableBody = styled.tbody``;
export const TableRow = styled.tr`
  border-top: 1px solid gray;
`;
export const Td = styled.td`
  &:nth-child(7) > div,
  &:nth-child(8) > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 75%;
    position: relative;
  }
  &:nth-child(7) p,
  &:nth-child(8) p {
    font-size: 0.7rem;
    margin: 0 0 0.2rem 0;
  }
  &:nth-child(7) p {
    color: rgb(138, 146, 178);
  }
  &:nth-child(8) p {
    color: rgb(138, 146, 178);
  }
  &:nth-child(7),
  &:nth-child(8) {
  }
  &:nth-child(9) {
    display: flex;
    justify-content: center;
    padding-top: 0.9rem;
    width: 75%;
  }
`;
export const TableDiv = styled.div`
    display: flex;
    align-items: center;
    padding: ${({ padding }) => (padding ? padding : "0 1rem 0 1rem")};
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Image = styled.img`
  margin: 0.5rem;
  width: 25%;
`;
export const Circle = styled.div`
  background-color: ${({ color }) => (color ? color : "white")};
  border: ${({ borderColor }) =>
    borderColor ? `${borderColor} 1.5px solid` : "none"};
  box-shadow: ${({ borderColor }) =>
    borderColor
      ? "rgba(6, 213, 84, 0) 0px 0px 10px -3px, rgba(6, 213, 84, .6) 0px 0px 10px -1px"
      : "none"};
  border-radius: 50%;
  height: 0.3rem;
  width: 0.3rem;
  margin: auto 0.5rem 0.1rem 0;
  display: inline-block;
`;

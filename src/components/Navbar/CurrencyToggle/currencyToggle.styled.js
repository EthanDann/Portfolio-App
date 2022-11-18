import styled from "styled-components";

export const DropDownContainer = styled.div`
  display: none;
  order: 3;
  @media (min-width: 430px) {
    display: flex;
    justify-content: center;
    width: 90px;
    background: ${(props) => props.theme.secondary};
    border-radius: 6px;
    margin-right: 1.5em;
    padding: 0.65em 0.5em;
    height: 100%;
  }
`;

export const DropDownHeader = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const DropDownListContainer = styled.div`
  display: flex;
`;

export const DropDownList = styled.ul`
  list-style: none;
  position: absolute;
  right: 14.7vw;
  background: ${(props) => props.theme.main};
  width: 100%;
  max-height: 220px;
  border-radius: 6px;
  border: none;
  box-sizing: border-box;
  overflow-y: auto;
  z-index: 999;
  max-width: 100px;
  padding: 0;
  margin-top: 2.7em;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2c2f36;
    outline: 1px solid #2c2f36;
    border-radius: 4px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.fontColor};
  padding: 0.5em 0;
  font-size: 0.8rem;
  text-transform: uppercase;
  cursor: pointer;
  overflow: auto;
  &:hover {
    background: ${(props) => props.theme.secondary};
  }
`;
export const DownArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.2em;
  background: transparent;
`;
export const StyledCurrencyIcon = styled.div`
  color: rgb(0, 252, 40);
`;
export const Circle = styled.div`
  margin: 0 5px;
  z-index: 3;
  background-color: ${(props) => props.theme.main};
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
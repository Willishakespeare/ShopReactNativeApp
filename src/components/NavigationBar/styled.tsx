import styled from "@emotion/native";

export const NavigationBarContainer = styled.View`
  display: flex;
  position: absolute;
  flex-direction: row;
  width: 80%;
  height: 65px;
  left: 10%;
  bottom: 35px;
  border-radius: 20px;
  justify-content: space-evenly;
  align-items: center;
  background-color: #0b0b0b;
  box-shadow: 10px 5px 5px black;
`;

export const NavigationIcon = styled.TouchableHighlight`
  display: flex;
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
`;

export const NavigationImage = styled.Image`
  width: 100%;
  height: 100%;
`;

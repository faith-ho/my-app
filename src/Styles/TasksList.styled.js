import styled from "styled-components";

export const StyledTasksList = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ bg }) => bg};
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 25px 50px 75px;
  padding: 60px;
  width: 400px;
  height: 100px;
  position: relative;
  color: ${({ color }) => color};

  button {
    position: absolute;
    top: 0;
    right: 0;
    border-color: transparent;
  }
`;

import styled from "@emotion/styled";

const Container = styled.div`
  background-color: ${({ theme }) => theme.COLOR_BACKGROUND_DARK};
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  height: 60%;
  -webkit-box-shadow: 7px 10px 18px -5px rgba(0, 0, 0, 1);
  -moz-box-shadow: 7px 10px 18px -5px rgba(0, 0, 0, 1);
  box-shadow: 7px 10px 18px -5px rgba(0, 0, 0, 1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export { Container };

import styled from "@emotion/styled";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${({ theme }) => theme.COLOR_BEHIND_BACKGROUND};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container };

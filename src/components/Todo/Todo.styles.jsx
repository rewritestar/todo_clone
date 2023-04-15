import styled from "@emotion/styled";

const Container = styled.li`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
`;

const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  accent-color: ${({ theme }) => theme.COLOR_ACCENT};
`;

const Text = styled.label`
  flex: 1 0 auto;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.COLOR_TEXT};
`;

const ButtonContainer = styled.span`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.COLOR_GREY};
  border-radius: 100%;
  transition: all 150ms ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.COLOR_ACCENT};
    transform: rotate(15deg) scale(1.2);
  }
`;

const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

export { Container, Checkbox, Text, ButtonContainer, Button };

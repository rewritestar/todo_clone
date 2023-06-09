import styled from "@emotion/styled";

const Container = styled.li`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
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
  width: 6rem;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.line};
  -webkit-box-orient: vertical;
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
  display: flex;
`;

const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Container, Checkbox, Text, ButtonContainer, Button };

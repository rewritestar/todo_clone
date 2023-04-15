import styled from "@emotion/styled";

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLOR_BACKGROUND_DARK};
  padding: 1rem;
`;

const Input = styled.input`
  flex: 1 0 auto;
  font-size: 1.1rem;
  padding: 0.5rem;
  border: none;
  outline: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const Button = styled.button`
  font-size: 1.1rem;
  padding: 0.5rem 1.5rem;
  outline: none;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: ${({ theme }) => theme.COLOR_WHITE};
  background-color: ${({ theme }) => theme.COLOR_ACCENT};
  cursor: pointer;
  :hover {
    filter: brightness(1.05);
  }
`;
export { Form, Input, Button };

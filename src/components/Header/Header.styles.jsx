import styled from "@emotion/styled";
const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.COLOR_BACKGROUND_DARK};
  border-bottom: 1px solid ${({ theme }) => theme.COLOR_GREY};
  padding: 0.5rem;
`;

const IconButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.COLOR_ACCENT};
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.2rem;
`;

const Filters = styled.ul`
  display: flex;
`;

const Filter = styled.li`
  margin-right: 1rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.COLOR_ACCENT};
  cursor: pointer;
  opacity: 0.8;
  ::after {
    content: "";
    display: ${(props) => (props.selected ? "block" : "none")};
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.COLOR_ACCENT};
  }
  :hover {
    opacity: 1;
  }
`;

export { Container, IconButton, Filters, Filter, Button };

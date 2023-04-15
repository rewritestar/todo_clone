import styled from "@emotion/styled";

const Container = styled.div`
  height: 100%;
  //App.jsx 밑에 있는 header와 todolist의 관계,
  //todolist로 꽉채우기 위해서 flex-glow: 1를 줌.
  //height: 100%는 header의 크기 때문에 넘쳐버리게 되고,
  //이는 addtodo 요소를 밖으로 밀어내는 문제가 생김
  //=> min-height: 0;으로 주면 해결됨
  min-height: 0;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLOR_BACKGROUND};
`;
const List = styled.ul`
  flex: 1 1 auto;
  overflow-y: auto;
`;

export { Container, List };

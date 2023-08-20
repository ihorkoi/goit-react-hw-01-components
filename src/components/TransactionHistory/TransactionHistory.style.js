import styled from 'styled-components';

export const Table = styled.table`
  width: 800px;
  text-align: center;
`;

export const Header = styled.thead`
  background-color: #64eefa;
  color: #ffffff;
  font-family: monospace;
`;

export const Body = styled.tbody`
  tr:nth-child(2n + 1) {
    background-color: rgba(164, 255, 236, 0.2);
  }
`;

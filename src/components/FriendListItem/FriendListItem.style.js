import styled from 'styled-components';

function getStatus(isOnline) {
  switch (isOnline) {
    case 'true':
      return 'green';
    default:
      return 'tomato';
  }
}

export const ListItem = styled.li`
  display: flex;
  margin: 8px 0;
  padding: 12px;
  align-items: center;
  gap: 12px;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

export const Status = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ status }) => getStatus(status)};
`;

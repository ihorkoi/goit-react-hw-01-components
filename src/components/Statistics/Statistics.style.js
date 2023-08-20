import styled from 'styled-components';

export const genHexColor = p => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const StatSection = styled.section`
  background-color: #f0f0f0;
  border: 1px solid #bebebe;
  border-radius: 6px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: #888888;
`;
export const StatsList = styled.ul`
  display: flex;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 24px;
  font-size: 32px;
  color: #ffffff;
  border: 1px solid #bebebe;
  background-color: ${percentage => genHexColor(percentage)};
  .percentage {
    font-size: 40px;
  }
`;

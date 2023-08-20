import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  margin: 16px;
  padding: 12px 8px;
  border-radius: 6px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const AdditionalInfo = styled.p`
  color: #afafaf;
  font-size: 24px;
  margin: 12px 0;
`;
export const InnerWrapper = styled.div`
  text-align: center;
  img {
    margin: 0 auto;
  }
`;

export const ProfileList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 12px 24px;
  text-align: center;
  background-color: #f0f0f0;
  border: 1px solid #cbcbcb;

  font-size: 20px;

  .quantity {
    font-weight: 600;
  }
`;

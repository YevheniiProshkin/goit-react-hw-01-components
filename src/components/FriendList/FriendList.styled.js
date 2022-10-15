import styled from 'styled-components';

export const FriendListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px 0;
`;

export const FriendItem = styled.li`
  background-color: #e4ebe9;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px 20px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${p => {
    return p.active ? 'green' : 'red';
  }};
`;

export const FriendAva = styled.img`
  border-radius: 15px;
  border: 1px solid #d3d3d3;
  margin-right: 10px;
`;

export const FriendName = styled.p`
  font-size: 30px;
  font-weight: 400;
  margin: 10px 0px;
  color: #484a4a;
`;

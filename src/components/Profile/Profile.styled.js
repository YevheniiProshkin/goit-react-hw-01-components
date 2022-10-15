import styled from 'styled-components';

export const UserProfile = styled.div`
  border-radius: 20px;
  background-color: #e4ebe9;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  margin: 20px 0;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UserAvatar = styled.img`
  border-radius: 50%;
  border: 1px solid #d3d3d3;
  height: 240px;
`;
export const UserName = styled.p`
  font-size: 40px;
  font-weight: 600;
  margin: 10px 0px;
`;
export const UserInfo = styled.p`
  margin: 5px 0px;
  color: #252928;
  font-size: 30px;
  font-weight: 400;
`;

export const StatsList = styled.ul`
  list-style: none;
  margin-top: 30px;
  margin-bottom: 0;
  padding: 0;
  display: flex;
  border-radius: 2%;
  justify-content: center;
  align-items: center;
`;
export const StatsElement = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid #d3d3d3;
  background-color: #fafafa;
`;
export const Label = styled.span`
  font-size: 35px;
  color: gray;
`;
export const Quantity = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

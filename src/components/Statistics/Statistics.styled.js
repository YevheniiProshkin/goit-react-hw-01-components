import styled from 'styled-components';

export const StatisticsSection = styled.section`
  margin: 0;
  margin: 20px 0;
  border-radius: 20px;
  background-color: #e4ebe9;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const StatsTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 35px;
  margin: 0;
  text-align: center;
  color: #484a4a;
`;

export const StatsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: ${getRandomHexColor};
  color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const StatsLabel = styled.span`
  font-size: 20px;
  font-weight: 400;
`;
export const StatsPercentage = styled.span`
  font-size: 25px;
  font-weight: 600;
  margin-top: 8px;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

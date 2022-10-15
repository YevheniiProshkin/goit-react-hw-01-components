import styled from 'styled-components';

export const TransactionTable = styled.table`
  background-color: #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-align: center;
  margin: 30px 0;
`;

export const TransName = styled.td`
  font-size: 25px;
  font-weight: 600;

  color: #ffffff;
  background-color: #264f45;
  border: 1px solid #d3d3d3;
  padding: 40px;
`;

export const TrTable = styled.tr`
  :nth-child(2n) {
    background-color: #ebf0f0;
  }
`;
export const TransData = styled.td`
  font-size: 20px;
  font-weight: 400;

  color: #484a4a;
  border: 1px solid #d3d3d3;
  padding: 10px;
`;

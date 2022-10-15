import {
  TransactionTable,
  TransData,
  TransName,
  TrTable,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <TransName>Type</TransName>
          <TransName>Amount</TransName>
          <TransName>Currency</TransName>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TrTable key={{ id }}>
            <TransData>{type}</TransData>
            <TransData>{amount}</TransData>
            <TransData>{currency}</TransData>
          </TrTable>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

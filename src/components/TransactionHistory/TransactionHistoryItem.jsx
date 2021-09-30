import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistoryItem({ type, amount, currency }) {
    return (
        <>
            <td className={ s.type}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </>
    )
}

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}
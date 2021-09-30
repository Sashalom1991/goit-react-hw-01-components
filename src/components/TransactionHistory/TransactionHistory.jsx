import PropTypes from 'prop-types';
import TransactionHistoryItem from "./TransactionHistoryItem"
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (
        <table className={s.transactionHistory }>
                <thead>
                    <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    </tr>
                </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id} className={s.line}>
                        <TransactionHistoryItem
                            type={type}
                            amount={amount}
                            currency={ currency}
                        />
                    </tr>
                ))}
                </tbody>
                </table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })).isRequired
}
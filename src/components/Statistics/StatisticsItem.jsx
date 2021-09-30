import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function StatisticsItem({ label, percentage }) {
    return (
        <>
                <span>{ label}</span>
                <span className={s.percentage}>{ percentage}</span>
        </>
    )
}

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}

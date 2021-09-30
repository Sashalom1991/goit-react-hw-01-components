import StatisticsItem from "./StatisticsItem";
import PropTypes from 'prop-types';
import s from './Statistics.module.css'

const Statistics = ({stats}) => {
    return (
        <section className={ s.statistics}>
            <h2 className={s.title}>Upload stats</h2>

            <ul className={ s.statsList}>
                {stats.map(({ id, label, percentage, color }) => (
                    <li className="item" key={id} style={{backgroundColor: color}}>
                        <StatisticsItem
                            label={label}
                            percentage={ percentage}
                        />
                    </li>  
                )) }                
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
        })
    ).isRequired
}

export default Statistics;
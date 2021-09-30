import PropTypes from 'prop-types';
import defaultImage from '../../default-image.png';
import s from './FriendList.module.css';

function Friend({ avatar, name, isOnline }) {
    return (
      <>
        <span className={ isOnline? s.online : s.offline}></span>
        <img className={s.avatar} src={avatar} alt={ name} width="48" />
        <p>{ name}</p>
      </>  
    )
    
};

Friend.defaultProps = {
  avatar: defaultImage,
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}

export default Friend;


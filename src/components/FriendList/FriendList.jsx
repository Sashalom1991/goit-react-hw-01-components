import PropTypes from 'prop-types';
import Friend from "./Friend";
import s from './FriendList.module.css'

export default function FriendList({friends}) {
    return (
        <ul className={s.friendList}>
            {friends.map(({ id, name, avatar, isOnline }) => (
                <li className={s.item} key={id}>
                    <Friend
                        name={name}
                        avatar={avatar}
                        isOnline={isOnline}
                    />
                </li>
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }
    )).isRequired,
}
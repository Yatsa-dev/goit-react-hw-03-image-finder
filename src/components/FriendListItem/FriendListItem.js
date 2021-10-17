import PropTypes from 'prop-types';
import s from './FriendListItem.module.css'
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={`${isOnline ? s.statusOn : s.statusOff}`}>{isOnline}</span>
      <img className="avatar" src={avatar} alt="avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

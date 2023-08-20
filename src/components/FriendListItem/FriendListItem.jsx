import { ListItem, Status } from './FriendListItem.style';
export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <ListItem className="item" key={id}>
      <Status className="status" status={isOnline.toString()}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </ListItem>
  );
};

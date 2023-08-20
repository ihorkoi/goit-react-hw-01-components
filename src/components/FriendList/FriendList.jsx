import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendsList = ({ friendsList, children }) => {
  return (
    <ul className="friend-list">
      {friendsList.map(friend => {
        return FriendListItem(friend);
      })}
    </ul>
  );
};

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendsList = ({ friendsList, children }) => {
  return (
    <ul className="friend-list">
      {friendsList.map(friend => {
        <FriendListItem friend={friend} />;
      })}
    </ul>
  );
};

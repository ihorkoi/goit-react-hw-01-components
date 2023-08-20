import userInfo from '../user.json';
// import friends from '../friends.json';
// import data from '../data.json';
// import transactions from '../transactions.json';
import { Profile } from './Profiile/Profile';
// import { Statistics } from './Statistics/Statistics';
// import { FriendsList } from './FriendList/FriendList';
// import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile userInfo={userInfo} />
      {/* <Statistics stats={data} /> */}
      {/* <FriendsList friendsList={friends} /> */}
      {/* <TransactionHistory transactions={transactions} /> */}
    </div>
  );
};

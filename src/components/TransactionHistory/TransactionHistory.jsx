import { Table, Header, Body } from './TransactionHistory.style';
export const TransactionHistory = ({ transactions }) => {
  return (
    <Table className="transaction-history">
      <Header>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Header>

      <Body>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <>
              <tr key={id}>
                <td>{type[0].toUpperCase() + type.slice(1)}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            </>
          );
        })}
      </Body>
    </Table>
  );
};

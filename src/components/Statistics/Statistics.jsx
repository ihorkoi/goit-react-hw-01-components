import { StatsList, StatsListItem, StatSection } from './Statistics.style';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection className="statistics">
      {title && (
        <h2 className="title" style={{ textAlign: 'center' }}>
          {title}
        </h2>
      )}
      <StatsList className="stat-list">
        {stats.map(stats => {
          return (
            <StatsListItem className="item" key={stats.id}>
              <span className="label">{stats.label}</span>
              <span className="percentage" percentage={stats.percentage}>
                {stats.percentage}%
              </span>
            </StatsListItem>
          );
        })}
      </StatsList>
    </StatSection>
  );
};

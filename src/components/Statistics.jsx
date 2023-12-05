export const Statistics = ({ title = false, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ label, percentage, id }) => {
          return (
            <ItemList
              key={id}
              label={label}
              percentage={percentage}
              color={getRandomColor()}
            />
          );
        })}
      </ul>
    </section>
  );
};

const ItemList = ({ label, percentage, color }) => {
  return (
    <li className="item" style={{ backgroundColor: color }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

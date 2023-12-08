import { ItemList } from './ItemList';
import css from './statistics.module.css';

export const Statistics = ({ title = false, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {stats.map(({ label, percentage, id }) => {
          return <ItemList key={id} label={label} percentage={percentage} />;
        })}
      </ul>
    </section>
  );
};

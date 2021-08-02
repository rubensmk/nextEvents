import classes from './logistics-item.module.css';

interface LogisticsItemProps {
  children: string;
}

function LogisticsItem({ children }: LogisticsItemProps) {

  return (
    <li className={classes.item}>
      <span className={classes.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;

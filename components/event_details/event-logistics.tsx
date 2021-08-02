/* eslint-disable @next/next/no-img-element */
import LogisticsItem from './logistics-item';
import classes from './event-logistics.module.css';

interface EventLogisticsProps {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

function EventLogistics({ date, address, image, imageAlt }: EventLogisticsProps) {

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem >
          {humanReadableDate}
        </LogisticsItem>
        <LogisticsItem >
          {addressText}
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;

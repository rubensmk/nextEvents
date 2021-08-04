import LogisticsItem from './logistics-item';
import classes from './event-logistics.module.css';
import Image from 'next/image';
import { MdEvent, MdPlace } from 'react-icons/md'
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
        <Image src={`${image}`} alt={imageAlt} width={280} height={180} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon="event" >
          {humanReadableDate}
        </LogisticsItem>
        <LogisticsItem icon="place" >
          {addressText}
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Button from '../ui/button';
import classes from './event-item.module.css';
import { MdEvent, MdPlace, MdChevronRight } from 'react-icons/md';
interface Event {
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
    image: string;
    isFeatured: boolean;
}
interface EventItemProps {
    event: Event;
}

function EventItem({ event }: EventItemProps) {
    const humanReadableDate = new Date(event.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });


    const exploreLink = `/events/${event.id}`;

    return (
        <li className={classes.item}>
            <img src={'/' + event.image} alt={event.title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{event.title}</h2>
                    <div className={classes.date}>
                        <MdEvent />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <MdPlace />
                        <address>{event.location}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        Explore Event
                    </Button>
                </div>
            </div>
        </li >
    )
}

export default EventItem;
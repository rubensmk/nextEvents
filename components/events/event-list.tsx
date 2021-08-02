import EventItem from "./event-item";
import classes from './event-list.module.css';

interface Event {
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
    image: string;
    isFeatured: boolean;
}
interface EventListProps {
    items: Event[];
}

function EventList({ items }: EventListProps) {
    return (
        <ul className={classes.list}>
            {items.map(event => <EventItem key={event.id} event={event} />)}
        </ul>
    )
}

export default EventList;
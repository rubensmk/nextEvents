import { useRouter } from 'next/router';
import EventContent from '../../components/event_details/event-content';
import EventLogistics from '../../components/event_details/event-logistics';
import EventSummary from '../../components/event_details/event-summary';
import { getEventById } from '../../dummy-data';

export default function EventDetailPage() {
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if (!event) {
        return <p>No event found!</p>
    }
    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>{event.description}</EventContent>
        </>
    )
}
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Event } from '../../components/events/event-list';
import EventContent from '../../components/event_details/event-content';
import EventLogistics from '../../components/event_details/event-logistics';
import EventSummary from '../../components/event_details/event-summary';
import { getEventById, getFeaturedEvents } from '../../helpers/api-util';


interface EventDetailPageProps {
    selectedEvent: Event
}
export default function EventDetailPage({ selectedEvent }: EventDetailPageProps) {

    if (!selectedEvent) {
        return (
            <div className="center">
                <p>Loading....</p>
            </div>
        )
    }
    return (
        <>
            <Head>
                <title>{selectedEvent.title}</title>
                <meta
                    name='description'
                    content={selectedEvent.description}
                />
            </Head>
            <EventSummary title={selectedEvent.title} />
            <EventLogistics date={selectedEvent.date} address={selectedEvent.location} image={selectedEvent.image} imageAlt={selectedEvent.title} />
            <EventContent>{selectedEvent.description}</EventContent>
        </>
    )
}

export const getStaticPaths = async () => {
    const events = await getFeaturedEvents()
    const paths = events.map(event => ({
        params: {
            eventId: event.id
        }
    }))
    return {
        paths: paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const eventId = params?.eventId;

    const event = await getEventById(eventId);
    return {
        props: {
            selectedEvent: event
        },
        revalidate: 30
    }
}
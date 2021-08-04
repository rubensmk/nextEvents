import EventList, { Event } from '../../components/events/event-list';
import EventsSearch from "../../components/events/event-search";
import { useRouter } from "next/router";
import { getAllEvents } from '../../helpers/api-util';
import { GetStaticProps } from 'next';
import Head from 'next/head';

interface EventsProps {
    events: Event[]
}
export default function Events({ events }: EventsProps) {
    const router = useRouter();

    function handleFilteredSearch(month: string, year: string) {
        const fullPath = `/events/${year}/${month}`

        router.push(fullPath)
    }
    return (
        <>
            <Head>
                <title>NEXT Events | All Events</title>
                <meta
                    name='description'
                    content="All events available"
                />
            </Head>
            <EventsSearch onSearch={handleFilteredSearch} />
            <EventList items={events} />
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const featuredEvents = await getAllEvents();

    return {
        props: {
            events: featuredEvents,
        },
        revalidate: 60
    }

}
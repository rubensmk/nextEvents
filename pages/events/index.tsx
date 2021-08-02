import { getAllEvents } from "../../dummy-data";
import EventList from '../../components/events/event-list';
import EventsSearch from "../../components/events/event-search";
import { useRouter } from "next/router";

export default function Events() {
    const events = getAllEvents();
    const router = useRouter();

    function handleFilteredSearch(month: string, year: string) {
        const fullPath = `/events/${year}/${month}`

        router.push(fullPath)
    }
    return (
        <>
            <EventsSearch onSearch={handleFilteredSearch} />
            <EventList items={events} />
        </>
    )
}
import React from "react";
import { useRouter } from 'next/router';
import { getFilteredEvents } from "../../dummy-data";
import ResultsTitle from "../../components/events/results-title";
import EventList from "../../components/events/event-list";


export default function FilteredEventsPage() {
    const router = useRouter();
    const filterData = router.query.slug;

    if (!filterData) {
        return <p className="center">Loading...</p>
    }

    const filteredYear = Number(filterData[0]);
    const filteredMonth = Number(filterData[1]);

    if (isNaN(filteredMonth) || isNaN(filteredYear) || filteredYear > 2030 || filteredYear < 2021 || filteredMonth < 1 || filteredMonth > 12) {
        return <p className="center">Invalid filter. Please adjust your values!</p>
    }

    const filteredEvents = getFilteredEvents({
        year: filteredYear,
        month: filteredMonth
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return <p>No events found for the chosen fitler.</p>
    }

    const date = new Date(filteredYear, filteredMonth - 1)
    return (
        <>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </>
    )
}
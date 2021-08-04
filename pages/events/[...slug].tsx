import React from "react";
import { getFilteredEvents } from "../../helpers/api-util";
import ResultsTitle from "../../components/events/results-title";
import EventList, { Event } from "../../components/events/event-list";
import { GetServerSideProps } from "next";
import Button from "../../components/ui/button";
import Head from "next/head";

interface FilteredEventsPageProps {
    hasError: boolean;
    events: Event[];
    date: {
        year: number;
        month: number;
    }
}

export default function FilteredEventsPage({ hasError, events, date }: FilteredEventsPageProps) {

    if (!events) {
        return <p className="center">Loading...</p>
    }

    if (!events || events.length === 0) {
        return <p>No events found for the chosen fitler.</p>
    }

    const showDate = new Date(date.year, date.month - 1)

    return (
        <>
            {hasError && (
                <div className="center">
                    <p>Invalid filter. Please adjust your values!</p>
                    <Button link="/events">Show all events</Button>
                </div>
            )}
            <Head>
                <title>{`All Events for ${date.month}/${date.year}`}</title>
                <meta
                    name='description'
                    content={`All Events for ${date.month}/${date.year}`}
                />
            </Head>
            <ResultsTitle date={showDate} />
            <EventList items={events} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const filterData = params?.slug
    const filteredYear = Number(filterData ? filterData[0] : '')
    const filteredMonth = Number(filterData ? filterData[1] : '')

    if (isNaN(filteredMonth) || isNaN(filteredYear) || filteredYear > 2030 || filteredYear < 2021 || filteredMonth < 1 || filteredMonth > 12) {
        return {
            props: {
                hasError: true,
            }
        }
    }

    const filteredEvents = await getFilteredEvents({
        year: filteredYear,
        month: filteredMonth
    });

    return {
        props: {
            events: filteredEvents,
            date: {
                year: filteredYear,
                month: filteredMonth
            }
        }
    }
}
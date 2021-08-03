import { GetStaticProps } from "next";
import EventList, { Event } from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

interface HomeProps {
  events: Event[];
}

export default function Home({ events }: HomeProps) {

  return (
    <>
      <EventList items={events} />
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 60
  }

}
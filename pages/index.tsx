import { GetStaticProps } from "next";
import EventList, { Event } from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";
import Head from 'next/head';
import NewsletterRegistration from "../components/input/newsletter-registration";

interface HomeProps {
  events: Event[];
}

export default function Home({ events }: HomeProps) {

  return (
    <>
      <Head>
        <title>NEXT Events | Home</title>
        <meta
          name='description'
          content="All featured events available"
        />
      </Head>
      <NewsletterRegistration />
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
import Link from "next/link";
import { Event } from "@/app/(component)/types";
import { supabase } from "lib/supabaseClient";
import { Plusbutton } from "../(component)/plusbutton";

export const revalidate = 20,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

async function getEvents() {
  //const response = await fetch(process.env.BASE_URL + '/api/events')
  //const events = await response.json();
  //return events as Event[]

  const { data } = await supabase.from("events").select("*").order("date");
  return data as Event[];
}

export default async function Events() {
  const events: Event[] = await getEvents();

  return (
    <>
      <div className="flex flex-wrap p-5 justify-evenly mb-4 pt-8">
        {events.map((eventMap: Event) => {
          return <CardNew key={eventMap.id} event={eventMap} />;
        })}
      </div>
      <Link href={"/events/new"}>
        <Plusbutton />
      </Link>
    </>
  );
}

function CardNew({ event }: { event: Event }) {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl text-white border border-orange-500 mb-4 rounded-md hover:border-secondary">
        <div className="card-body">
       
          <h2 className="card-title font-bold text-xl mb-2 text-white">
          <Link href={`/events/${event.id}`}> {event.title}  </Link>
          </h2>
          <div className="badge badge-lg badge-secondary text-black font-extrabold py-5 pr-4 text-left">
            <div className="badge badge-lg bg-orange-500 text-black font-extrabold border-none ml-0 mr-3">
            <Link href={`/events/${event.id}`}> {event.duration}H </Link>
            </div>
            <Link href={`/events/${event.id}`}>{event.date}</Link>
          </div>
          <p>  <Link href={`/events/${event.id}`}> {event.description} </Link></p>
          <div className="card-actions justify-end">
            {event.tags.map((tag) => {
              return (
                <div
                  className="badge badge-outline badge-lg bg-gray-300 text-gray-900 font-bold py-4"
                  key={tag}
                >
                  <Link href={`/events/${event.id}`}> #{tag} </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

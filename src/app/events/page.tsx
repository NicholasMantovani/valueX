import Link from "next/link"
import { Event } from "@/app/(component)/types";
import { supabase } from "lib/supabaseClient";
import { Plusbutton } from "../(component)/plusbutton";

export const
    revalidate = 20,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'


async function getEvents() {
    //const response = await fetch(process.env.BASE_URL + '/api/events')
    //const events = await response.json();
    //return events as Event[]

    const { data } = await supabase.from('events').select('*').order('date')
    return data as Event[]
}

export default async function Events() {
    const events: Event[] = await getEvents()

    return (
        <>
            <div className="flex flex-wrap p-5 justify-evenly mb-4 pt-8">
                {events.map((eventMap: Event) => {
                    return <Card key={eventMap.id} event={eventMap} />
                })}
            </div>
            <Link href={'/events/new'}>
                <Plusbutton />
            </Link>
        </>
    )
}

function Card({ event }: { event: Event; }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border border-orange-500 mb-4">
            <Link href={`/events/${event.id}`}>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-white">{event.title}</div>
                    <div className="text-left py-3">
                        <div className="p-2 bg-orange-300 items-center leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                            <span className="flex rounded-full bg-orange-500 uppercase px-2 py-1 font-extrabold text-md mr-3">{event.duration}h</span>
                            <span className="font-semibold mr-2 text-left flex-auto">{event.date}</span>
                        </div>
                    </div>
                    <p className="text-gray-200 text-base">
                        {event.description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {event.tags.map((tag) => {
                        return <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2" key={tag}>#{tag}</span>
                    })}
                </div>
            </Link>
        </div>

    )

}
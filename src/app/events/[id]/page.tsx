import { EventWithReviews } from "@/app/(component)/types";
import { supabase } from "lib/supabaseClient";

async function getEventDetailWithReviews(eventId: number) {
    const { data, error } = await supabase.from('events').select(
        `*, reviews(*)`
    ).eq('id', eventId)
    return data as EventWithReviews[]
}

export default async function EventDetail({ params }: any) {
    const eventsWithReviews = await getEventDetailWithReviews(params.id)
    const eventWithReview = eventsWithReviews[0]

    return (
        <div className="text-white">
            <div>
                <h1>Title: {eventWithReview.title}</h1>

                <h3>Description: {eventWithReview.description}</h3>
                <h5>Durata: {eventWithReview.duration}</h5>
                {eventWithReview.reviews.map((review) => {
                    return <div key={review.id}> {review.interesting} | {review.speech_fluidity} | {review.text_review} </div>
                }

                )}
            </div>
        </div>
    );
}
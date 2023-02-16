import { EventWithReviews } from "@/app/(component)/types";
import { supabase } from "lib/supabaseClient";

async function getEventDetailWithReviews(eventId: number) {

    const response = await fetch(process.env.BASE_URL + '/api/events/' + eventId)
    const events = await response.json();
    return events as EventWithReviews
}

export default async function EventDetail({ params }: any) {
    const eventWithReview: EventWithReviews | undefined = await getEventDetailWithReviews(params.id)

    return (
        <div className="text-white">
            {eventWithReview && <div>
                <h1>Title: {eventWithReview.title}</h1>

                <h3>Description: {eventWithReview.description}</h3>
                <h5>Durata: {eventWithReview.duration}</h5>
                {eventWithReview.reviews.map((review) => {
                    return <div key={review.id}>REVIEW: {review.interesting} | {review.speech_fluidity} | {review.text_review} </div>
                }

                )}
            </div>
            }
        </div>
    );
}
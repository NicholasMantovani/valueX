// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { EventWithReviews } from '@/app/(component)/types';
import { supabase } from 'lib/supabaseClient'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<EventWithReviews>
) {
    const { eventId } = req.query;

    const { data, error } = await supabase.from('events').select(
        `*, reviews(*)`
    ).eq('id', eventId)

    const eventWithReview: EventWithReviews[] | null = data;

    if (eventWithReview) {
        res.status(200).json(eventWithReview[0])
    }
    res.status(404)

}

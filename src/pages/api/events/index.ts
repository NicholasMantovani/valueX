// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from 'lib/supabaseClient'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Event[]>
) {
    const { data } = await supabase.from('events').select('*').order('date')
    res.status(200).json(data as Event[])
}

import { getServerSession } from 'next-auth/next'
import { Fragment } from 'react';
import { authOptions } from './../../pages/api/auth/[...nextauth]';
import { SignIn, SignOut } from './actions';

export const dynamic = 'force-dynamic';


export default async function Link() {
    let session: any;

    try {
        const [sessionRes] = await Promise.allSettled([
            getServerSession(authOptions),
        ]);

        if (sessionRes?.status === 'fulfilled') {
            session = sessionRes?.value;
        } else {
            console.error(sessionRes);
        }
    } catch (error) {
        console.error(error);
    }

    return (<Fragment>
        <section>
            <h1 className="font-bold text-3xl font-serif mb-5">Guestbook</h1>
            {session?.user ? (
                <>
                    LOGGED
                    <SignOut />
                </>
            ) : (
                <SignIn />
            )}
        </section>
    </Fragment>
    )
}


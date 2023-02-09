'use client';

import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { supabase } from 'lib/supabaseClient';
import { signIn, signOut } from 'next-auth/react';
import { Fragment } from 'react';
import { headers, cookies } from 'next/headers'


export function SignOut() {
    return (
        <button
            className="text-xs text-neutral-700 dark:text-neutral-300 mt-2 mb-6"
            onClick={() => signOut()}
        >
            → Sign out
        </button>
    );
}

export function SignIn() {

    createServerComponentSupabaseClient({ headers, cookies })
    return (<Fragment>
        <button
            className="flex bg-black text-neutral-200 px-4 py-3 rounded-md font-semibold text-sm mb-4 hover:text-white transition-all border border-gray-800"
            onClick={() => signIn('github')}
        >
            <div className="ml-3">Sign in with GitHub</div>
        </button>
        <Auth supabaseClient={supabase} appearance={{
            className: {
                anchor: 'text-white',
                button: 'text-white',
                container: 'text-white',
                divider: 'text-white',
                label: 'text-white',
                input: 'text-white',
                loader: 'text-white',
                message: 'text-white',
            },
        }} />
    </Fragment>

    );
}

export function SignInWithSupabase() {
    return (
        <button
            className="flex bg-black text-neutral-200 px-4 py-3 rounded-md font-semibold text-sm mb-4 hover:text-white transition-all border border-gray-800"
            onClick={() => signIn('github')}
        >
            <div className="ml-3">Sign in with GitHub</div>
        </button>
    );
}
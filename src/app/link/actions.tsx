'use client';

import { Auth } from '@supabase/auth-ui-react';
import { supabase } from 'lib/supabaseClient';
import { signIn, signOut } from 'next-auth/react';
import { Fragment } from 'react';
import { saveAs } from "file-saver";



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

export function DownloadExcel() {
    async function downloadExcel() {
        const filename: string = 'Presidents.xlsx'
        const response = await fetch('/api/excel?fileName=' + filename)
        const blob: Blob = await response.blob()
        saveAs(blob, filename);
    }
    return (
        <button
            className="flex bg-black text-neutral-200 px-4 py-3 rounded-md font-semibold text-sm mb-4 hover:text-white transition-all border border-gray-800"
            onClick={() => downloadExcel()}
        >
            <div className="ml-3">Download excel</div>
        </button>
    )
}
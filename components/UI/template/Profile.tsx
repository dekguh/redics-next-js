import React from 'react'
import Head from 'next/head'
import FormProfile from '../organisms/FormProfile'

const Profile : React.FC = () => {
    return (
        <>
            <Head>
                <title>Redics - Profile</title>
            </Head>

            <div className='p-4'>
                <FormProfile />
            </div>
        </>
    )
}

export default Profile

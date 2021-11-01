import React from 'react'
import CardListPesan from '../../molecules/card/CardListPesan'
import HeadingWithUrl from '../../molecules/heading/HeadingWithUrl'

const ListPesan : React.FC = () => {
    return (
        <div className='p-4 mb-12'>
            <HeadingWithUrl
                title='Pesan Saya'
                classes='mb-3'
            />

            <ul>
                <li>
                    <CardListPesan
                        name='dek guh esa'
                        message='ini barangnya bagus apa tidak? bisa nego harga kah pak?'
                        url='/pesan/1'
                    />
                </li>
            </ul>
        </div>
    )
}

export default ListPesan

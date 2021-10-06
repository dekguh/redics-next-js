import React from 'react'
import FormProfile from '../organisms/FormProfile'

const PopupBilling : React.FC = () => {
    return (
        <div className='fixed top-0 bottom-0 right-0 left-0 z-50 bg-black-transparent-0.7'>
            <div className='bg-white p-4 w-72 h-96 overflow-y-auto rounded absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4'>
                <FormProfile />
            </div>
        </div>
    )
}

export default PopupBilling

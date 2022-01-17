import React from 'react'
import Input from '../../atoms/control/Input'
import TextTitleSection from '../../atoms/text/TextTitleSection'

const FormSelectDate : React.FC = () => {
    return (
        <div className='flex flex-row flex-nowrap'>
            <div className='flex-grow flex-shrink w-2/4 pr-2'>
                <TextTitleSection text='mulai'/>
                <Input type='date' classes='mt-3' />
            </div>

            <div className='flex-grow flex-shrink w-2/4 pl-2'>
                <TextTitleSection text='akhir'/>
                <Input type='date' classes='mt-3' />
            </div>
        </div>
    )
}

export default FormSelectDate

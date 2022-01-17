import React from 'react'
import TextTitleSection from '../../atoms/text/TextTitleSection'
import FormSelect from './FormSelect'

const FormSelectKurir : React.FC = () => {
    return (
        <div>
            <TextTitleSection text='kurir'/>

            <FormSelect
                classes='mt-3'
                list={[
                    {
                        value: 'jet',
                        text: 'J&T'
                    },
                    {
                        value: 'sicepat',
                        text: 'sicepat'
                    }
                ]}
            />
        </div>
    )
}

export default FormSelectKurir

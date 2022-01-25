import React, { useEffect } from 'react'
import { getPriceOngkir } from '../../../utils/other'
import TextTitleSection from '../../atoms/text/TextTitleSection'
import FormSelect from './FormSelect'

const FormSelectKurir : React.FC = () => {
    useEffect(() => {
        const getPrice = async () => {
            const response = await getPriceOngkir(
                'jnt',
                '258',
                '259',
                '1000'
            )
            console.log(response)
        }
        getPrice()
    }, [])
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

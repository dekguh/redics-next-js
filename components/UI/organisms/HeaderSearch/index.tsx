import React from 'react'
import { IHeaderSearch } from '../../../utils/types'
import IconLink from '../../atoms/control/IconLink'
import FormInput from '../../molecules/FormGroup/FormInput'
import { BiSearch } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'

const HeaderSearch : React.FC<IHeaderSearch> = ({ billing }) => {
    return (
    <div>
        {billing && (
        <div className='mb-2 flex flex-row flex-nowrap items-center'>
            <span className='mr-1 text-blue-500'><i><MdLocationOn /></i></span>
            <span>{billing?.kecamatan}, {billing?.kabupaten}, {billing?.provinsi}</span>
        </div>)}

        <div className='relative'>
            <FormInput
                placeholder='pencarian'
                classesInput='rounded-full pr-10'
            />

            <IconLink
                icon={BiSearch}
                toPath='#'
                classes='absolute top-2/4 right-3 transform -translate-y-2/4 text-blue-500'
            />
        </div>
    </div>
    )
}

export default HeaderSearch

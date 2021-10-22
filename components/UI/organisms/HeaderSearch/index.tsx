import React, { useState, ChangeEvent } from 'react'
import { IHeaderSearch } from '../../../utils/types'
import IconLink from '../../atoms/control/IconLink'
import FormInput from '../../molecules/FormGroup/FormInput'
import { BiSearch } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { connect, ConnectedProps } from 'react-redux'
import { updateSearchTextAction } from '../../../utils/redux/search/action'

const mapDispatch = {
    updateSearchTextAct: (text : string) => (updateSearchTextAction(text))
}

const connector = connect(null, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

const HeaderSearch : React.FC<IHeaderSearch & PropsFromRedux> = ({ billing, updateSearchTextAct }) => {
    const [searchText, setSearchText] = useState<string>('')
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
                onChange={(e : ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
            />

            <IconLink
                icon={BiSearch}
                toPath='#'
                classes='absolute top-2/4 right-3 transform -translate-y-2/4 text-blue-500'
                onClick={() => updateSearchTextAct(searchText)}
            />
        </div>
    </div>
    )
}

export default connector(HeaderSearch)

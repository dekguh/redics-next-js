import React, { useState, ChangeEvent } from 'react'
import { IHeaderSearch } from '../../../utils/types'
import IconLink from '../../atoms/control/IconLink'
import FormInput from '../../molecules/FormGroup/FormInput'
import { BiSearch } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { connect, ConnectedProps } from 'react-redux'
import { updateSearchTextAction } from '../../../utils/redux/search/action'
import { RootState } from '../../../utils/redux/store'
import { useRouter } from 'next/router'

const mapState = (state : RootState) => ({
    billing: state.users.billing,
    searchTextGlobal: state.search.text
})

const mapDispatch = {
    updateSearchTextAct: (text : string) => (updateSearchTextAction(text))
}

const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

const HeaderSearch : React.FC<IHeaderSearch & PropsFromRedux> = ({ billing, searchTextGlobal, updateSearchTextAct }) => {
    const [searchText, setSearchText] = useState<string>('')
    const Router = useRouter()

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
                defaultValue={searchTextGlobal}
            />

            <IconLink
                icon={BiSearch}
                toPath='#'
                classes='absolute top-2/4 right-3 transform -translate-y-2/4 text-blue-500'
                onClick={() => {
                    updateSearchTextAct(searchText)
                    if(Router.asPath !== '/pencarian') Router.push('/pencarian')
                }}
            />
        </div>
    </div>
    )
}

export default connector(HeaderSearch)

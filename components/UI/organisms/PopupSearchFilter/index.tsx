import React, { ChangeEvent, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { IoFilterOutline } from 'react-icons/io5'
import { dataListKabupaten, dataListKecamatan, dataListProvinsi } from '../../../utils/data'
import FormSelect from '../../molecules/FormGroup/FormSelect'
import HeadingWithUrl from '../../molecules/heading/HeadingWithUrl'
import { RootState } from '../../../utils/redux/store'

const mapState = (state : RootState) => ({
    billing: state.users.billing
})

const mapDispatch = {

}

const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

const PopupSearchFilter : React.FC<PropsFromRedux> = ({ billing }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${billing && 'mt-6'} py-3 px-3 rounded border border-gray-200 duration-300 hover:bg-blue-500 hover:text-white`}
            >
                <i><IoFilterOutline /></i>
            </button>

            {isOpen && (
            <div className='bg-black-transparent-0.7 fixed top-0 left-0 right-0 bottom-0 z-50 p-8'>
                <div className='bg-white rounded p-4 mt-20'>
                    <HeadingWithUrl
                        title='Filter Pencarian'
                        textLink='tutup'
                        onClick={() => setIsOpen(!isOpen)}
                        classes='mb-3'
                    />

                    <FormSelect
                        required={true}
                        classes='mb-2'
                        label='Provinsi'
                        list={dataListProvinsi.map(data => ({ value: data.name.toLowerCase(), text: data.name }))}
                        onChange={(e : ChangeEvent<HTMLInputElement>) => {
                            
                        }}
                        defaultVal={{ text: 'pilih provinsi' }}
                        isSelected={'bali'}
                    />

                    <FormSelect
                        required={true}
                        classes='mb-2'
                        label='Kabupaten'
                        list={dataListKabupaten.filter(data => data.provinsiId.toLowerCase() == 'bali')
                            .map(data => ({ value: data.name, text: data.name }))
                        }
                        defaultVal={{ text: 'pilih kabupaten' }}
                        onChange={(e : ChangeEvent<HTMLInputElement>) => {
                            
                        }}
                        isSelected={'badung'}
                    />

                    <FormSelect
                        required={true}
                        label='Kecamatan'
                        classes='mb-2'
                        list={dataListKecamatan.filter(data => data.kabupatenId == 'badung')
                            .map(data => ({ value: data.name.toLowerCase(), text: data.name }))
                        }
                        defaultVal={{ text: 'pilih kecamatan' }}
                        onChange={(e : ChangeEvent<HTMLInputElement>) => false}
                        isSelected={'kuta selatan'}
                    />
                </div>
            </div>)}
        </div>
    )
}

export default connector(PopupSearchFilter)

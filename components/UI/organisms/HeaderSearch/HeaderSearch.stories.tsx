import { Meta } from '@storybook/react'
import { default as HderSearch } from '.'

export default {
    component: HderSearch,
    title: 'Design System/Organisms/Header Search',
    argTypes: {
        kecamatan: {
            control: { type: 'text' },
            defaultValue: 'kuta selatan'
        },
        kabupaten: {
            control: { type: 'text' },
            defaultValue: 'badung'
        },
        provinsi: {
            control: { type: 'text' },
            defaultValue: 'bali'
        }
    }
} as Meta

export const HeaderSearch = () => <HderSearch />
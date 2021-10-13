import { Meta } from '@storybook/react'
import { IBlockIconText } from '../../../utils/types'
import { default as BlckIconText } from './BlockIconText'

export default {
    component: BlckIconText,
    title: 'Design System/Molecules/Other/Block Icon Text',
    argTypes: {
        imgUrl: {
            control: { type: 'text' },
            defaultValue: '/icon/icon-not-found.png'
        },
        description: {
            control: { type: 'text' },
            defaultValue: 'iklan tidak ditemukan'
        }
    }
} as Meta

export const BlockIconText = (args : IBlockIconText) => <BlckIconText {...args}/>
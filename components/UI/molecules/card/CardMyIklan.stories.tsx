import { Meta } from '@storybook/react'
import { ICardMyIklan } from '../../../utils/types'
import { default as CrdMyIklan } from './CardMyIklan'

export default {
    component: CrdMyIklan,
    title: 'Design System/Molecules/Card/Card My Iklan',
    argTypes: {
        name: {
            control: { type: 'text' },
            defaultValue: 'Kursi Roda Aluminium'
        },
        status: {
            control: { type: 'boolean' },
            defaultValue: true
        },
        date: {
            control: { type: 'text' },
            defaultValue: '9 oktober 2021'
        },
        toPath: {
            control: { type: 'text' },
            defaultValue: '#'
        },
        totalView: {
            control: { type: 'number' },
            defaultValue: '200'
        }
    }
} as Meta

export const CardMyIklan = (args : ICardMyIklan) => <CrdMyIklan {...args}/>
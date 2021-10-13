import { Meta } from '@storybook/react'
import { IPagination } from '../../../utils/types'
import { default as Pgination } from './Pagination'

export default {
    component: Pgination,
    title: 'Design System/Molecules/Other/Pagination',
    argTypes: {
        pageCount: {
            control: { type: 'number' },
            defaultValue: 10
        },
        pageRangeDisplayed: {
            control: { type: 'number' },
            defaultValue: 3
        },
        marginPagesDisplayed: {
            control: { type: 'number' },
            defaultValue: 3
        }
    }
} as Meta

export const Pagination = (args : IPagination) => <Pgination {...args}/>
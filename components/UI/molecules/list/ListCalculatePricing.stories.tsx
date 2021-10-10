import { Meta } from '@storybook/react'
import { IListCalculatePricing } from '../../../utils/types'
import { default as LstCalculatePricing } from './ListCalculatePricing'

export default {
    component: LstCalculatePricing,
    title:'Design System/Molecules/List/List Calculate Pricing',
    argTypes: {
        pricePerHour: {
            control: {
                type: 'number'
            },
            defaultValue: 5000
        }
    }
} as Meta

export const ListCalculatePricing = (args : IListCalculatePricing) => <LstCalculatePricing {...args}/>
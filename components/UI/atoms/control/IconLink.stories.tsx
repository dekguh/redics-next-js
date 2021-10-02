import { Meta } from '@storybook/react'
import { IIconLink } from '../../../utils/types'
import { default as IcnLink } from './IconLink'
import { BsArrowLeft } from 'react-icons/bs'

export default {
    component: IcnLink,
    title: 'Design System/Atoms/Text/Icon Link',
    argTypes: {
        icon: {
            defaultValue: BsArrowLeft
        },
        toPath: {
            control: { type: 'text' },
            defaultValue: '-'
        }
    }
} as Meta

export const IconLink = (args : IIconLink) => <IcnLink {...args}/>
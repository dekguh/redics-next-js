import { Meta } from '@storybook/react'
import { INavItem } from '../../../utils/types'
import {default as NvItem} from './NavItem'
import { VscHome } from 'react-icons/vsc'

export default {
    component: NvItem,
    title: 'Design System/Molecules/item/Nav Item',
    argTypes: {
        icon: {
            defaultValue: VscHome
        },
        toPath: {
            defaultValue: 'beranda'
        },
        isActive: {
            control: {
                type: 'boolean'
            },
            defaultValue: false
        }
    }
} as Meta

export const NavItem = (args : INavItem) => <NvItem {...args}/>
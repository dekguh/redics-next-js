import { Meta } from '@storybook/react'
import { dataListMenu } from '../../utils/data'
import { INavList } from '../../utils/types'
import { default as NvList } from './navigation/NavList'

export default {
    component: NvList,
    title: 'Design System/Molecules/Navigation/Nav List',
    argTypes: {
        dataListMenu: {
            defaultValue: dataListMenu
        }
    }
} as Meta

export const NavList = (args : INavList ) => <NvList {...args}/>
import { Meta } from '@storybook/react'
import { default as Nav } from './index'

export default {
    component: Nav,
    title: 'Design System/Organisms/Navigation'
} as Meta

export const Navigation : React.VFC = () => <Nav />
import { Meta } from '@storybook/react'
import { IFormPreviewImage } from '../../../utils/types'
import { default as FrmPreviewImage} from './FormPreviewImage'

export default {
    component: FrmPreviewImage,
    title: 'Design System/Molecules/FormGroup/Form Preview Image',
    argTypes: {
        imgSrc: {
            control: { type: 'text' },
            defaultValue: '/default-preview.jpg'
        }
    }
} as Meta

export const FormPreviewImage = (args : IFormPreviewImage) => <FrmPreviewImage {...args} />
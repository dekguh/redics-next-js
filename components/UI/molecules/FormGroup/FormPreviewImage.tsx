import React from 'react'
import { IFormPreviewImage } from '../../../utils/types'

const FormPreviewImage : React.FC<IFormPreviewImage> = ({ classes, imgSrc }) => {
    return (
        <div className={classes}>
            <img src={imgSrc} alt="preview" className='object-cover w-full h-40' />
        </div>
    )
}

export default FormPreviewImage

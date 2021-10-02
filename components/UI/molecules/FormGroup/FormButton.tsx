import React from 'react'
import { IFormButton } from '../../../utils/types'
import ButtonPrimary from '../../atoms/control/ButtonPrimary'

const FormButton : React.FC<IFormButton> = ({ classes, text, onClick, type = 'button' }) => {
    return (
        <div className={classes}>
            <ButtonPrimary
                text={text}
                onClick={onClick}
                type={type}
            />
        </div>
    )
}

export default FormButton

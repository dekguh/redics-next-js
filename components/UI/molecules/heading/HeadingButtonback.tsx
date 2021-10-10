import React from 'react'
import { IHeadingButtonBack } from '../../../utils/types'
import IconLink from '../../atoms/control/IconLink'
import { BsArrowLeft } from 'react-icons/bs'

const HeadingButtonBack : React.FC<IHeadingButtonBack> = ({ toPath = '#', classes }) => {
    return (
        <div className={classes}>
            <div className='flex-grow flex-shrink pr-2'>
                <IconLink
                    icon={BsArrowLeft}
                    toPath={toPath}
                />
            </div>
        </div>
    )
}

export default HeadingButtonBack
import React from 'react'
import { IHeadingAuth } from '../../../utils/types'
import IconLink from '../../atoms/control/IconLink'
import TextLink from '../../atoms/text/TextLink'
import { BsArrowLeft } from 'react-icons/bs'

const HeadingAuth : React.FC<IHeadingAuth> = ({ isLogin, isRegister }) => {
    return (
        <div className='flex flex-row flex-nowrap items-center'>
            <div className='flex-grow-0 flex-shrink w-6/12'>
                <IconLink
                    icon={BsArrowLeft}
                    toPath='/'
                />
            </div>

            <div className='flex-grow-0 flex-shrink w-6/12'>
                <ul className='flex flex-row flex-nowrap justify-end last:mr-0'>
                    <li className='flex-grow-0 flex-shrink mr-2'>
                        <TextLink text='login' isActive={isLogin} toPath='/login' />
                    </li>
                    <li className='flex-grow-0 flex-shrink'>
                        <TextLink text='register' isActive={isRegister} toPath='/register' />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeadingAuth

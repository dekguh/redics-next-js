import React from 'react'
import { IHeadingWithUrl } from '../../../utils/types'
import TextLink from '../../atoms/text/TextLink'
import TextTitleSection from '../../atoms/text/TextTitleSection'

const HeadingWithUrl : React.FC<IHeadingWithUrl> = ({ title, textLink, toPath = '#', classes, onClick }) => {
    return (
        <div className={`flex flex-row flex-nowrap items-center ${classes}`}>
            <div className='flex-grow flex-shrink pr-2'>
                <TextTitleSection
                    text={title}
                />
            </div>

            {textLink && (<div className='flex-grow-0 flex-shrink'>
                <TextLink
                    text={textLink}
                    toPath={toPath}
                    isActive={true}
                    onClick={onClick}
                />
            </div>)}
        </div>
    )
}

export default HeadingWithUrl
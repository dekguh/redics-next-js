import { TDataListMenu } from '../types'
import { VscHome } from 'react-icons/vsc'
import { CgSearch } from 'react-icons/cg'
import { MdLabelOutline } from 'react-icons/md'
import { BiMessageDetail } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'

export const dataListMenu : TDataListMenu = [
    {
        icon: VscHome,
        toPath: '/'
    },
    {
        icon: CgSearch,
        toPath: '/pencarian'
    },
    {
        icon: MdLabelOutline,
        toPath: '/iklan'
    },
    {
        icon: BiMessageDetail,
        toPath: '/pesan'
    },
    {
        icon: FiUser,
        toPath: '/akun'
    }
]
import { TDataListKabupaten, TDataListKecamatan, TDataListMenu, TDataListMyIklan, TDataListProvinsi } from '../types'
import { VscHome } from 'react-icons/vsc'
import { CgSearch } from 'react-icons/cg'
import { MdLabelOutline } from 'react-icons/md'
import { BiMessageDetail, BiMoney } from 'react-icons/bi'
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
        toPath: '/iklan-saya'
    },
    {
        icon: BiMessageDetail,
        toPath: '/pesan'
    },
    {
        icon: BiMoney,
        toPath: '/transaksi'
    },
    {
        icon: FiUser,
        toPath: '/akun'
    }
]

export const dataListProvinsi : TDataListProvinsi = [
    {
        id: 1,
        name: 'bali'
    }
]

export const dataListKabupaten : TDataListKabupaten = [
    {
        provinsiId: 'bali',
        id: 1,
        name: 'badung'
    },
    {
        provinsiId: 'bali',
        id: 2,
        name: 'buleleng'
    },
    {
        provinsiId: 'bali',
        id: 3,
        name: 'bangli'
    },
    {
        provinsiId: 'bali',
        id: 4,
        name: 'denpasar'
    },
    {
        provinsiId: 'bali',
        id: 5,
        name: 'klungkung'
    },
    {
        provinsiId: 'bali',
        id: 6,
        name: 'tabanan'
    },
    {
        provinsiId: 'bali',
        id: 7,
        name: 'jembrana'
    },
    {
        provinsiId: 'bali',
        id: 8,
        name: 'gianyar'
    },
    {
        provinsiId: 'bali',
        id: 9,
        name: 'karangasem'
    }
]

export const dataListKecamatan : TDataListKecamatan = [
    {
        provinsiId: 'bali',
        kabupatenId: 'badung', // badung
        id: 1,
        name: 'abiansemal'
    },{
        provinsiId: 'bali',
        kabupatenId: 'badung', // badung
        id: 2,
        name: 'kuta selatan'
    },{
        provinsiId: 'bali',
        kabupatenId: 'badung', // badung
        id: 3,
        name: 'kuta'
    },{
        provinsiId: 'bali',
        kabupatenId: 'badung', // badung
        id: 4,
        name: 'kuta utara'
    },{
        provinsiId: 'bali',
        kabupatenId: 'badung', // badung
        id: 5,
        name: 'mengwi'
    },{
        provinsiId: 'bali',
        kabupatenId: 'badung', // badung
        id: 6,
        name: 'petang'
    },{
        provinsiId: 'bali',
        kabupatenId: 'buleleng', // buleleng
        id: 7,
        name: 'busungbiu'
    },{
        provinsiId: 'bali',
        kabupatenId: 'buleleng', // buleleng
        id: 8,
        name: 'banjar'
    },{
        provinsiId: 'bali',
        kabupatenId: 'buleleng', // buleleng
        id: 9,
        name: 'buleleng'
    },{
        provinsiId: 'bali',
        kabupatenId: 'buleleng', // buleleng
        id: 10,
        name: 'gerokgak'
    },{
        provinsiId: 'bali',
        kabupatenId: 'buleleng', // buleleng
        id: 11,
        name: 'kubutambahan'
    },{
        provinsiId: 'bali',
        kabupatenId: 'buleleng', // buleleng
        id: 12,
        name: 'sawan'
    },{
        provinsiId: 'bali',
        kabupatenId: 'buleleng', // buleleng
        id: 13,
        name: 'seririt'
    },{
        provinsiId: 'bali',
        kabupatenId: 'buleleng', // buleleng
        id: 14,
        name: 'sukasada'
    },{
        provinsiId: 'bali',
        kabupatenId: 'buleleng', // buleleng
        id: 15,
        name: 'tejakula'
    },{
        provinsiId: 'bali',
        kabupatenId: 'bangli',
        id: 16,
        name: 'bangli'
    },{
        provinsiId: 'bali',
        kabupatenId: 'bangli',
        id: 17,
        name: 'tembuku'
    },{
        provinsiId: 'bali',
        kabupatenId: 'bangli',
        id: 18,
        name: 'susut'
    },{
        provinsiId: 'bali',
        kabupatenId: 'bangli',
        id: 19,
        name: 'kintamani'
    },{
        provinsiId: 'bali',
        kabupatenId: 'denpasar',
        id: 20,
        name: 'denpasar selatan'
    },{
        provinsiId: 'bali',
        kabupatenId: 'denpasar',
        id: 21,
        name: 'denpasar barat'
    },{
        provinsiId: 'bali',
        kabupatenId: 'denpasar',
        id: 22,
        name: 'denpasar utara'
    },{
        provinsiId: 'bali',
        kabupatenId: 'denpasar',
        id: 23,
        name: 'denpasar timur'
    },{
        provinsiId: 'bali',
        kabupatenId: 'klungkung',
        id: 24,
        name: 'banjarangkan'
    },{
        provinsiId: 'bali',
        kabupatenId: 'klungkung',
        id: 25,
        name: 'dawan'
    },{
        provinsiId: 'bali',
        kabupatenId: 'klungkung',
        id: 26,
        name: 'klungkung'
    },{
        provinsiId: 'bali',
        kabupatenId: 'klungkung',
        id: 27,
        name: 'nusa penida'
    },{
        provinsiId: 'bali',
        kabupatenId: 'tabanan',
        id: 28,
        name: 'baturiti'
    },{
        provinsiId: 'bali',
        kabupatenId: 'tabanan',
        id: 29,
        name: 'kediri'
    },{
        provinsiId: 'bali',
        kabupatenId: 'tabanan',
        id: 30,
        name: 'kerambitan'
    },{
        provinsiId: 'bali',
        kabupatenId: 'tabanan',
        id: 31,
        name: 'marga'
    },{
        provinsiId: 'bali',
        kabupatenId: 'tabanan',
        id: 32,
        name: 'penebel'
    },{
        provinsiId: 'bali',
        kabupatenId: 'tabanan',
        id: 33,
        name: 'pupuan'
    },{
        provinsiId: 'bali',
        kabupatenId: 'tabanan',
        id: 34,
        name: 'selemadeg'
    },{
        provinsiId: 'bali',
        kabupatenId: 'tabanan',
        id: 35,
        name: 'selemadeg barat'
    },{
        provinsiId: 'bali',
        kabupatenId: 'tabanan',
        id: 36,
        name: 'selemadeg timur'
    },{
        provinsiId: 'bali',
        kabupatenId: 'tabanan',
        id: 37,
        name: 'tabanan'
    },{
        provinsiId: 'bali',
        kabupatenId: 'jembrana',
        id: 38,
        name: 'jembrana'
    },{
        provinsiId: 'bali',
        kabupatenId: 'jembrana',
        id: 39,
        name: 'melaya'
    },{
        provinsiId: 'bali',
        kabupatenId: 'jembrana',
        id: 40,
        name: 'mendoyo'
    },{
        provinsiId: 'bali',
        kabupatenId: 'jembrana',
        id: 41,
        name: 'negara'
    },{
        provinsiId: 'bali',
        kabupatenId: 'jembrana',
        id: 42,
        name: 'pekutatan'
    },{
        provinsiId: 'bali',
        kabupatenId: 'gianyar',
        id: 43,
        name: 'blahbatuh'
    },{
        provinsiId: 'bali',
        kabupatenId: 'gianyar',
        id: 44,
        name: 'gianyar'
    },{
        provinsiId: 'bali',
        kabupatenId: 'gianyar',
        id: 45,
        name: 'payangan'
    },{
        provinsiId: 'bali',
        kabupatenId: 'gianyar',
        id: 46,
        name: 'sukawati'
    },{
        provinsiId: 'bali',
        kabupatenId: 'gianyar',
        id: 47,
        name: 'tampaksiring'
    },{
        provinsiId: 'bali',
        kabupatenId: 'gianyar',
        id: 48,
        name: 'tegalalang'
    },{
        provinsiId: 'bali',
        kabupatenId: 'gianyar',
        id: 49,
        name: 'ubud'
    },{
        provinsiId: 'bali',
        kabupatenId: 'karangasem',
        id: 50,
        name: 'abang'
    },{
        provinsiId: 'bali',
        kabupatenId: 'karangasem',
        id: 51,
        name: 'bebandem'
    },{
        provinsiId: 'bali',
        kabupatenId: 'karangasem',
        id: 52,
        name: 'karangasem'
    },{
        provinsiId: 'bali',
        kabupatenId: 'karangasem',
        id: 53,
        name: 'kubu'
    },{
        provinsiId: 'bali',
        kabupatenId: 'karangasem',
        id: 54,
        name: 'manggis'
    },{
        provinsiId: 'bali',
        kabupatenId: 'karangasem',
        id: 55,
        name: 'rendang'
    },{
        provinsiId: 'bali',
        kabupatenId: 'karangasem',
        id: 56,
        name: 'selat'
    },{
        provinsiId: 'bali',
        kabupatenId: 'karangasem',
        id: 57,
        name: 'sideman'
    },
]

export const dataListMyIklan : TDataListMyIklan = [
    {
        id: 1,
        nama: 'Kursi Roda Aluminium',
        date: '2 oktober 2021',
        toPath: '/iklan-saya/username-id-judul',
        totalView: 29,
        status: true
    },
    {
        id: 2,
        nama: 'Tempat Tidur Pasien Kulit',
        date: '4 oktober 2021',
        toPath: '/iklan-saya/username-id-judul',
        totalView: 64,
        status: true
    }
]
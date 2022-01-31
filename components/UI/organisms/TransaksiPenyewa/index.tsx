import React, { useEffect, useState } from 'react'
import { getListPesananPenyewaByJwt } from '../../../utils/api'
import CardTransaksi from '../../molecules/card/CardTransaksi'
import Pagination from '../../molecules/other/Pagination'

const TransaksiPenyewa : React.FC = () => {
    const [dataListPesanan, setDataListPesanan] = useState<any>([])
    const [dataPagination, setDataPagination] = useState<any>([])
    const [currentPage, setCurrentPage] = useState<number>(0) // 0 = 1
    const perPage = 1

    const getLatestListPesanan = async () => {
        const response = await getListPesananPenyewaByJwt()
        if(response.length >= 1) {
            const sorting = response.sort((a : any, b : any) => b.id - a.id)
            setDataListPesanan(sorting)
        }
    }

    useEffect(() => {
        getLatestListPesanan()
    }, [])

    useEffect(() => {
        if(dataListPesanan.length > perPage) {
            const sliceData = dataListPesanan.slice(currentPage * perPage, currentPage <= 0 ? perPage : (perPage * currentPage) + perPage)
            setDataPagination(sliceData)
        }
        if(dataListPesanan.length === 1) setDataPagination(dataListPesanan)
    }, [dataListPesanan, currentPage])

    console.log(dataListPesanan)
    return (
        <div>
            <ul className='list-none mt-4'>
                {dataPagination.length >= 1 && dataPagination.map((data : any) => (
                    <li className='mb-3'>
                        <CardTransaksi
                            orderId={data.id}
                            statusTransaksi={data.statusPemesanan}
                            totalPembayaran={data.hargaTotalDurasi + data.hargaKurir}
                            urlDetail={`/detail-transaksi-penyewa/${data.id}`}
                        />
                    </li>
                ))}
            </ul>

            {dataListPesanan.length >= 2 && (<Pagination
                pageCount={dataListPesanan.length/perPage}
                pageRangeDisplayed={1}
                marginPagesDisplayed={2}
                onPageChange={index => setCurrentPage(index.selected)} // 0 = 1
            />)}
        </div>
    )
}

export default TransaksiPenyewa

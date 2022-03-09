import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import { IIklanNearby } from '../../../utils/types'
import HeadingWithUrl from '../../molecules/heading/HeadingWithUrl'
import CardIklanFullImage from '../../molecules/card/CardIklanFullImage'

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
};

const IklanNearby : React.FC<IIklanNearby> = ({ classes, billing, totalShow = 8, dataIklan }) => {
  const [dataFiltered, setDataFiltered] = useState<any>([])
  console.log('data iklan: ', dataIklan)
  console.log('billing: ', billing)

  useEffect(() => {
    if(billing && dataIklan) {
      const fil = dataIklan.filter(data => {
        return data.kabupaten.toLowerCase().indexOf(billing.kabupaten.toLowerCase()) > -1 && data.statusIklan == true
      })

      const slicing = fil.length >= 1 && fil.slice(0, totalShow) || []
      setDataFiltered(slicing)
    }
  }, [billing, dataIklan])

    return (
        <div className={classes}>
            <HeadingWithUrl
                title='Didekat Anda'
                classes='mb-3'
            />

            {(dataFiltered.length >= 1) && (<Carousel
                responsive={responsive}
                showDots={false}
                arrows={false}
                ssr={true}
            >
              {(dataFiltered.length >= 1)
              && dataFiltered.slice(0, totalShow).filter((data : any) => {
                return data.kabupaten.toLowerCase().indexOf(billing.kabupaten.toLowerCase()) > -1 && data.statusIklan == true
              }).map((data : any, i : any) => (
                <div className='px-2' key={i}>
                  <CardIklanFullImage
                    image={data.thumbnail.url}
                    title={data.judul}
                    pricePerDay={data.pricePerDay}
                    location={{
                      kecamatan: data.kecamatan,
                      kabupaten: data.kabupaten,
                      provinsi: data.provinsi
                    }}
                    id={data.id}
                  />
                </div>
              ))}
            </Carousel>)}

            {dataFiltered.length <= 0 && (
              <p className='text-center py-2 text-gray-500'>iklan didaerah anda tidak ditemukan</p>
            )}
        </div>
    )
}

export default IklanNearby

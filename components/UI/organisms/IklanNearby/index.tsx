import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import { IIklanNearby } from '../../../utils/types'
import HeadingWithUrl from '../../molecules/heading/HeadingWithUrl'
import CardIklanFullImage from '../../molecules/card/CardIklanFullImage'
import { apiGetAllIklan } from '../../../utils/api'

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

const IklanNearby : React.FC<IIklanNearby> = ({ classes, billing, totalShow = 8 }) => {
  const [dataIklan, setDataIklan] = useState<Array<any> | undefined>()

  useEffect(() => {
    const getListIklan = async () : Promise<void> => {
      const response : any = await apiGetAllIklan()
      setDataIklan(response)
    }
    getListIklan()
  }, [])

    return (
        <div className={classes}>
            <HeadingWithUrl
                title='Didekat Anda'
                classes='mb-3'
            />

            <Carousel
                responsive={responsive}
                showDots={false}
                arrows={false}
                ssr={true}
            >
              {dataIklan
              ? dataIklan.slice(0, totalShow).filter(data => {
                return data.kabupaten.toLowerCase().indexOf(billing.kabupaten) > -1
                && data.provinsi.toLowerCase().indexOf(billing.provinsi) > -1
                && data.statusIklan == true
              }).map((data, i) => (
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
              ))
            : (
              <div></div>
            )}
            </Carousel>
        </div>
    )
}

export default IklanNearby

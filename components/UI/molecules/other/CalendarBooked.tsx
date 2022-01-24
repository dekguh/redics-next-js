import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

const CalendarBooked : React.FC<{
    dateBooked?: any
}> = ({ dateBooked }) => {
    const [startDate, setStartDate] = useState<any>(new Date());

    return (
        <div className='flex flex-row flex-nowrap justify-center'>
            {dateBooked && (<DatePicker
                selected={startDate}
                onChange={(date : any) => setStartDate(date)}
                highlightDates={[
                    {
                        'booked-date-css': dateBooked
                    }
                ]}
                inline
            />)}
            {!dateBooked && (<DatePicker
                selected={startDate}
                onChange={(date : any) => setStartDate(date)}
                inline
            />)}
        </div>
    )
};

export default CalendarBooked

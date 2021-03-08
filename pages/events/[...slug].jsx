import React, {Fragment} from 'react'
import {useRouter} from 'next/router'

import {getFilteredEvents} from '../../dummy-data'
import EventList from '../../components/events/EventList'
import ResultTitle from '../../components/results-title/results-title'

const FilteredEventsPage = () => {

    const router = useRouter()

    const filteredData = router.query.slug
    
    if(!filteredData){
        return (
            <div className="centerElement">
                <p className="center">Loading...</p>
            </div>
        )
    }
    
    const [filteredYear, filteredMonth] = filteredData

    const filteredEvents = getFilteredEvents({
        
        year: +filteredYear,
        month: +filteredMonth
    })

    if(!filteredEvents || filteredEvents.length ===0){

        return (
            <div className="centerElement">
                <p className="center">No Events Found</p>
            </div>
        )
    }

    const date = new Date(+filteredYear, +filteredMonth -1)

    return (
        <Fragment>
            <ResultTitle date={date}/>
            <EventList items={filteredEvents}/>
        </Fragment>
    )
}

export default FilteredEventsPage

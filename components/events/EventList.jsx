import React from 'react'

import Styles from './EventList.module.css'
import EventItem from './EventItem'

const EventList = ({items}) => {
    return (
        <ul className={Styles.list}>
           {items.map(event=><EventItem key={event.id} {...event} />)} 
        </ul>
    )
}

export default EventList

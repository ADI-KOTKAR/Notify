import {events_url} from '../config/rest_config'

export async function getEvents() {
    try {
        let events = await fetch(`${events_url}`)
        
        let result = await events.json()
        events = null

        return result.events

    } catch (error) {
        throw error
    }
}
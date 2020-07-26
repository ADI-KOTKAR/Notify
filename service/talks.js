import {talks_url} from '../config/rest_config'

export async function getTalks() {
    try {
        let talks = await fetch(`${talks_url}`)
        
        let result = await talks.json()
        study = null

        return result.talks

    } catch (error) {
        throw error
    }
}
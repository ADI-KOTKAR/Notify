import {jobs_url} from '../config/rest_config'

export async function getJobs() {
    try {
        let jobs = await fetch(`${jobs_url}`)
        
        let result = await jobs.json()
        jobs = null

        return result.jobs

    } catch (error) {
        throw error
    }
}
import {study_url} from '../config/rest_config'

export async function getStudy() {
    try {
        let study = await fetch(`${study_url}`)
        
        let result = await study.json()
        study = null

        return result.study

    } catch (error) {
        throw error
    }
}
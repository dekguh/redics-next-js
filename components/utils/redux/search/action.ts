import { AnyAction } from 'redux'

export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT'
export const UPDATE_SEARCH_PROVINSI = 'UPDATE_SEARCH_PROVINSI'
export const UPDATE_SEARCH_KABUPATEN = 'UPDATE_SEARCH_KABUPATEN'
export const UPDATE_SEARCH_KECAMATAN = 'UPDATE_SEARCH_KECAMATAN'

export function updateSearchTextAction(text: string) : AnyAction {
    return {
        type: UPDATE_SEARCH_TEXT,
        payload: text
    }
}

export function updateSearchProvinsiAction(text: string) : AnyAction {
    return {
        type: UPDATE_SEARCH_PROVINSI,
        payload: text
    }
}

export function updateSearchKabupatenAction(text: string) : AnyAction {
    return {
        type: UPDATE_SEARCH_KABUPATEN,
        payload: text
    }
}

export function updateSearchKecamatanAction(text: string) : AnyAction {
    return {
        type: UPDATE_SEARCH_KECAMATAN,
        payload: text
    }
}
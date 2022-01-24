export const UPDATE_PESANAN_IKLAN_ID = 'UPDATE_PESANAN_IKLAN_ID'

export const updatePesananIklanIdAct = (id: number | null) => {
    return {
        type: UPDATE_PESANAN_IKLAN_ID,
        payload: id
    }
}
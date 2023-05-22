import qs from 'qs'

export const getUrlSearchParams = (): Object => qs.parse(window.location.search, { ignoreQueryPrefix: true })


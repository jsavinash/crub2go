

import RestApiConfig from './restApiConfig';

const page = (params: any) => RestApiConfig.post('static_pages', params);

export const PageRestService = {
    page
}
export type PageRestServiceType = typeof PageRestService;

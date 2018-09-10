import RestApiConfig from './restApiConfig'
const listFAQ = () => RestApiConfig.get('faq');
export const FAQRestService = {
    listFAQ,
}
export type FAQRestServiceType = typeof FAQRestService

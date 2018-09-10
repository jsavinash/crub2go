import apisauce from 'apisauce'

const restApiConfig = apisauce.create({
    baseURL: 'http://curb2go.projectspreview.net/WS/',
    headers: {
        'Cache-Control': 'no-cache',
        'APIKEY': 'APIKEY',
        'APIVERSION': 1.0,
        'Content-Type': 'multipart/form-data',
        'AUTHTOKEN': '68eca6812431dfe2449a879d1e8b0827'
    },
    timeout: 10000,
})

export default restApiConfig;

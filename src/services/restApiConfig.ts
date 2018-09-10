import apisauce from 'apisauce'

const restApiConfig = apisauce.create({
    baseURL: 'http://curb2go.projectspreview.net/WS/',
    headers: {
        'Cache-Control': 'no-cache',
        'APIKEY': 'APIKEY',
        'APIVERSION': 1.0,
        'Content-Type': 'multipart/form-data',
        'AUTHTOKEN': 'f59eef3a8d22cac4f44ae8bf393ff920'
    },
    timeout: 10000,
})

export default restApiConfig;

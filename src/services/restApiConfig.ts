import apisauce from 'apisauce'

const restApiConfig = apisauce.create({
    baseURL: 'http://curb2go.projectspreview.net/WS/',
    headers: {
        'Cache-Control': 'no-cache',
        'APIKEY': 'APIKEY',
        'APIVERSION': 1.0,
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer daaf4128d0f9545f3f44cd78fc06d65f`
    },    
    timeout: 10000,
})

export default restApiConfig;

import apisauce from 'apisauce';
import Config from 'react-native-config';

const restApiConfig = apisauce.create({
    baseURL: 'http://curb2go.projectspreview.net/WS/',
    headers: {
        'Cache-Control': 'no-cache',
        'APIKEY': 'APIKEY',
        'APIVERSION': 1.0,
        'Content-Type': 'multipart/form-data'
    },
    timeout: 10000,
})

export default restApiConfig;

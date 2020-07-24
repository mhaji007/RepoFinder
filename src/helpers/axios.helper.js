// Helper function to make a request cancelable
import axios from 'axios';

const cancelConfig = {
    request: null,
    cancelToken: null
}

// config is the regular axios config (containg baseUrl and auth)
// axiosGetCancelable merges this regular config with the cancel config
async function axiosGetCancelable(url, config) {
    
    if (cancelConfig.request) {

            cancelConfig.request.cancel('canceled');

        }

    // Save the request
    cancelConfig.request = axios.CancelToken.source();
    // Save the cancel token
    cancelConfig.cancelToken = cancelConfig.request.token
    // Merge the cancel config with the regular config
    Object.assign(cancelConfig, config);

    try {
        const res = await axios.get(url, cancelConfig);
        return res;
        
    } catch (error) {
        if(error.message !=='canceled') {
            throw error;
        }
    }



}

export {axiosGetCancelable};
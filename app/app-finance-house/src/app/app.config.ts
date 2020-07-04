export const APP_CONFIG  = {
    apiUrl: 'http://localhost:3000',
    externalsApis: {
        hgBrasil: {
            apiUrl: 'https://api.hgbrasil.com/finance',
            localStorageAddress: 'externalsApis-hgBrasil-key',
            key: localStorage.getItem('externalsApis-hgBrasil-key')
        }
    }
};


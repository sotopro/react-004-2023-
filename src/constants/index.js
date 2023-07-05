export const BASE_URL = 'https://6499986179fbe9bcf83f91ca.mockapi.io';

export const API_URLS = {
    PRODUCTS: {
        url: `${BASE_URL}/produtcs`,
        config: {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
        }
    },
    CATEGORIES: {
        url: `${BASE_URL}/categories`,
        config: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    }
}
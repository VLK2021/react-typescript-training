const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';

const urls = {
    users: {
        base: users,
        byID: (id: number): string => `${users}/${id}`
    }
}

export {
    baseURL,
    urls
}
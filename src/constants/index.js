const env = process.env.NODE_ENV == 'production';

export const signinUrl = env ? 'http://188.226.153.11:4000/users/signin' : 'http://127.0.0.1:4000/users/signin';
export const apiUrl = env ? 'http://188.226.153.11:4000/api' : 'http://127.0.0.1:4000/api';

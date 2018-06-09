const env = process.env.NODE_ENV == 'production';

export const socketUrl = process.env.NODE_ENV !== 'production' ? 'ws://localhost:3000' : 'ws://194.58.122.82:80';
export const signinUrl = 'http://146.185.128.182:4000/users/signin';
export const apiUrl = 'http://146.185.128.182:4000/api';

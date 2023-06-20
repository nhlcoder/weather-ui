import { CreateUser, Home, UpdateUser, UserDetail, UserList, Weather } from '~/Pages';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/weather', component: Weather },
];

const privateRoutes = [
    { path: '/userlist', component: UserList },
    { path: '/createuser', component: CreateUser },
    { path: '/updateuser/:id', component: UpdateUser },
    { path: '/userdetail/:id', component: UserDetail },
];

export { publicRoutes, privateRoutes };

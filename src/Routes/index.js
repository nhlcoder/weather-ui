import { Home, Weather } from "~/Pages";

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/weather', component: Weather}
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

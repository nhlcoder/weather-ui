import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { privateRoutes, publicRoutes } from './Routes';
import { Main } from './Layouts';
import { Login } from './Components';

const storage = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    },
};

function App() {
    const Layout = Main;
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
            <Routes>
                {privateRoutes.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={<Layout>{storage.get('isLogin') ? <Page /> : <Login />}</Layout>}
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;

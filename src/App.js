import { Fragment } from 'react';

import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes/index.js';
import { LayoutDefault } from '~/layouts';

function App() {
    return (
        <>
            <Routes>
                {publicRoutes.map((route, index) => {
                    let LayoutElement = LayoutDefault;
                    if (route.layout) {
                        LayoutElement = route.layout;
                    } else if (route.layout === null) {
                        LayoutElement = Fragment;
                    }
                    const PageElement = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <LayoutElement>
                                    <PageElement />
                                </LayoutElement>
                            }
                        />
                    );
                })}
            </Routes>
        </>
    );
}
export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './Routes';
import { DefaultLayout } from './components/Layouts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
                key={index}
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

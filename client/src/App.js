import Main from './components/Main';
import NotFound from './components/NotFound';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route exact path="/*" element={<NotFound />}/>
          <Route exact path="/" element={<Main />}/>
        </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;

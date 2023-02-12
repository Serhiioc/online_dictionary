
import styles from './App.module.css';
import Main from './containers/Main';
import AddedWords from './containers/AddedNewWords';
import Audit from './containers/Audit';
import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'


function App() {
  return (

    <Provider store = {store}>
      <BrowserRouter>
        <div className={styles.app}>
          <h1 className= {styles.title}> Онлайн словник</h1>
          <nav className= {styles.nav}>
            <Link className= {styles.link} to = '/online_dictionary'> Головна </Link>
            <Link className= {styles.link} to = '/add-words'> Додавання слів </Link>
            <Link className= {styles.link} to = '/audit'> Перевірка </Link>
          </nav>

          <Routes>
            <Route examp path='/online_dictionary'  element={<Main/>} />
            <Route examp path='/add-words'  element={<AddedWords/>} />
            <Route examp path='/audit'  element={<Audit/>} />
          </Routes>

        </div>
      </BrowserRouter>
    </Provider>
  
  );
}

export default App;

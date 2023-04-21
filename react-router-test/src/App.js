import './App.css';
import { Route, Routes } from 'react-router-dom';

import { DataProvider } from './context/DataContext';

// 페이지 import
import Layout from './page/Layout';
import Home from './page/Home';
import StoryList from './page/StoryList';
import Story from './page/Story';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/storylist' element={<StoryList />}>
              <Route path='/storylist/:id' element={<Story />} />
            </Route>
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;

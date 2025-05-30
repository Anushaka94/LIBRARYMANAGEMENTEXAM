
import { Route, Routes } from 'react-router-dom';
import './App.css'
import AddAuthor from './assets/components/Author';
import MatchingNavbar from './assets/components/NavbarComponent';
import AuthorManager from './assets/components/Showauthor';
import AddCategory from './assets/components/Categories';
import CategoryList from './assets/components/Showcatogery';

function App() {
  return (
    <div>
      <MatchingNavbar />
      <Routes>
        <Route path='/Author'element={<AddAuthor/>}></Route>   
        <Route path='/Showauthor' element={<AuthorManager />}></Route>  
        <Route path='/Categories' element={<AddCategory />}></Route>  
         <Route path='/Showcatogery' element={<CategoryList />}></Route>  
         

         CategoryList
      </Routes>
    </div>
  );
}

export default App
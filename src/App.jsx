import './App.css'

//react
import { useEffect, useState } from 'react';

//axios
import axios from 'axios';

//d&dSpells API
const spellsAPI = 'https://www.dnd5eapi.co/api/spells'

//router
import { Routes, Route, useNavigate } from 'react-router-dom';

//components
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

//pages
import HomePage from './Pages/HomePage/HomePage';
import SpellList from './Pages/SpellList/SpellList';
import SpellBookList from './Pages/SpellBookList/SpellBookList';
import AddSpellBook from './Pages/AddSpellBook/AddSpellBook';



function App() {
  //spells state
  const [ spells, setSpells ] = useState([]);
  //all spells info
  const [ completeSpells, setCompleteSpells ] = useState([]);

  const getAllSpells = async () => {
    return axios
      .get(spellsAPI)
      .then((response) => setSpells(response.data.results))
      .catch((error) => console.log(error))
  }

  const getAllSpellsInfo = async () => {
    try {
      const promises = spells.map((spell) => {
        return axios
          .get(`${spellsAPI}/${spell.index}`)
      });
      const spellsInfo = await Promise.all(promises);
      setCompleteSpells(spellsInfo.map((response) => response.data));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllSpells()
  }, []);

  useEffect(() => {
    if(spells.length > 0) {
      getAllSpellsInfo();
    }
  }, [spells]);

  //sidebar
  const [ showSidebar, setShowSidebar ] = useState(false);
  //created spellbooks
  const [ createdSpellbooks, setCreatedSpellbooks ] = useState([]);
  const navigate = useNavigate();

  const addSpellbook = (spellbook) => {
    if (createdSpellbooks.length === 0) {
      setCreatedSpellbooks([spellbook]);
    } else {
      setCreatedSpellbooks((prevSpellbooks) => [...prevSpellbooks, spellbook]);
    }
    console.log("Spellbook added:", spellbook);
    navigate('/spellbook-list');
  }

  return (
    <div className='app'>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} />
      <div className='main-container'>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/spell-list' element={<SpellList spells={completeSpells} />} />
          <Route 
            path='/spellbook-list' 
            element={
              <SpellBookList
                setCreatedSpellbooks={setCreatedSpellbooks}
                createdSpellbooks={createdSpellbooks}
              />
            } 
          />
          <Route 
            path='/add-spellbook' 
            element={
              <AddSpellBook
                createdSpellbooks={createdSpellbooks}
                addSpellbook={addSpellbook} 
                spells={completeSpells} 
              />
            } 
          />
        </Routes>
      </div>
      <Footer />
    </div>
    
  )
}

export default App

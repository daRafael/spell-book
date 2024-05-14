import './AddSpellBook.css'

import { useState } from 'react'

//components
import CreateSpellbook from '../../components/CreateSpellbook/CreateSpellbook';

export default function AddSpellBook ({ addSpellbook, spells }) {
  const [ showCreateSpellbook, setShowCreateSpellbook] = useState(false);

  
  return (
    <>
    <div className='add-book-main-container'>
      <div className='add-book-title'>
        Create Your Spell Book
      </div>
      <div className='add-book-container'>
        <div className='add-book'>
          <div 
            onClick={() => {setShowCreateSpellbook(!showCreateSpellbook)}}    
            className='btn-add-book'
          >
            +
          </div>
        </div>
      </div>
    </div>
    
    <CreateSpellbook
      addSpellbook={addSpellbook}
      setShowCreateSpellbook={setShowCreateSpellbook} 
      showCreateSpellbook={showCreateSpellbook} 
      spells={spells} 
    /> 

    </>
  )
}
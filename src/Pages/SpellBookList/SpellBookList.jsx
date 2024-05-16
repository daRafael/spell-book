import './SpellBookList.css'
//react
import { useState } from 'react'
//components
import SpellbookInspect from '../../components/SpellbookInspect/SpellbookInspect';
import EditSpellbook from '../../components/EditSpellbook/EditSpellbook';


export default function SpellBookList ({ setCreatedSpellbooks, createdSpellbooks, spells, updateSpellbook }) {
  //inspect individual books
  const [ selectedBookId, setSelectedBookId ] = useState(null);
  const [ showInspect, setShowInspect ] = useState(false);
  //edit individual books
  const [ showEditPage, setShowEditPage ] = useState(false)

  const deleteSpellbook = (spellbookId) => {
    const updatedSpellbooks = createdSpellbooks.filter((spellbook) => {
      return spellbook.id !== spellbookId
    })
    setCreatedSpellbooks(updatedSpellbooks);
  } 

  return (
    <>
      <div className='spellbook-list-container'>
        { createdSpellbooks.length > 0 ? (
            createdSpellbooks.map((createdSpellbook) => {
              return(
                <>
                  <div
                    className='spellbook-list-spell-book'
                  >
                    <button
                     onClick={() => {deleteSpellbook(createdSpellbook.id)}} 
                     className='spellbook-list-delete-btn'
                    >
                      X
                    </button>
                    <button
                      className='spellbook-list-inspect-btn'
                      onClick={() => {
                        setShowInspect(!showInspect)
                        setSelectedBookId(createdSpellbook.id)
                      }}  
                    >
                      Inspect
                    </button>
                    <div 
                      className={selectedBookId === createdSpellbook.id && showInspect ? 'spell-book-inspect-container' : 'spell-book-inspect-container hide-spell-book-inspect-container'}
                    >
                      <SpellbookInspect setShowEditPage={setShowEditPage} showEditPage={showEditPage} spellbook={createdSpellbook} />
                    </div>
                  </div>
                  <div
                    className={ showEditPage ? 'edit-spell-book-main-container' : 'edit-spell-book-main-container hide-spell-book-inspect-container'}
                  >
                    
                    <EditSpellbook
                      listOfSpells={spells}
                      setShowEditPage={setShowEditPage} 
                      showEditPage={showEditPage} 
                      initialSpellbook={createdSpellbook}
                      updateSpellbook={updateSpellbook} 
                    />
                  </div>
                </>
              )
              
            })
          )
          :
          (
            <div>
              You have no Spell books
            </div>
          )
        }
      </div>
    </>
  )
}


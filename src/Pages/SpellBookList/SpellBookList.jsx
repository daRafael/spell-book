import './SpellBookList.css'

import { useState } from 'react'

export default function SpellBookList ({ createdSpellbooks }) {
  const [ showInspectBook, setShowInspectBook ] = useState(false)

  return (
    <>
      <div 
        className={showInspectBook ? 'spell-book-inspect-container' : 'spell-book-inspect-container hide-spell-book-inspect-container'}
      >
        <div onClick={()=> {setShowInspectBook(!showInspectBook)}}>
          back
        </div>
      </div>
      <div className='spellbook-list-container'>
        { createdSpellbooks.length > 0 ? (
            createdSpellbooks.map((createdSpellBook, index) => {
              console.log(createdSpellBook)
              return(
                <div
                  key={index}
                  onClick={() => {setShowInspectBook(!showInspectBook)}}  
                  className='spellbook-list-spell-book'
                >
                </div>
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


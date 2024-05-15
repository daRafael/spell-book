import './SpellbookInspect.css'

export default function SpellbookInspect ({ setShowEditPage, showEditPage, spellbook }) {
  
  return (
    <>
      <div className='book-inspect-container-main'>
        <div>
          <button 
            onClick={()=>{setShowEditPage(!showEditPage)}}
          >
            edit
          </button>
        </div>
        <div className='book-inspect-book-spells-container'>
          {Object.values(spellbook.pages).map((spellpage) => (
            <div key={spellpage.level} className='lvl-slots-container'>
              <div className='book-inspect-lvl-title'>{spellpage.level}</div>
              <div className='book-inspect-lvl-slots'>
                {spellpage.spells.map((spell) => (
                  <div key={spell.index} className='book-inspect-spell-slot'>{spell.name}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
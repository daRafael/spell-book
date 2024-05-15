import './EditSpellbook.css'

export default function EditSpellbook({ listOfSpells, setShowEditPage, showEditPage, spellbook }) {
  console.log(spellbook)
  
  return (
    <>
      <div>
        <div>
          <button
            onClick={
              () => { setShowEditPage(!showEditPage) }
            }
          >
            back
          </button>
        </div>
        <div className='edit-book-filters-book-container'>
          <div className='edit-book-filters-container'>
            <div className='edit-book-input-filters-container'>filters</div>
            <div className='create-book-spell-list-container'>
              <div className='create-book-info-indicators'>info indicators</div>
              <div className='create-book-spell-list'>
                {listOfSpells.map((spell) => (
                  <div key={spell.index} className='create-book-spell-card-container'>
                    <div className='create-book-spell-card-info-grid'>
                      <div className='create-book-spell-level-container'>{spell.level === 0 ? 'cantrip' : spell.level}</div>
                      <div className='create-book-spell-name-container'>
                        <div className='spell-name'>{spell.name}</div>
                        <div className='create-book-school-materials-container'>
                          <div>{spell.school.index}</div>
                          <div>&#9702;</div>
                          <div>{spell.components}</div>
                        </div>
                      </div>
                      <div className='add-selected-spell-btn' onClick={() => { addSelectedSpell(spell) }}>+</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='edit-book-selected-spells-container'>
            <div className='all-lvl-slots-container'>
              {spellbook.pages && Object.values(spellbook.pages).map((spellpage) => (
                <div key={spellpage.level} className='lvl-slots-container'>
                  <div className='lvl-title'>{spellpage.level}</div>
                  <div className='lvl-slots'>
                    {spellpage.spells.map((spell) => (
                      <div key={spell.index} className='spell-slot'>{spell.name}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <button>Complete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
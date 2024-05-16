import { useState } from 'react';
import './EditSpellbook.css'

export default function EditSpellbook({ listOfSpells, setShowEditPage, showEditPage, initialSpellbook, updateSpellbook }) {
  const [ spellbook, setSpellbook ] = useState(initialSpellbook)

  const addSelectedSpell = (spell) => {
    const pageLevel = `lvl${spell.level}`;

    const spellExists = spellbook.pages[pageLevel].spells.some(existingSpell => existingSpell.index === spell.index);
    if(spellExists) {
      alert('This spell was already added')
      return;
    }
    const updatedSpellbook = {...spellbook};
    const updatedSpells = [...updatedSpellbook.pages[pageLevel].spells];

    updatedSpells.push(spell);
    updatedSpellbook.pages[pageLevel].spells = updatedSpells;
    setSpellbook(updatedSpellbook);
  }

  const removeSelectedSpell = (spellToRemove) => {
    const pageLevel = `lvl${spellToRemove.level}`;

    const spellIndex = spellbook.pages[pageLevel].spells.findIndex(spell => spell.index === spellToRemove.index);

    const updatedSpellbook = { ...spellbook };
    const updatedSpells = [...updatedSpellbook.pages[pageLevel].spells];

    updatedSpells.splice(spellIndex, 1);
    updatedSpellbook.pages[pageLevel].spells = updatedSpells;

    setSpellbook(updatedSpellbook);
  }
  
  return (
    <>
      <div className='edit-book-filters-list-container'>
        <div
          className='edit-book-back-btn'
          onClick={
            () => { setShowEditPage(!showEditPage) }
          }
        >
          back
        </div>
        <div className='edit-book-filters-container'>
          <div className='edit-book-input-filters-container'>filters</div>
          <div className='edit-book-spell-list-container'>
            <div className='edit-book-info-indicators'>
              <div>
                Level
              </div>
              <div>
                Name
              </div>
              <div>
                Add
              </div>
              <div> {/*PLACEHOLDER FOR CSS GRID*/} </div>
            </div>
            <div className='edit-book-spell-list'>
              {listOfSpells.map((spell) => (
                <div key={spell.index} className='edit-book-spell-card-container'>
                  <div className='edit-book-spell-card-info-grid'>
                    <div className='edit-book-spell-level-container'>{spell.level === 0 ? 'cantrip' : spell.level}</div>
                    <div className='edit-book-spell-name-container'>
                      <div className='spell-name'>{spell.name}</div>
                      <div className='edit-book-school-materials-container'>
                        <div>{spell.school.index}</div>
                        <div>&#9702;</div>
                        <div>{spell.components}</div>
                      </div>
                    </div>
                    <div 
                      className='add-edit-spell-btn' 
                      onClick={() => { addSelectedSpell(spell) }}
                    >
                      +
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='edit-book-selected-spells-container'>
        <div className='edit-book-cover'>
          <div className='edit-book-pages'>
            {spellbook.pages && Object.values(spellbook.pages).map((spellpage) => (
              <div key={spellpage.level} className='edit-book-lvl-spells-container'>
                <div className='lvl-title'>{spellpage.level}</div>
                <div className='lvl-slots'>
                  {spellpage.spells.map((spell) => (
                    <div key={spell.index} className='spell-slot'>
                      <div className='listed-spell-name'>{spell.name}</div>
                      <div
                        className='remove-listed-spell-btn'
                        onClick={() => {removeSelectedSpell(spell)}}
                      >
                        -
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className='complete-book-btn' 
          onClick={() => {
            setShowEditPage(!showEditPage)
            updateSpellbook(spellbook)
          }}
        >
          Complete
        </button>
      </div>
    </>
  )
}
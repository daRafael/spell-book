import './CreateSpellbook.css';
import { useState, useEffect } from 'react';

export default function CreateSpellbook({ createdSpellbooks, addSpellbook, setShowCreateSpellbook, showCreateSpellbook, spells }) {
  const [selectedSpells, setSelectedSpells] = useState([]);
  const [spellbook, setSpellbook] = useState({});

  useEffect(() => {
    const updatedSpellbook = {
      id: createdSpellbooks ? createdSpellbooks.length + 1 : 1,
      pages: {}
    };
    for (let i = 0; i <= 9; i++) {
      updatedSpellbook.pages[`lvl${i}`] = {
        level: i === 0 ? 'Cantrips' : `Level ${i}`,
        spells: selectedSpells.filter(spell => spell.level === i)
      };
    }
    setSpellbook(updatedSpellbook);
  }, [selectedSpells, createdSpellbooks]);

  const addSelectedSpell = (spell) => {
    if (selectedSpells.some(listedSpell => listedSpell.index === spell.index)) {
      alert('This spell was already added');
      return;
    }
    setSelectedSpells([...selectedSpells, spell]);
  }

  return (
    <>
      <div className='create-book-filters-container'>
        <div onClick={() => { setShowCreateSpellbook(!showCreateSpellbook) }} className='create-book-back-btn'>back</div>
        <div className='create-book-input-filters-container'>filters</div>
        <div className='create-book-spell-list-container'>
          <div className='create-book-info-indicators'>info indicators</div>
          <div className='create-book-spell-list'>
            {spells.map((spell) => (
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
      <div className='create-book-selected-spells-container'>
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
          <button onClick={() => { addSpellbook(spellbook) }}>Create Spellbook</button>
        </div>
      </div>
    </>
  );
}
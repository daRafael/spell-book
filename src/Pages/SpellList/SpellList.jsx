import './SpellList.css'

export default function SpellList ({ spells }) {

  return (
    <div className='spell-list-container'>
      <div className='spell-listing-filters'>
        <div>
          filters
        </div>
      </div>
      <div className='spell-listing-container'>
        <div className='spell-card-info-indicators'>
          <div>
            LEVEL
          </div>
          <div>
            NAME
          </div>
          <div>
            CASTING TIME
          </div>
          <div>
            DURATION
          </div>
          <div>
            RANGE
          </div>
          <div>
            ATK/SAVE
          </div>
          <div>
            DAMAGE/EFFECT
          </div>
        </div>
        {
          spells.map((spell) => {
            return (
              <div key={spell.index} className='spell-card-container'>
                <div className='spell-card-info-grid'>
                  <div className='spell-level-container'>
                    {spell.level === 0 ? 'cantrip' : spell.level}
                  </div>
                  <div className='spell-name-container'>
                    <div className='spell-name'>
                      {spell.name}
                    </div>
                    <div className='school-materials-container'>
                      <div>
                        {spell.school.index}
                      </div>
                      <div>
                        &#9702;
                      </div>
                      <div>
                        {spell.components}
                      </div>
                    </div>
                  </div>
                  <div className='casting-time-container'>
                    {spell.casting_time}
                  </div>
                  <div className='duration-container'>
                    {spell.duration}
                  </div>
                  <div className='range-container'>
                    {spell.range}
                  </div>
                  {spell.dc ?
                    <div className='dc-container'>
                      {spell.dc.dc_type.name}
                    </div>
                    :
                    <div>
                      {/* Placeholder for DC column */}
                    </div>
                  }
                  {spell.damage && spell.damage.damage_type ?
                    <div className='dmg-container'>
                      {spell.damage.damage_type.name}
                    </div>
                    :
                    <div>
                      {/* PlaceHolder for DMG column */}
                    </div>
                  }
                  <div>
                    +
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
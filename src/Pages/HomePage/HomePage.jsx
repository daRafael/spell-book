import { Link } from 'react-router-dom'

import './HomePage.css'

export default function HomePage() {
  return (
    <div className='homepage'>
      <div className='hero-page-title-btn-container'>
        <div className='hero-page-title'>
          Create a Spellbook for all your Dungeons & Dragons characters!
        </div>
        <div className='hero-page-button-container'>
          <Link to='/add-spellbook'>
          <button className='hero-page-btn'>Click here!</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
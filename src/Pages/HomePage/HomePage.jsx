import { Link } from 'react-router-dom'

import './HomePage.css'

export default function HomePage() {
  return (
    <div className='homepage'>
      <Link to='/add-spellbook'>
        <button>Create Your Spellbook</button>
      </Link>
    </div>
  )
}
import './CreateSpellbook.css'

export default function CreateSpellbook ({ showCreateSpellbook }) {
  return (
    <div 
      className={
        showCreateSpellbook ? 'create-book-main-container' : 'create-book-main-container hide-create-book-main-container' 
      }
    >
      
    </div>
  )
}
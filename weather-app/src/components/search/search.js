import React from 'react'
import './search.css'
import svgSearch from '../../assets/search-icon.svg'

function Search() {
  return (
    <div className='searchContainer'>
        <input type="text" placeholder="Location" className="search-input" />
    </div>
  )
}

export default Search
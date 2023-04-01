import React, { useState } from 'react'
import { useGlobalContext } from './context'

const Search = () => {
    const {query, setQuery, isError} = useGlobalContext();
    console.log(query)
  return (
    <section className='search-section'>
        <h2>Search Your Favourite Movie</h2>
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <div>
                <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
            </div>
        </form>
        <div className="card-error">
            <p>{isError.show && isError.msg}</p>
        </div>
    </section>
  )
}

export default Search
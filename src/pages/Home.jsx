import React from 'react'
import WordListGroup from '../components/WordCards/WordListGroup'

const Home = () => {
  return (
    <div className='page-container'>
      <header className="app-header">
        <h1>Szókártyák – Angol-Magyar Tanulás</h1>
        <p>Tanulj angol szavakat magyar fordításukkal szókártyák segítségével!</p>
      </header>
      <WordListGroup />
    </div>
  )
}

export default Home
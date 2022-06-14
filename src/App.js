import './App.css';
import { useEffect, useState } from 'react'
import DisplayCards from './DisplayCards';

export default function App() {
  let [data, setData] = useState({ villagers: [] })
  let [search, setSearch] = useState('')
  let [faves, setFaves] = useState([])
  useEffect(() => {
    fetch('http://acnhapi.com/v1/villagers/')
      .then(response => response.json())
      .then((rdata) => {
        rdata = Object.values(rdata)
        setData({ villagers: rdata })
      })
  }, [])
  const handleClick = (villager) => {
    if (!faves.includes(villager)) { setFaves([...faves, villager]) }
  }
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const getFilteredVillagers = () => {
    const searchTerm = search.toLowerCase()
    return data.villagers.filter(v => {
      let lowerCaseName = v.name['name-USen'].toLowerCase()
      return lowerCaseName.includes(searchTerm)
    })
  }
  return (
    <div className="App">
      <div>
        <label htmlFor="villager-search">Search for a villager:</label>
        <input
          id="villager-search"
          type="text"
          value={search}
          onChange={handleChange}
        />
      </div>
      <div>
        <h1>Favorite Villagers:</h1>
        <DisplayCards villagers={faves} handleClick={handleClick} />
      </div>
      <div>
        <h1>Search:</h1>
        <DisplayCards villagers={getFilteredVillagers()} handleClick={handleClick} favVillagers={faves} />
      </div>
    </div>
  )
}
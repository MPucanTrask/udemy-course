import React, {useEffect, useState} from "react";
import SearchBox from "./components/SearchBox";
import './components/card-list.styles.css'
import './App.css';

function App() {
    const [monsters, setMonsters] = useState([])
    const [searchField, setSearchField] = useState('')

    const handleChange = event => {
      setSearchField(event.target.value)
    }

    const filteredMonsters = monsters.filter(monster =>
         monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => {
              setMonsters(users)
          })
    }, [])

    return (
        <div className="App">
            <SearchBox placeholder="Search monsters.." handleChange={handleChange} />
            <ul className="card-list">
                {
                    filteredMonsters.map(monster => (
                        <li key={monster.id} className="card">
                            <div>{monster.name}</div>
                            <img
                                src={`https://robohash.org/${monster.id}?set=set?&size=180x180`}
                                alt={monster.name}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default App;

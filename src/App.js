import React, {useEffect, useState} from "react";
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";
import './App.css'

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
            <CardList monsters={filteredMonsters} />
        </div>
    );
}

export default App;

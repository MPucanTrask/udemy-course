import React from "react"
import './card.styles.scss'

const Card = ({monsters}) => (
    monsters.map(monster => (
        <li key={monster.id} className="card">
            <div>{monster.name}</div>
            <img
                src={`https://robohash.org/${monster.id}?set=set?&size=180x180`}
                alt={monster.name}
            />
        </li>
    ))
)


export default Card
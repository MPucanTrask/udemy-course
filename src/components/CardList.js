import React from "react";
import './card-list.styles.css'

const CardList = ({ monsters }) => (
    <ul className="card-list">
        {
            monsters.map(monster => (
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
)

export default CardList;
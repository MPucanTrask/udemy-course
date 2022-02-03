import React from "react";
import Card from './Card'
import './card-list.styles.scss'

const CardList = ({ monsters }) => (
    <ul className="card-list">
        <Card monsters={monsters} />
    </ul>
)

export default CardList
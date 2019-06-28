import React from "react"
import Card from "./card"

const CardsContainer = ({ data }) => {
    let cards = data.edges.map((item, key) => {
        let beverage = item.node.frontmatter
        return <Card key={key} {...beverage} />
    })
    return (
        <div>
            { cards }
        </div>
    )
}

export default CardsContainer
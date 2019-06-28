import React from "react"
import { StaticQuery, graphql } from "gatsby"
import CardsContainer from "./cardsContainer"

const Beverages = () => (
    <div>
        <StaticQuery
            query={graphql`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            id
                            frontmatter {
                                title
                                image
                                desc
                                sprice
                                rprice
                            }
                        }
                    }
                }
            }`}
            render={data => (
                <CardsContainer data={data.allMarkdownRemark} />
            )}
        />
    </div>
)

export default Beverages
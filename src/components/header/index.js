import React from "react"

const Header = ({ imgUrl, text }) => (
    <header>
        <div style={{
            width: `100%`,
            height: `228px`,
            backgroundImage: `url(${ imgUrl })`,
            backgroundSize: `cover`,
            backgroundPosition: `center center`,
            marginTop: `27px`,
            backgroundColor: `#532D6D`
        }}/>
        <h1>{ text }</h1>
    </header>
)

export default Header
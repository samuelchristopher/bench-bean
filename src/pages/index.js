import React from "react"
import Nav from "../components/nav"
import Footer from "../components/footer"
import "./global.css"
import Header from "../components/header";


export default () => (
    <div className="page">
        <Nav />
        <Header 
            text="Our wonderful blends are bound to delight your taste buds."
            imgUrl="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        />
        <Footer />
    </div>
)



import React from "react"
import Nav from "../components/nav"
import Footer from "../components/footer"
import "./global.css"
import Header from "../components/header"

const About = () => (
    <div className="page">
        <Nav />
        <Header
            text="We are a bunch of lovely people serving you lovely coffee."
            imgUrl="https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
        <Footer />
    </div>
)

export default About
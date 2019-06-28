import React from "react"
import styles from "./beverage.module.css"

export default class Card extends React.Component {
    constructor() {
        super()

        this.state = {
            isOpen: false
        }

        this.toggleDesc = this.toggleDesc.bind(this)
    }

    toggleDesc() {
        let { isOpen } = this.state
        this.setState({
            isOpen: !isOpen
        })
    }

    render() {
        let { title, image, rprice, sprice, desc } = this.props
        let { isOpen } = this.state
        return (
            <div className={styles.card}>
                <div className={styles.card__image} 
                    style={{
                        backgroundImage: `url(${image})`
                    }}/>
                <div className={styles.cards__content}>
                    <div className={styles.initial}>
                        <div className={styles.initial__left}>
                            <h2 className={styles.initial__title}>{ title }</h2>
                            <p className={styles.initial__price}>
                                ${ sprice } (S) / ${ rprice } (R)
                            </p>
                        </div>
                        <div onClick={this.toggleDesc} className={
                            isOpen ? `${styles.initial__right} ${styles.initial__right__up}` : `${styles.initial__right}`
                        }>^</div>
                    </div>
                    <div className={isOpen ? styles.desc__show : styles.desc__hide}>
                        { desc }
                    </div>
                </div>
            </div>
        )
    }
}
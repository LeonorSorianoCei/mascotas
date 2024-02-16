import { useState } from 'react'
import "./MenuResponsive.css";

const MenuResponsive = () => {

    const [isOpen, setIsOpen] = useState(false);

    const items = [
        {
            titulo: "Acceder",
            href: "#"
        },
        {
            titulo: "Contacto",
            href: "#"
        },
    ]

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }


    return (
        <header className="Header">
            <h1>🐶</h1>
            <nav className={`Header-nav ${isOpen ? "isVisible": ""}`} >
                <ul className="Header-ul">
                    {items.map((item, index) => (
                     <Li key={index} {...item}/>
                        )
                    )}
                </ul>
            </nav>

            <button onClick={toggleMenu} className='Header-btn'>
                🏠
            </button>
        </header>
        


    )
}


const Li = ({titulo, href}) => {
    return (
        <li className="Header-li">
            <a className='enlaces' href={href}>{titulo}</a>
        </li>
    )
}



export default MenuResponsive;
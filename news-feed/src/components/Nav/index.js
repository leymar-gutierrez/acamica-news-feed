import React from 'react'
import { Navbar, NavbarStart, NavbarItem } from 'bloomer'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Filters from '../Filters'

const Nav = styled(Navbar)`
    border: solid 1px #00D1B2;
    background: #99ffef !important;
    display: flex;
    font-weight: 500;
    justify-content: center;
    margin: 0;
`
const LinkSpace = styled(Link)`
    margin-right: 30px;
`

const categories = [
    { name: 'politica', text: 'Política' },
    { name: 'internacionales', text: 'Internacionales' },
    { name: 'tecnologia', text: 'Tecnología' },
    { name: 'espectaculos', text: 'Espectáculos' },
    { name: 'deportes', text: 'Deportes' }
  ]

const NavApp = () => {
    
        return (
            <Nav>
                <NavbarStart style= {{ margin:0 }}>
                    <LinkSpace to="/">
                        <NavbarItem>Home</NavbarItem>
                    </LinkSpace>
                    {categories.map(category => (
                        <LinkSpace to={`/categoria/${category.name}`} key={category.name}>
                            <NavbarItem>{category.text}</NavbarItem>
                        </LinkSpace>
                    ))}
                    <Filters/>
                </NavbarStart>
            </Nav>

        )
    
}

export default NavApp;
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'


import './Navbar.css'

import SearchBar from './SearchBar'


export default function Navbar() {
    const { color, changeColor } = useTheme()

    return (
        <div className="navbar" style={{ background: color }}>
            <nav onClick={() => changeColor('black')}>
                <Link to="/" className="brand" >
                    <h1>Cooking Wise</h1>
                </Link>
                <SearchBar />
                <Link to="/create">
                    Create Recipe
                </Link>
            </nav>
        </div>
    )
}

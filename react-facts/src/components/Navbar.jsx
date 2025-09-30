import reactLogo from '../assets/react.svg'
import '../App.css'

export default function() {
    return (
        <header>
            <nav className="nav-bar">
                <img src={reactLogo} className="logo react" alt="React logo" />
                <span>ReactFacts</span>
            </nav>
        </header>
        
    )
}
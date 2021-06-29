import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <nav>
            <ul>
                <li> <Link to="/">Since Time Immemorial</Link> </li>
                <li> <Link to="/blog">The Year of the Rat</Link> </li>
                <li> <Link to="/about">This thing of ours</Link> </li>
                <li> <Link to="/projects">Current Projects</Link> </li>
            </ul>
        </nav>
    )
}
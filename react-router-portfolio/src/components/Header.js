import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <nav>
            <ul>
                <li> <Link to="/">Homepage</Link> </li>
                <li> <Link to="/blog">Blog</Link> </li>
                <li> <Link to="/about">About me</Link> </li>
                <li> <Link to="/projects">Current Projects</Link> </li>
            </ul>
        </nav>
    )
}
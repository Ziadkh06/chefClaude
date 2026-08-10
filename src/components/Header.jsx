import logo from '../assets/chefClaudeLogo.png'

export default function Header(){
    return(
        <header>
            <img src={logo} alt="Chef Claude Logo" />
            <h1>Chef Claude</h1>
        </header>
    )
}
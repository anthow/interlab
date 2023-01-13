import React from "react"
import { Link } from "gatsby"




const NavbarInterlab = () => {

    return (
<nav>
    <ul className="flex text-orange-interra font-bold text-lg  flex-col md:flex-row justify-center gap-5 underline md:gap-10 ">
        <li> <Link to="#">L'interlab</Link></li>
        <li> <Link to="/entrepreneurs">Nos entrepreneurs</Link></li>
        <li> <Link to="/experts">Nos Experts</Link></li>
        <li> <Link to="/partenaires">Nos partenaires</Link></li>

    </ul>
</nav>
            

    )
}

export default NavbarInterlab

import React from "react"
import { Link } from "gatsby"




const NavbarInterlab = () => {

    return (
<nav>
    <ul className="flex text-orange-interra font-bold text-lg w-full  flex-col md:flex-row justify-center gap-5 underline md:gap-10 ">
        <li className="whitespace-nowrap w-max"> <Link to="/entrepreneurs">Nos entrepreneurs</Link></li>
        <li className="whitespace-nowrap w-max" > <Link to="/experts">Nos Experts</Link></li>
        <li className=" whitespace-nowrap w-max"> <Link to="/coachs">Nos coachs</Link></li>
        <li className="whitespace-nowrap w-max"> <Link to="/partenaires">Nos partenaires</Link></li>

    </ul>
</nav>
            

    )
}

export default NavbarInterlab

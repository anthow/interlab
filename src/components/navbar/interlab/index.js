import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

const NavbarInterlab = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulMenu {
        rubrique1
        rubrique2
        rubrique3
        rubrique4
      }
    }
  `);
  return (
    <nav>
      <ul className="flex text-orange-interra font-bold text-lg w-full  flex-col md:flex-row justify-center gap-5 underline md:gap-10 ">
        <li className="whitespace-nowrap w-max">
          {" "}
          <Link to="/entrepreneurs">{data.contentfulMenu.rubrique1}</Link>
        </li>
        <li className=" whitespace-nowrap w-max">
          {" "}
          <Link to="/coachs">{data.contentfulMenu.rubrique2}</Link>
        </li>
        <li className="whitespace-nowrap w-max">
          {" "}
          <Link to="/experts">{data.contentfulMenu.rubrique3}</Link>
        </li>
        <li className="whitespace-nowrap w-max">
          {" "}
          <Link to="/partenaires">{data.contentfulMenu.rubrique4}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarInterlab;

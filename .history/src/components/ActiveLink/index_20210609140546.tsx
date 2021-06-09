import { Link } from "prismic-dom";
import { ReactElement } from "react";

interface ActiveLinkProps{
    children: ReactElement;
    activeClassName: string;
}

export function ActiveLink(){
    return(
        <Link>
        </Link>
    )
}
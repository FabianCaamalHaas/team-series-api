import { useEffect } from "react"
import { NavbarApp } from "./NavbarApp";

interface Props {
  tittle: string,
  children: JSX.Element,
}

export const Layout = ({ tittle, children }: Props) => {

  useEffect((): any => {
    document.title = tittle
    return () => null;
  }, [ tittle ]);

  return (
    <>
      <NavbarApp />
      <div className="p-2" >
        { children }
      </div>
    </>
  )
}

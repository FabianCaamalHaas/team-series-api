import { useEffect } from "react"
import { Navbar } from "./Navbar";

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
      <Navbar />
      <div className="p-2" >
        { children }
      </div>
    </>
  )
}

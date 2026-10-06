import { Link } from "react-router";

const navLink = [
  {
    label: "Homepage",
    url: "/",
  }, 
  {
    label: "Chi Siamo",
    url: "/chi-siamo",
  }, 
  {
    label: "Prodotti",
    url: "/prodotti",
  }
]

export default function AppHeader() {
  return (
    <div>
    <header className="pt-3 d-flex bg-warning text-black px-4 py-2 mb-5 justify-content-between">
       <Link className="text-decoration-none" to="/">
       <h2 className="h4 text-black">React Router</h2>
       </Link>
       <ul className="d-flex list-unstyled flex-row gap-3">
         {navLink.map(link => {
           const {label, url} = link
           return (
             <li className="nav-item" key={label} >
             <Link className="text-black fw-semibold text-uppercase text-decoration-none" to={url}>{label}</Link>
           </li>
           )
         })}
       </ul>
    </header>
    </div>
  )
}
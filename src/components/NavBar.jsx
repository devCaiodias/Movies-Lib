import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

import './Navbar.css'

const NavBar = () => {
  const [search, setSearch] = useState("")
  const navigation = useNavigate()
  
  const handleSubmite = (e) => {
    e.preventDefault();
    
    if (!search) {
      return
    }
    else{
      navigation(`/search?q=${search}`);
      setSearch("")
    }
  }

  return (
    <div>
          <nav id='navbar'>
              <h2>
                <Link to='/'>
                    <BiCameraMovie /> Movies Lib
                </Link>
              </h2>
              <form onSubmit={handleSubmite}>
                <input type="text" placeholder="Search for a movie" onChange={(e) => setSearch(e.target.value)} value={search} />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
              </form>
          </nav>
    </div>
  )
}

export default NavBar

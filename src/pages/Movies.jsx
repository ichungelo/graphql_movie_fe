import React from "react"
import { useHistory } from "react-router-dom"
import MovieList from "../components/MovieList"
import Navbar from "../components/Navbar"

const Movies = ()=> {
  const history = useHistory()
  const token = localStorage.getItem("TOKEN")

  if (!token) {
    localStorage.clear()
    history.replace("/")
  }
  
  return (
    <div className="bg-[#9BC3BF]">
      <Navbar button="Logout"/>
      <MovieList/>
    </div>
  )
}

export default Movies
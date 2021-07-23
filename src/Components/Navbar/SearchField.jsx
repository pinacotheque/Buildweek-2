import styles from "./Navbar.module.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { BACKEND_URL } from "../../env.js"

const SearchField = (props) => {
  const [people, setPeople] = useState(null)

  useEffect(() => {
    fetchPeople()
  }, [])

  const fetchPeople = async () => {
    const result = await fetch(BACKEND_URL + "/profiles")
    if (!result.error) {
      const data = await result.json()
      setPeople(data)
    } else {
      console.log("error with fetching people")
    }
  }

  return (
    <div className={styles.searchField}>
      {people &&
        people
          .filter((person) =>
            (person.name + person.surname)
              .toLowerCase()
              .includes(props.query.toLowerCase())
          )
          .map((person) => <SearchFieldCard reset={props.reset} person={person} />)}
    </div>
  )
}

export default SearchField

const SearchFieldCard = (props) => {
  return (
    <Link to={`/in/${props.person._id}`} onClick={props.reset}>
      <div className={`${styles.searchCard} d-flex align-items-center `}>
        <img
          src={props.person.image}
          onError={(e) =>
            (e.target.src =
              "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png")
          }
          alt=""
        />
        <div>
          {props.person.name} {props.person.surname}
          <span>{props.person.title}</span>
        </div>
      </div>
    </Link>
  )
}

import { useState, useEffect } from "react"
import { BACKEND_URL } from "../../../env.js"
import SidePeople from "./SidePeople"

const SidePeopleBar = (props) => {
  const cardLimits = [4, 10]

  const [people, setPeople] = useState([])
  const [peopleCards, setPeopleCards] = useState([])

  useEffect(() => {
    fetchPeople()
  }, [props.refresh])

  useEffect(() => {
    people.length >= cardLimits.reduce((a, b) => a + b) && randomPeople(cardLimits)
  }, [people])

  const randomPeople = (limits) => {
    const nums = []
    const random = limits.map((limit) => {
      const randPeople = []
      while (randPeople.length < limit) {
        const randNum = Math.floor(Math.random() * people.length)
        if (!nums.includes(randNum)) {
          nums.push(randNum)
          randPeople.push(people[randNum])
        }
      }
      return randPeople
    })
    setPeopleCards(random)
  }

  const fetchPeople = async () => {
    const response = await fetch(BACKEND_URL + "/profiles")
    if (response.ok) {
      const data = await response.json()
      const something = data.filter(
        (person) =>
          person.name !== "" &&
          person.surname !== "" &&
          person.title &&
          person.image !== "" &&
          person.image !==
            "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" &&
          person._id !== localStorage.getItem("myId")
      )
      setPeople(Array.from(something))
    } else {
      console.log("error with fetching people")
    }
  }

  return (
    <>
      <SidePeople title="People Also Viewed" top people={peopleCards[0]} />
      <SidePeople title="People you may know" people={peopleCards[1]} />
    </>
  )
}

export default SidePeopleBar

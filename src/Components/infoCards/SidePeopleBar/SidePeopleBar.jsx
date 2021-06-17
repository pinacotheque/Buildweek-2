import { useState, useEffect } from "react"
import { getProfiles } from "../../../Lib/fetch"
import SidePeople from "./SidePeople"

const SidePeopleBar = (props) => {

    const cardLimits = [4, 10]

    const [people, setPeople] = useState([])
    const [peopleCards, setPeopleCards] = useState([])

    useEffect(() => {
        fetchPeople()
    }, [])

    useEffect(() => {
        people.length >= cardLimits.reduce((a, b) => a+b) && randomPeople(cardLimits)
    }, [people])

    const randomPeople = (limits) => {
        const nums = []
        const random = limits.map(limit => {
            const randPeople = []
            while(randPeople.length < limit) {
                const randNum = Math.floor(Math.random() * people.length)
                if(!(nums.includes(randNum))){
                    nums.push(randNum)
                    randPeople.push(people[randNum])
                }
            }
            return randPeople
        })
        setPeopleCards(random)
    }

    const fetchPeople = async () => {
        const response = await getProfiles()
        if(!response.error) {
            setPeople(response.data)
        } else {
            console.log('error with fetching people')
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
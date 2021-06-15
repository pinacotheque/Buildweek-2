import { useState, useEffect } from "react"
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
        const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4NzVhN2MxOTMwNTAwMTU4NzE1NDAiLCJpYXQiOjE2MjM3NTAwNTYsImV4cCI6MTYyNDk1OTY1Nn0.ZeW3I1JMXwRusAN2loy3hyW4wUtcT-s_Rwc7TjVXPew"
            }
        })
        if(response.ok) {
            const data = await response.json()
            setPeople(data)
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
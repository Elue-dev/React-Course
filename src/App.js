import Card from "./Components/Card";
import CardSet from "./Components/CardSet";
import Classes from "./Components/Classes";
import Counter from "./Components/Counter";
import EventAndState from "./Components/EventAndState";
import NewCard from "./Components/NewCard";
import SimpleEvents from "./Components/SimpleEvents";
import StateInAction from "./Components/StateInAction";
import StateInFunctions from "./Components/StateInFunctions";
import StatePractice from "./Components/StatePractice";
import Title from "./Components/Title";

console.log(NewCard)

// const data = [
//   {
//       language: "HTML",
//       level: "85%"
//   },
//   {
//       language: "CSS",
//       level: "80%"
//   },
//   {
//       language: "JavaScript",
//       level: "65%"
//   },
//   {
//       language: "React",
//       level: "50%"
//   }
// ]

const data = [
  {
      course: "Conversion Tracking for Digital Marketing",
      instructor: "Mark Meyerson",
      image: "rxt.jpg",
  },
  {
      course: "The Complete Digital Marketing Course - 12 Courses in 1",
      instructor: "Rob Percival, Daragh Walsh, Codestars by Rob Percival",
      image: "rxterr.png",
  },
  {
      course: "Digital Marketing Masterclass - 23 Courses in 1",
      instructor: "Phil Ebiner, Diego Davila, Video School Online Inc",
      image: "rxt.jpg",
  },
  {
      course: "The Complete Digital Marketing Guide - 17 Courses in 1",
      instructor: "Robin & Jesper",
      image: "rxterr.png",
  },
]

 {/* Turn data into array (functional)*/}
//  let cards = data.map ((course, index) => {
//     return <Card key= {index} data = {course} />
//  })
//  console.log(cards)


 {/* Turn data into array (classes)*/}
//  let classCards = data.map ((course, index) => {
//   return <Classes key = {index} data = {course} />
// })
// console.log(classCards)


function App() {
  return (
    <div className="App">
      <Title/>
      {/* <Card name = {data[0].course} instructor = {data[0].instructor} image = {data[0].image}/>
      <Card name = {data[1].course} instructor = {data[1].instructor} image = {data[1].image}/>
      <Card name = {data[2].course} instructor = {data[2].instructor} image = {data[2].image}/>
      <Card name = {data[3].course} instructor = {data[3].instructor} image = {data[3].image}/> */}

      {/* Easier way to do the above */}
      {/* <Card data = {data[0]}/>
      <Card data = {data[1]}/>
      <Card data = {data[2]}/>
      <Card data = {data[3]}/> */}

      {/* Using props in classes */}
      {/* <Classes data = {data[0]}/>
      <Classes data = {data[1]}/>
      <Classes data = {data[2]}/>
      <Classes data = {data[3]}/>  */}

      {/* {cards} */}
      {/* {classCards} */}
      {/* <StateInAction name = 'Rob'/> */}
      {/* <SimpleEvents/>*/}
      {/* <EventAndState/> */}
      {/* <StatePractice/> */}
      {/* <Counter/> */}
      {/* <div className = 'row'>
        <CardSet cards = {NewCard}/>
      </div> */}
      <StateInFunctions/>
      
    </div>
  );
}

export default App;

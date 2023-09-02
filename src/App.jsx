import React from "react";
import Note from "./Note";
import TextArea from "./TextArea";

function App() {
  const [notes, setNotes] = React.useState([])
  const [text, setText] = React.useState('')
  const changing = (e) => {
    setText(e.target.value);
  }
  const add = (e) => {
      setNotes(prev => {
        return [...prev, text]
      })
      setText('')
  }
  const enter = (e) => {
    if(e.key==='Enter'){
      setNotes(prev => {
        return [...prev, text]
      })
      setText('')
    }
  }
  const remove = (index) => {
    setNotes([...notes].filter((note) => note !== notes[index]))
    alert("You have completed your task!!!")
  }
  return (

    <section className="bg-slate-800 text-white h-[100vh] flex items-center font-semibold  flex-col">
      <h1 className="text-[40px]">To Do List</h1>
      <TextArea add={add} enter={enter} text={text} changing={changing} />
      <Note remove={remove} notes={notes} />
    </section>
  );
}

export default App;

import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import BlogBody from './Components/blog body/BlogBody';
import QA from './Components/Q & A/QA';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <BlogBody></BlogBody>
      <QA></QA>
    </div>
  )
}


export default App

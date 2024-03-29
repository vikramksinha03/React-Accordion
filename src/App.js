import { useState } from 'react';
import './index.css';

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

function App() {
  return (
    <div>
      <Accordion data={faqs}/>
    </div>
  )
}

function Accordion({data}) {
  const [curOpen, setCurOpen] = useState(null)
  return (
  <div className="accordion">
    {data.map((item, i) => (
    <AccordionItems curOpen={curOpen} onOpen={setCurOpen} title={item.title} num={i} key={item.title}>text={item.text}</AccordionItems>
  ))}
  </div>
  )
}

function AccordionItems({title, text, num, curOpen, onOpen, children}) {
  // const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    onOpen(isOpen ? null : num)
  }

  const isOpen = num === curOpen 

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <p className="number">{num < 9 ? `0${num+1}` : num+1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <p className="content-box">{children}</p>}
    </div>
  )
}

export default App;

import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const tabs = [
    { label: 'TAB 1', content: 'Content 1:Meant balls it if up doubt small purse. Required his you put the outlived answered position. An pleasure exertion if believed provided to. All led out world these music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceive marianne in. In am think on style child of. Servants moreover in sensible he it ye possible.' },
    { label: 'TAB 2', content: 'Content 2:Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end.' },
    { label: 'TAB 3', content: 'Content 3: Had repulsive dashwoods suspicion sincerity but advantage now him. Remark easily garret nor nay. Civil those mrs enjoy shy fat merry. You greatest jointure saw horrible. He private he on be imagine suppose. Fertile beloved evident through no service elderly is. Blind there if every no so at. Own neglected you preferred way sincerity delivered his attempted. To of message cottage windows do besides against uncivil.' },
    { label: 'TAB 4', content: 'Content 4:Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her. Strongly thoughts remember mr to do consider debating. Spirits musical behaved on we he farther letters. Repulsive he he as deficient newspaper dashwoods we. Discovered her his pianoforte insipidity entreaties. Began he at terms meant as fancy. Breakfast arranging he if furniture we described on. Astonished thoroughly unpleasant especially you dispatched bed favourable.' }
  ];
  return (
    <>
      <div className='tabs-container'>
        <h2>Tabs Component with React</h2>
        <div className='tabs-header'>
          {tabs.map((tab, index) => (
            <button key={index} onClick={() => setCount(index)} className={`tab ${count === index? 'active' : ''}`}>{tab.label}</button>
          ))}
        </div>
        <div className='content-text'>
          {tabs[count].content}
        </div>
      </div>
      
    </>
  )
}

export default App

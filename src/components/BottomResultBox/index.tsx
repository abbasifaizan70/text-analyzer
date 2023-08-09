import './index.scss'
import { useState, useEffect } from 'react';

interface BottomResultBoxInterface {
  text: string;
}


const BottomResultBox: React.FC<BottomResultBoxInterface> = ({ text }) => {
  const [bottomResultBar, setBottomResultBar] = useState([
    {
      title: 'Average Reading Time:',
      value: '-',
    },
    {
      title: 'Longest word:',
      value: '-',
    },
  ])

  useEffect(() => {
    const paragraph = text.split('\n').filter(Boolean);
      let LongestWord = '';

    paragraph.forEach(p => {
      const words = p.split(/\s+/);
      words.forEach(word => {
        if (word.length > LongestWord.length) {
          LongestWord = word.replace(/[^a-zA-Z ]/g, "");
        }
      });
    });

    const averageReadingSpeed = 225;
    const words = text.split(/\s+/).filter(Boolean);
    const totalWords = words.length;

    const readingTimeInMinutes = Math.ceil(totalWords / averageReadingSpeed);

    setBottomResultBar([
        {
          title: 'Average Reading Time:',
          value: '~' + readingTimeInMinutes + 'minute',
        },
        {
          title: 'Longest word:',
          value: LongestWord,
        },
    ])
    
  }, [text])
  

  


  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
function userState(arg0: { title: string; value: string; }[]): [any, any] {
  throw new Error('Function not implemented.');
}


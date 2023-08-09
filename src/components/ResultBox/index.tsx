import { useState, useEffect } from 'react';
import './index.scss'
import { pronouns } from '../../data/pronouns';

interface ResultBoxProps {
  text: string;
}

const ResultBox: React.FC<ResultBoxProps> = ({ text }) => {
  
    const [result, setResult] = useState([
    {
      title: 'Words',
      value: 0,
    },
    {
      title: 'Characters',
      value: 0,
    },
    {
      title: 'Sentences',
      value: 0,
    },
    {
      title: 'Paragraphs ',
      value: 0,
    },
    {
      title: 'Pronouns',
      value: 0,
    },
  ]
    )

  useEffect(() => {
    // const wordCount = text.split(/\s+/).filter(Boolean).length;
    const wordCount = text.split(' ').length;
    const sentences = text.split(/[.!?]/).filter(Boolean).length;
    const paragraph = text.split('\n').filter(Boolean).length;
    const characters = text.length;
    const countPronouns = pronouns.reduce((count: number, pronoun: string) => {
      const regex = new RegExp(`\\b${pronoun}\\b`, 'g');
      const matches = text.toLowerCase().match(regex);
      return count + (matches ? matches.length : 0);
    }, 0);

    setResult([
      {
      title: 'Words',
      value: wordCount,
    },
    {
      title: 'Characters',
      value: characters,
    },
    {
      title: 'Sentences',
      value: sentences,
    },
    {
      title: 'Paragraphs ',
      value: paragraph,
    },
    {
      title: 'Pronouns',
      value: countPronouns,
    },
    ])

  }, [text])
  

  

  return (
    <div className="result-bar">
      {result.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox

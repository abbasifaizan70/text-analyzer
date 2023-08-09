import './index.scss'

interface TextAreaProps {
  onTextChange: (newText: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ onTextChange }) => {
  
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    onTextChange(newText)
  }

  return <textarea className="text-area" onChange={handleInputChange} placeholder="Paste your text here..." autoFocus />
}

export default TextArea

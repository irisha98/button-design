import { useState } from 'react'
import './App.css'
import { Button } from './shared/ui/Button/Button'

function App() {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      alert('Форма отправлена!')
    }, 1500)
  }

  return (
    <>
    <Button color="secondary" circle type="button" onClick={handleClick} loading={loading}>
      Отправить
    </Button>
    </>
  )
}

export default App;

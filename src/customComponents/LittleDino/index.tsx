import { useState } from 'react'
import SleepDino from './SleepDino'
import AwakeDino from './AwakeDino'
import { Container, TransparentButton } from './styles'

const LittleDino = () => {
  const [isDinoAwake, setIsDinoAwake] = useState(false)
  const [className, setClassName] = useState('')

  const handleAwakeDino = () => {
    if (isDinoAwake) {
      setIsDinoAwake(false)
    } else if (className === '') {
      setClassName('awakening-dino')
    } else if (className === 'awakening-dino') {
      setIsDinoAwake(true)
      setClassName('')
    }
  }

  return (
    <Container>
      {isDinoAwake ? (
        <TransparentButton onClick={handleAwakeDino}>
          <AwakeDino />
        </TransparentButton>
      ) : (
        <TransparentButton onClick={handleAwakeDino} className={className}>
          <SleepDino />
        </TransparentButton>
      )}
    </Container>
  )
}
export default LittleDino

/*
<>
      {isDinoAwake ? (
        <div>
          <img src={AwakeDino.src} width={300} />
          <button onClick={() => setIsDinoAwake(false)} id="test">
            Clica em mim porra
          </button>
        </div>
      ) : (
        <div>
          <img src={SleepingDino.src} width={300} />
          <button onClick={() => setIsDinoAwake(true)} id="test2">
            Clica em mim caralho
          </button>
        </div>
      )}
    </>
*/

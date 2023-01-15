import SleepingDino from '../../images/dino_dormindo.png'
import AwakeDino from '../../images/dino_acordado.png'
import { useState } from 'react'
import { Container } from './styles'

const LittleDino = () => {
  const [isDinoAwake, setIsDinoAwake] = useState(false)

  return (
    <Container>
      {isDinoAwake ? (
        <img
          src={AwakeDino.src}
          width={300}
          onClick={() => setIsDinoAwake(false)}
          style={{ pointerEvents: 'all' }}
        />
      ) : (
        <img
          src={SleepingDino.src}
          width={300}
          onClick={() => setIsDinoAwake(true)}
          style={{ pointerEvents: 'all' }}
        />
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

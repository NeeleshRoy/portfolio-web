import sage from './sage'
import Planatics from './planatics'
import tts from './tts'
import abt from './abt'

function projects (id) {
  switch (id) {
    case 'sage': {
      return sage()
    }
    case 'planatics': {
      return Planatics()
    }
    case 'tts': {
      return tts()
    }
    case 'abt': {
      return abt()
    }
    default: {
      return 'default'
    }
  }
}

export default projects

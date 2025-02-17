import sage from './sage'
import Planatics from './planatics'
import abt from './abt'
import mirror from './mirror'
import heythere from './heythere';
import brochures from './brochures'

function projects(id) {
  switch (id) {
    case 'sage': {
      return sage()
    }
    case 'planatics': {
      return Planatics()
    }
    case 'abt': {
      return abt()
    }
    case 'mirror': {
      return mirror()
    }
    case 'heythere': {
      return heythere()
    }
    case 'brochures': {
      return brochures()
    }
    default: {
      return 'default'
    }
  }
}

export default projects

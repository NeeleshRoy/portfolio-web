import sage from './sage'

function showLean (id) {
  switch (id) {
    case 'sage': {
      return sage()
    }
    default: {
      return 'default'
    }
  }
}

export default showLean

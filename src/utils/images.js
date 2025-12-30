// Try to auto-import local images using Vite's glob when available.
// If `import.meta.globEager` isn't available in the current environment,
// fall back to explicit imports so the app still runs locally.

import extracciones from '../images/extracciones.jpeg'
import acne from '../images/acne.jpg'
import puntaDiamante from '../images/puntaDiamante.jpg'
import peeling from '../images/peeling.jpg'
import microneedling from '../images/microneedling.jpeg'
import radiofrecuencia from '../images/radiofrecuencia.jpg'
import limpiezaDeEspalda from '../images/limpiezaDeEspalda.jpg'
import hifu from '../images/hifu.png'
import pedicuria from '../images/pedicuria.png'
import manicuria from '../images/manicuria.jpeg'
import depilacion from '../images/depilacion.jpeg'
import depilacionSistemaEspanol from '../images/depilacionSistemaEspanol.jpg'
import perfiladoLaminadoCejas from '../images/perfiladoLaminadoCejas.jpeg'
import espacioDermico from '../images/espacioDermico.jpeg'
import helomasPlantares from '../images/helomas-plantares.jpg'
import ojoDeGallo from '../images/ojo-de-gallo.png'
import pedicuriaEstetica from '../images/pedicuria-estetica.jpg'
import pieDiabetico from '../images/pie-diabetico.png'
import talonesAgrietados from '../images/talones-agrietados.jpg'
import unaEncarnada from '../images/uña-encarnada.jpg'
import exfoliacionCorporal from '../images/exfoliacion-corporal.jpg'
import masajeDescontracturante from '../images/masaje-descontracturante.jpg'
import masajeSedativo from '../images/masaje-sedativo.jpg'

let images = {}

if (typeof import.meta.globEager === 'function') {
  const modules = import.meta.globEager('../images/*.{jpg,jpeg,png,svg}')
  images = Object.fromEntries(
    Object.keys(modules).map((p) => {
      const name = p.replace('../images/', '')
      return [name, modules[p].default]
    })
  )
} else {
  images = {
    'extracciones.jpeg': extracciones,
    'acne.jpg': acne,
    'puntaDiamante.jpg': puntaDiamante,
    'peeling.jpg': peeling,
    'microneedling.jpeg': microneedling,
    'radiofrecuencia.jpg': radiofrecuencia,
    'limpiezaDeEspalda.jpg': limpiezaDeEspalda,
    'hifu.png': hifu,
    'pedicuria.png': pedicuria,
    'manicuria.jpeg': manicuria,
    'depilacion.jpeg': depilacion,
    'depilacionSistemaEspanol.jpg': depilacionSistemaEspanol,
    'perfiladoLaminadoCejas.jpeg': perfiladoLaminadoCejas,
    'espacioDermico.jpeg': espacioDermico,
    'helomas-plantares.jpg': helomasPlantares,
    'ojo-de-gallo.png': ojoDeGallo,
    'pedicuria-estetica.jpg': pedicuriaEstetica,
    'pie-diabetico.png': pieDiabetico,
    'talones-agrietados.jpg': talonesAgrietados,
    'uña-encarnada.jpg': unaEncarnada,
    'exfoliacion-corporal.jpg': exfoliacionCorporal,
    'masaje-descontracturante.jpg': masajeDescontracturante,
    'masaje-sedativo.jpg': masajeSedativo,
    'cosmiatria.png': cosmiatria
  }
}

export { images }
export default images

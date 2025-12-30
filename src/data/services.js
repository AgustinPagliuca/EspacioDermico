// ============================================
// DATOS DE SERVICIOS - ESPACIO DÉRMICO
// Fácil de editar: solo modifica este archivo
// para agregar, quitar o modificar servicios
// ============================================

import { images } from '../utils/images'

export const services = [
  {
    id: 'cosmiatria',
    name: 'Cosmiatría',
    shortDescription: 'Tratamientos faciales profesionales para el cuidado y rejuvenecimiento de tu piel.',
    description: 'La cosmiatría es la especialidad dedicada al cuidado, mantenimiento y embellecimiento de la piel sana. Nuestros tratamientos están diseñados para mejorar la apariencia y salud de tu rostro con técnicas profesionales y productos de alta calidad.',
    icon: 'Sparkles',
    image: images['cosmiatria.png'],
    heroImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=80',
    treatments: [
      {
        id: 'extracciones',
        name: 'Extracciones',
        description: 'Limpieza facial profunda con extracción profesional de impurezas, puntos negros (comedones), miliums. Ideal para mantener la piel libre de obstrucciones.',
        duration: '1:45 hs aprox.',
        image: images['extracciones.jpeg']
      },
      {
        id: 'acne-piel-sensible',
        name: 'Acné y Piel Sensible/Reactiva',
        description: 'Tratamiento especializado para pieles con tendencia acneica, sensibles o reactivas. Utilizamos productos específicos para calmar, equilibrar y tratar la piel sin agredirla.',
        duration: '1:45 hs aprox.',
        image: images['acne.jpg']
      },
      {
        id: 'punta-diamante',
        name: 'Punta de Diamante',
        description: 'Microdermoabrasión con punta de diamante para exfoliar las capas superficiales de la piel, estimular la regeneración celular y mejorar la textura y luminosidad.',
        duration: '60mic min aprox.',
        image: images['puntaDiamante.jpg']
      },
      {
        id: 'peelings',
        name: 'Peelings (Invierno y Verano)',
        description: 'Exfoliación química controlada adaptada a cada estación. Los peelings de invierno son más intensos, mientras que los de verano son suaves y seguros para usar con exposición solar moderada.',
        duration: '60 min aprox.',
        image: images['peeling.jpg']
      },
      {
        id: 'microneedling',
        name: 'Microneedling con Dermapen',
        description: 'Tratamiento de microagujas con diferentes opciones: con hilos de colágeno reabsorbibles para efecto tensor, o con exosomas para máxima regeneración celular.',
        duration: '60-90 min aprox.',
        options: [
          'Con hilos de colágeno reabsorbibles',
          'Con exosomas'
        ],
        image: images['microneedling.jpeg']
      },
      {
        id: 'radiofrecuencia-facial',
        name: 'Radiofrecuencia Facial',
        description: 'Tecnología que estimula la producción de colágeno mediante calor controlado. Ideal para flacidez, arrugas finas y mejorar la firmeza del rostro.',
        duration: '1:30 hs aprox.',
        image: images['radiofrecuencia.jpg']
      },
      {
        id: 'tratamiento-espalda',
        name: 'Tratamiento Integral de Espalda',
        description: 'Limpieza profunda de la zona de espalda. Incluye exfoliación, extracción de impurezas, alta frecuencia, hidratación y cuidado específico para esta zona frecuentemente olvidada.',
        duration: '1:30 hs aprox.',
        image: images['limpiezaDeEspalda.jpg']
      }
    ]
  },
  {
    id: 'hifu',
    name: 'HIFU',
    shortDescription: 'Última tecnología en lifting sin cirugía con ultrasonido focalizado de alta intensidad.',
    description: 'HIFU (High Intensity Focused Ultrasound) es la tecnología más avanzada para el tratamiento del envejecimiento facial sin cirugía. Mediante ultrasonido focalizado, actúa en las capas profundas de la piel estimulando la producción natural de colágeno.',
    icon: 'Zap',
    image: images['hifu.png'],
    heroImage: images['hifu.png'],
    featured: true,
    badge: 'Última Tecnología',
    treatments: [
      {
        id: 'hifu-facial',
        name: 'HIFU Facial Completo',
        description: 'Tratamiento de lifting no invasivo que trata flacidez, arrugas y pérdida de definición del óvalo facial. Resultados progresivos y naturales.',
        duration: '60-90 min aprox.',
        benefits: [
          'Efecto lifting inmediato',
          'Estimula colágeno natural',
          'Sin tiempo de recuperación',
          'Resultados duraderos'
        ],
        image: images['hifu.png']
      }
    ]
  },
  {
    id: 'pedicuria',
    name: 'Pedicuría',
    shortDescription: 'Cuidado integral de tus pies con tratamientos especializados para cada necesidad.',
    description: 'Servicio profesional de pedicuría que va más allá de lo estético. Tratamos diversas afecciones de los pies con técnicas especializadas, brindando salud y bienestar a esta parte tan importante del cuerpo.',
    icon: 'Footprints',
    image: images['pedicuria.png'],
    heroImage: images['pedicuria.png'],
    treatments: [
      {
        id: 'pie-diabetico',
        name: 'Pie Diabético',
        description: 'Cuidado especializado para personas con diabetes. Tratamiento preventivo y curativo con técnicas específicas para evitar complicaciones.',
        duration: '45-60 min aprox.',
        image: images['pie-diabetico.png']
      },
      {
        id: 'unas-encarnadas',
        name: 'Uñas Encarnadas',
        description: 'Tratamiento profesional para uñas encarnadas (onicocriptosis). Alivio del dolor y corrección para evitar recurrencias.',
        duration: '30-45 min aprox.',
        image: images['uña-encarnada.jpg']
      },
      {
        id: 'ojo-de-gallo',
        name: 'Ojo de Gallo',
        description: 'Eliminación de helomas interdigitales (ojo de gallo) que causan molestias al caminar. Tratamiento indoloro con resultados inmediatos.',
        duration: '30 min aprox.',
        image: images['ojo-de-gallo.png']
      },
      {
        id: 'helomas-plantares',
        name: 'Helomas Plantares',
        description: 'Tratamiento de callosidades plantares profundas. Eliminación del núcleo y asesoramiento para prevenir su reaparición.',
        duration: '30-45 min aprox.',
        image: images['helomas-plantares.jpg']
      },
      {
        id: 'talones-agrietados',
        name: 'Talones Agrietados',
        description: 'Tratamiento intensivo para talones secos y agrietados. Incluye exfoliación, hidratación profunda y recomendaciones de cuidado en casa.',
        duration: '45 min aprox.',
        image: images['talones-agrietados.jpg']
      },
      {
        id: 'pedicuria-estetica',
        name: 'Pedicuría Estética',
        description: 'Servicio completo de embellecimiento de pies con esmaltado tradicional o semipermanente a elección.',
        duration: '45-60 min aprox.',
        options: [
          'Esmalte tradicional',
          'Esmalte semipermanente'
        ],
        image: images['pedicuria-estetica.jpg']
      }
    ]
  },
  {
    id: 'manicuria',
    name: 'Manicuría',
    shortDescription: 'Cuidado y embellecimiento de tus manos con esmaltado tradicional.',
    description: 'Servicio profesional de manicuría que cuida la salud de tus uñas mientras las embellece. Trabajamos con productos de alta calidad para lograr un acabado impecable y duradero.',
    icon: 'Hand',
    image: images['manicuria.jpeg'],
    heroImage: images['manicuria.jpeg'],
    treatments: [
      {
        id: 'manicuria-tradicional',
        name: 'Manicuría con Esmalte Tradicional',
        description: 'Servicio completo de manicuría con limado, cutículas, hidratación y esmaltado tradicional en el color de tu elección.',
        duration: '60 min aprox.',
        image: images['manicuria.jpeg']
      }
    ]
  },
  {
    id: 'depilacion',
    name: 'Depilación',
    shortDescription: 'Sistema español con cera de alta calidad. Servicio unisex para todo el cuerpo.',
    description: 'Ofrecemos depilación con sistema español, utilizando cera de alta calidad que respeta la piel mientras elimina el vello de raíz. Servicio unisex disponible para todas las zonas del cuerpo.',
    icon: 'Feather',
    image: images['depilacion.jpeg'],
    heroImage: images['depilacion.jpeg'],
    badge: 'Unisex',
    treatments: [
      {
        id: 'depilacion-cera',
        name: 'Depilación con Sistema Español',
        description: 'Técnica de depilación con cera caliente de alta calidad. El sistema español permite una extracción eficiente del vello con mínimas molestias. Disponible para todas las zonas del cuerpo.',
        duration: 'Variable según zona',
        zones: [
          'Rostro',
          'Axilas', 
          'Brazos',
          'Piernas completas',
          'Media pierna',
          'Bikini',
          'Espalda',
          'Pecho'
        ],
        image: images['depilacionSistemaEspanol.jpg']
      }
    ]
  },
  {
    id: 'cejas',
    name: 'Perfilado y Laminado de Cejas',
    shortDescription: 'Dale forma y definición a tus cejas con técnicas profesionales.',
    description: 'Servicio especializado en diseño de cejas. El perfilado define la forma ideal según tu rostro, mientras que el laminado aporta volumen y fijación duradera para cejas perfectas.',
    icon: 'Eye',
    image: images['perfiladoLaminadoCejas.jpeg'],
    heroImage: images['perfiladoLaminadoCejas.jpeg'],
    treatments: [
      {
        id: 'perfilado-cejas',
        name: 'Perfilado y Laminado de Cejas',
        description: 'Diseño personalizado de cejas según la morfología de tu rostro. Incluye depilación con pinza y/o cera para lograr la forma perfecta.',
        duration: '45 min aprox.',
        image: images['perfiladoLaminadoCejas.jpeg']
      }
    ]
  },
  {
    id: 'exfoliacion-corporal',
    name: 'Exfoliación Corporal',
    shortDescription: 'Tratamiento especializado para pelos encarnados y foliculitis.',
    description: 'Exfoliación corporal profesional diseñada específicamente para tratar y prevenir los pelos encarnados (foliculitis). Ideal para realizar antes o después de la depilación.',
    icon: 'Sparkle',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80',
    treatments: [
      {
        id: 'exfoliacion-foliculitis',
        name: 'Exfoliación para Foliculitis',
        description: 'Tratamiento exfoliante corporal que elimina células muertas, libera pelos enquistados y previene la foliculitis. Incluye hidratación post-tratamiento.',
        duration: '45-60 min aprox.',
        benefits: [
          'Elimina pelos encarnados',
          'Previene foliculitis',
          'Piel suave y renovada',
          'Mejora la absorción de hidratantes'
        ],
        image: images['exfoliacion-corporal.jpg']
      }
    ]
  },
  {
    id: 'masajes',
    name: 'Masajes',
    shortDescription: 'Masajes terapéuticos para aliviar tensiones y promover la relajación.',
    description: 'Servicios de masoterapia para el bienestar físico y mental. Ofrecemos masajes descontracturantes para aliviar tensiones musculares y masajes sedativos para una relajación profunda.',
    icon: 'Heart',
    image: images['masaje-descontracturante.jpg'],
    heroImage: images['masaje-descontracturante.jpg'],
    treatments: [
      {
        id: 'masaje-descontracturante',
        name: 'Masaje Descontracturante',
        description: 'Masaje terapéutico de intensidad media-alta enfocado en liberar tensiones musculares, contracturas y nudos. Ideal para personas con dolores de espalda, cuello y hombros.',
        duration: '50-60 min aprox.',
        image: images['masaje-descontracturante.jpg']
      },
      {
        id: 'masaje-sedativo',
        name: 'Masaje Sedativo',
        description: 'Masaje suave y envolvente diseñado para inducir un estado de relajación profunda. Reduce el estrés, calma el sistema nervioso y mejora la calidad del sueño.',
        duration: '50-60 min aprox.',
        image: images['masaje-sedativo.jpg']
      }
    ]
  }
]

// ============================================
// INFORMACIÓN DE CONTACTO
// ============================================

export const contactInfo = {
  phone: '11-6507-2537',
  whatsapp: 'https://wa.me/message/LTCMUGTXAYKSO1',
  email: 'ely.cosmiatra@gmail.com',
  address: 'Dr. Carbone 3748, Santos Lugares',
  hours: {
    weekdays: 'Martes a Viernes de 9 a 19 hs',
    saturday: 'Sábados de 9 a 16 hs'
  },
  social: {
    facebook: 'https://facebook.com/espaciodermico',
    instagram: 'https://www.instagram.com/elycosmiatra/',
    whatsapp: 'https://wa.me/message/LTCMUGTXAYKSO1'
  }
}

// ============================================
// FRASES/QUOTES PARA LA PÁGINA
// ============================================

export const quotes = [
  {
    text: 'La belleza comienza en el momento en que decides ser tú misma.',
    author: 'Coco Chanel'
  },
  {
    text: 'Cuida tu cuerpo, es el único lugar que tienes para vivir.',
    author: 'Jim Rohn'
  },
  {
    text: 'La piel es el reflejo de nuestra salud interior.',
    author: 'Espacio Dérmico'
  },
  {
    text: 'No hay cosmético para la belleza como la felicidad.',
    author: 'Lady Blessington'
  }
]

// ============================================
// SLIDES PARA EL CAROUSEL DEL HOME
// ============================================

export const heroSlides = [
  {
    id: 1,
    title: 'Cosmiatría Profesional',
    subtitle: 'Tratamientos faciales personalizados para cada tipo de piel',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1400&q=80',
    link: '/servicios/cosmiatria',
    cta: 'Conocer más'
  },
  {
    id: 2,
    title: 'HIFU - Lifting sin Cirugía',
    subtitle: 'La última tecnología en rejuvenecimiento facial no invasivo',
    image: images['hifu.png'],
    link: '/servicios/hifu',
    cta: 'Descubrir',
    badge: 'Última Tecnología'
  },
  {
    id: 3,
    title: 'Bienestar Integral',
    subtitle: 'Masajes terapéuticos para cuerpo y mente',
    image: images['masaje-sedativo.jpg'],
    link: '/servicios/masajes',
    cta: 'Conocer más'
  },
  {
    id: 4,
    title: 'Cuidado de Manos y Pies',
    subtitle: 'Manicuría y pedicuría con atención profesional',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1400&q=80',
    link: '/servicios/manicuria',
    cta: 'Ver servicios'
  }
]

// ============================================
// INFORMACIÓN SOBRE MÍ (placeholder)
// ============================================

export const aboutInfo = {
  name: 'Espacio Dérmico',
  tagline: 'Estética & Bienestar',
  description: `Con años de experiencia en el cuidado de la piel y el bienestar integral, 
  Espacio Dérmico nació con la misión de ofrecer tratamientos profesionales en un ambiente 
  cálido y personalizado. Cada servicio está pensado para brindarte no solo resultados 
  visibles, sino también un momento de relajación y cuidado personal.`,
  values: [
    {
      title: 'Profesionalismo',
      description: 'Formación continua y técnicas actualizadas'
    },
    {
      title: 'Personalización',
      description: 'Cada tratamiento adaptado a tus necesidades'
    },
    {
      title: 'Calidad',
      description: 'Productos y equipamiento de primera línea'
    },
    {
      title: 'Calidez',
      description: 'Un espacio donde te sentirás como en casa'
    }
  ]
}

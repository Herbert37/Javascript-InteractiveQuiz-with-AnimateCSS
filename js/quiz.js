const questions = [
    /* ---Unit 1--- */
    // Pregunta 1
    {
        question: 'Se refiere a los aparatos y equipos dañados, descartados, obsoletos o en desuso que utilizan electricidad o una fuente de energía para su funcionamiento:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Electrodomésticos.',
            },
            {
                isCorrect: true,
                option: 'b. Residuos de Aparatos Eléctricos y Electrónicos.',
            },
            {
                isCorrect: false,
                option: 'c. Desechos Peligrosos.',
            },
            {
                isCorrect: false,
                option: 'd. Residuos Peligrosos.',
            }
        ],
        bubbleAnswer: '¡Correcto! En esta definición se incluyen equipos electrónicos de consumo como las computadoras, hasta electrodomésticos y celulares que ya no tienen utilidad alguna para quien los posee.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad III: Los residuos de aparatos eléctricos y electrónicos.',
        character: {
            src: 'src/refri.png',
            width: '182',
            height: '325',
        }
    },
    // Pregunta 2
    {
        question: 'Son aquellos materiales no peligrosos, que son descartados por la actividad del ser humano o generados por la naturaleza:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Desechos Peligrosos.',
            },
            {
                isCorrect: false,
                option: 'b. Residuos Peligrosos.',
            },
            {
                isCorrect: false,
                option: 'c. Residuos de Aparatos Eléctricos y Electrónicos.',
            },
            {
                isCorrect: true,
                option: 'd. Desechos Sólidos',
            }
        ],
        bubbleAnswer: '¡Correcto! Los Desechos Sólidos al no tener una utilidad inmediata para quien actualmente los posee, se transforman en indeseables.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad III: Los residuos de aparatos eléctricos y electrónicos.',
        character: {
            src: 'src/refri.png',
            width: '182',
            height: '325',
        }
    },
    // Pregunta 3
    {
        question: 'Cualquier material sin uso directo o descartado permanentemente que por su actividad química o por sus características corrosivas, reactivas, inflamables, tóxicas, explosivas, combustión espontánea, oxidante, infecciosas, bioacumulativas, ecotóxicas o radioactivas:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Electrodomésticos.',
            },
            {
                isCorrect: false,
                option: 'b. Desechos Sólidos.',
            },
            {
                isCorrect: false,
                option: 'c. Materiales inflamables.',
            },
            {
                isCorrect: true,
                option: 'd. Desechos Peligrosos',
            }
        ],
        bubbleAnswer: '¡Correcto! Los Desechos Peligrosos ocasionan peligro y ponen en riesgo la salud humana o el ambiente, ya sea por sí solo o al contacto con otro desecho.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad III: Los residuos de aparatos eléctricos y electrónicos.',
        character: {
            src: 'src/refri.png',
            width: '182',
            height: '325',
        }
    },
    // Pregunta 4
    {
        question: 'Material que reviste características peligrosas, que después de servir a un propósito específico todavía conserva propiedades físicas y químicas útiles:',
        questionAsked: false,
        options:[
            {
                isCorrect: true,
                option: 'a. Residuos Peligrosos.',
            },
            {
                isCorrect: false,
                option: 'b. Residuos de Aparatos Eléctricos y Electrónicos.',
            },
            {
                isCorrect: false,
                option: 'c. Desechos Sólidos.',
            },
            {
                isCorrect: false,
                option: 'd. Electrodomésticos.',
            }
        ],
        bubbleAnswer: '¡Correcto! Los Residuos Peligrosos puede ser reusados, reciclados, regenerados o aprovechados con los mismos propósitos u otros.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad III: Los residuos de aparatos eléctricos y electrónicos.',
        character: {
            src: 'src/refri.png',
            width: '182',
            height: '325',
        }
    },
    // Pregunta 5
    {
        question: 'Donar el equipo a una organización social, centros escolares o a cualquier otra persona o entidad que lo necesite es un ejemplo de:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Reducción.',
            },
            {
                isCorrect: false,
                option: 'b. Reciclar.',
            },
            {
                isCorrect: true,
                option: 'c. Reusar.',
            },
            {
                isCorrect: false,
                option: 'd. Ahorrar.',
            }
        ],
        bubbleAnswer: '¡Correcto! Al donar aparatos y equipo eléctrico y electrónico aumentas su tiempo de uso, esto se traduce en una notable reducción en la contaminación.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad III: Los residuos de aparatos eléctricos y electrónicos.',
        character: {
            src: 'src/refri.png',
            width: '182',
            height: '325',
        }
    },
    // Pregunta 6
    {
        question: 'Verificar las especificaciones técnicas de una computadora al momento de compararla para cubrir las necesidades a largo plazo es un ejemplo de:',
        questionAsked: false,
        options:[
            {
                isCorrect: true,
                option: 'a. Reducción.',
            },
            {
                isCorrect: false,
                option: 'b. Reciclar.',
            },
            {
                isCorrect: false,
                option: 'c. Reusar.',
            },
            {
                isCorrect: false,
                option: 'd. Ahorrar.',
            }
        ],
        bubbleAnswer: '¡Correcto! Entre mas tiempo utilices los equipos eléctricos y electrónicos, mejoras tu buen manejo de residuos.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad III: Los residuos de aparatos eléctricos y electrónicos.',
        character: {
            src: 'src/refri.png',
            width: '182',
            height: '325',
        }
    },
    // Pregunta 7
    {
        question: 'Proceso que sufre un material o producto para ser reincorporado a un ciclo de producción o de consumo, ya sea el mismo en que fue generado u otro diferente:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Refrigerante.',
            },
            {
                isCorrect: false,
                option: 'b. Reutilización.',
            },
            {
                isCorrect: true,
                option: 'c. Reciclaje.',
            },
            {
                isCorrect: false,
                option: 'd. Aprovechamiento.',
            }
        ],
        bubbleAnswer: '¡Correcto! El objetivo del reciclaje es convertir residuos en nuevos productos o en materia prima para su posterior utilización.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad III: Los residuos de aparatos eléctricos y electrónicos.',
        character: {
            src: 'src/refri.png',
            width: '182',
            height: '325',
        }
    },
    // Pregunta 8
    {
        question: 'Separar y entregar materiales a personas autorizadas para que dichos materiales puedan ser utilizados en el proceso de fabricación de nuevos equipos y ahorrar así recursos naturales y energía. El enunciado anterior es ejemplo de:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Reducción.',
            },
            {
                isCorrect: true,
                option: 'b. Reciclar.',
            },
            {
                isCorrect: false,
                option: 'c. Reusar.',
            },
            {
                isCorrect: false,
                option: 'd. Ahorrar.',
            }
        ],
        bubbleAnswer: '¡Correcto! Esta solo es uno de las muchas medidas que podemos tomar para reciclar y poder hacer la diferencia, mejorar al mundo desde casa, ¿Genial, no?',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad III: Los residuos de aparatos eléctricos y electrónicos.',
        character: {
            src: 'src/refri.png',
            width: '182',
            height: '325',
        }
    },
    // Pregunta 9
    {
        question: 'Todo proceso industrial y/o manual, cuyo objeto sea la recuperación o transformación de los recursos contenidos en los desechos:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Reciclaje.',
            },
            {
                isCorrect: false,
                option: 'b. Refrigerante.',
            },
            {
                isCorrect: false,
                option: 'c. Reutilización.',
            },
            {
                isCorrect: true,
                option: 'd. Aprovechamiento.',
            }
        ],
        bubbleAnswer: '¡Correcto! Los procesos y equipos adecuados pueden crear productos nuevos usando las partes de otros equipos informáticos y de telecomunicaciones evitando la sobreacumulación de residuos.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad III: Los residuos de aparatos eléctricos y electrónicos.',
        character: {
            src: 'src/refri.png',
            width: '182',
            height: '325',
        }
    },
    // Pregunta 10
    {
        question: 'Capacidad de un producto o envase para ser usado en más de una ocasión de la misma forma y para el mismo propósito para el cual fue fabricado:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Reciclaje.',
            },
            {
                isCorrect: false,
                option: 'b. Refrigerante.',
            },
            {
                isCorrect: true,
                option: 'c. Reutilización.',
            },
            {
                isCorrect: false,
                option: 'd. Aprovechamiento.',
            }
        ],
        bubbleAnswer: '¡Correcto! Debemos enviar a reciclaje solo los equipo que alcanzaron su tiempo de vida util.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad III: Los residuos de aparatos eléctricos y electrónicos.',
        character: {
            src: 'src/refri.png',
            width: '182',
            height: '325',
        }
    },
    /* ---Unit 2--- */
    // Pregunta 11
    {
        question: 'Sistema de elementos bióticos, abióticos, socioeconómicos, culturales y estéticos que interactúan entre sí, con los individuos y con la comunidad en la que viven, determinando su relación y sobrevivencia, en el tiempo y el espacio:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Factores ambientales.',
            },
            {
                isCorrect: false,
                option: 'b. Factores bióticos.',
            },
            {
                isCorrect: false,
                option: 'c. Factores abióticos.',
            },
            {
                isCorrect: true,
                option: 'd. Medio ambiente.',
            }
        ],
        bubbleAnswer: '¡Correcto! Cuidar el medio ambiente es algo que debemos aprender desde pequeños para proteger el mundo en el que vivimos.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad I: El medio ambiente.',
        character: {
            src: 'src/monitor.png',
            width: '435',
            height: '309',
        }
    },
    // Pregunta 12
    {
        question: 'Son todos aquellos elementos cuya interrelación condiciona la dinámica de la vida en el planeta:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Medio ambiente.',
            },
            {
                isCorrect: true,
                option: 'b. Factores ambientales.',
            },
            {
                isCorrect: false,
                option: 'c. Factores bióticos.',
            },
            {
                isCorrect: false,
                option: 'd. Factores abióticos.',
            }
        ],
        bubbleAnswer: '¡Correcto! Existen dos factores ambientales las cuales son: los factores bióticos y abióticos',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad I: El medio ambiente.',
        character: {
            src: 'src/monitor.png',
            width: '435',
            height: '309',
        }
    },
    // Pregunta 13
    {
        question: 'Son todos aquellos seres vivos y sus interacciones entre ellos mismos:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Factores ambientales.',
            },
            {
                isCorrect: false,
                option: 'b. Medio ambiente.',
            },
            {
                isCorrect: true,
                option: 'c. Factores bióticos.',
            },
            {
                isCorrect: false,
                option: 'd. Factores abióticos.',
            }
        ],
        bubbleAnswer: '¡Correcto! Los factores bióticos son los seres vivos, pero siempre considerados en un entramado de relaciones entre flora y fauna.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad I: El medio ambiente.',
        character: {
            src: 'src/monitor.png',
            width: '435',
            height: '309',
        }
    },
    // Pregunta 14
    {
        question: 'Son los elementos que no poseen vida pero que son fundamentales para que los organismos vivos puedan desarrollarse:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Factores bióticos.',
            },
            {
                isCorrect: true,
                option: 'b. Factores abióticos.',
            },
            {
                isCorrect: false,
                option: 'c. Factores ambientales.',
            },
            {
                isCorrect: false,
                option: 'd. Medio ambiente.',
            }
        ],
        bubbleAnswer: '¡Correcto! Mientras que los animales y las plantas son factores bióticos, el pH del suelo, el clima y la composición del suelo son factores abióticos.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad I: El medio ambiente.',
        character: {
            src: 'src/monitor.png',
            width: '435',
            height: '309',
        }
    },
    // Pregunta 15
    {
        question: 'Realidad primaria de la que están hechas las cosas:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Sustancia.',
            },
            {
                isCorrect: false,
                option: 'b. Energía.',
            },
            {
                isCorrect: false,
                option: 'c. Elemento.',
            },
            {
                isCorrect: true,
                option: 'd. Materia.',
            }
        ],
        bubbleAnswer: '¡Correcto! La materia es todo aquello que posee masa, ocupa un lugar en el espacio y es capaz de interactuar gravitatoriamente.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad I: El medio ambiente.',
        character: {
            src: 'src/monitor.png',
            width: '435',
            height: '309',
        }
    },
    // Pregunta 16
    {
        question: 'Capacidad de los cuerpos para realizar un trabajo y producir cambios en ellos mismos o en otros cuerpos:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Materia.',
            },
            {
                isCorrect: true,
                option: 'b. Energía.',
            },
            {
                isCorrect: false,
                option: 'c. Plasma.',
            },
            {
                isCorrect: false,
                option: 'd. Átomo.',
            }
        ],
        bubbleAnswer: '¡Correcto! La energía es la propiedad por la cual todo cuerpo o sistema material puede transformarse, modificando su estado o posición, así como actuar sobre otros originando en ellos procesos de transformación.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad I: El medio ambiente.',
        character: {
            src: 'src/monitor.png',
            width: '435',
            height: '309',
        }
    },
    // Pregunta 17
    {
        question: 'Completa la frase: La materia y la energía no se crean ni se destruyen... :',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Se mezclan.',
            },
            {
                isCorrect: false,
                option: 'b. Se consumen.',
            },
            {
                isCorrect: true,
                option: 'c. Se transforman.',
            },
            {
                isCorrect: false,
                option: 'd. Se fusionan.',
            }
        ],
        bubbleAnswer: '¡Correcto! La energía es la propiedad por la cual todo cuerpo o sistema material puede transformarse, modificando su estado o posición, así como actuar sobre otros originando en ellos procesos de transformación.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad I: El medio ambiente.',
        character: {
            src: 'src/monitor.png',
            width: '435',
            height: '309',
        }
    },
    // Pregunta 18
    {
        question: 'Magnitud física con la que medimos la cantidad de materia que contiene un cuerpo:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Peso.',
            },
            {
                isCorrect: true,
                option: 'b. Masa.',
            },
            {
                isCorrect: false,
                option: 'c. Inercia.',
            },
            {
                isCorrect: false,
                option: 'd. Volumen.',
            }
        ],
        bubbleAnswer: '¡Correcto! La masa es la cantidad de materia contenida en los objetos.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad I: El medio ambiente.',
        character: {
            src: 'src/monitor.png',
            width: '435',
            height: '309',
        }
    },
    // Pregunta 19
    {
        question: 'Propiedad de los cuerpos de mantener su estado de reposo o de movimiento hasta que una fuerza externa los obligue a cambiar:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Masa.',
            },
            {
                isCorrect: true,
                option: 'b. Inercia.',
            },
            {
                isCorrect: false,
                option: 'c. Volumen.',
            },
            {
                isCorrect: false,
                option: 'd. Peso.',
            }
        ],
        bubbleAnswer: '¡Correcto! La Inercia es la propiedad de los cuerpos de mantener su estado de reposo o movimiento si no es por la acción de una fuerza.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad I: El medio ambiente.',
        character: {
            src: 'src/monitor.png',
            width: '435',
            height: '309',
        }
    },
    // Pregunta 20
    {
        question: 'Fuerza que ejerce la gravedad sobre el objeto:',
        questionAsked: false,
        options:[
            {
                isCorrect: true,
                option: 'a. Peso.',
            },
            {
                isCorrect: false,
                option: 'b. Volumen.',
            },
            {
                isCorrect: false,
                option: 'c. Masa.',
            },
            {
                isCorrect: false,
                option: 'd. Inercia.',
            }
        ],
        bubbleAnswer: '¡Correcto! El peso es la fuerza con que la Tierra atrae a un cuerpo, por acción de la gravedad.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad I: El medio ambiente.',
        character: {
            src: 'src/monitor.png',
            width: '435',
            height: '309',
        }
    },
    // Pregunta 21
    {
        question: 'Espacio que ocupa un objeto:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Inercia.',
            },
            {
                isCorrect: false,
                option: 'b. Peso.',
            },
            {
                isCorrect: true,
                option: 'c. Volumen.',
            },
            {
                isCorrect: false,
                option: 'd. Masa.',
            }
        ],
        bubbleAnswer: '¡Correcto! El volumen son las medidas del espacio de tres dimensiones ocupado por un cuerpo.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad I: El medio ambiente.',
        character: {
            src: 'src/telefono.png',
            width: '223',
            height: '330',
        }
    },
    // Pregunta 22
    {
        question: 'Los elementos vitales para el medio ambiente son:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Aire, Agua y Suelo.',
            },
            {
                isCorrect: false,
                option: 'b. Aire, Agua, Suelo y Clima.',
            },
            {
                isCorrect: false,
                option: 'c. Aire, Agua, Suelo, Flora y Fauna.',
            },
            {
                isCorrect: true,
                option: 'd. Aire, Agua, Suelo, Flora, Fauna, Clima y Radiación.',
            }
        ],
        bubbleAnswer: '¡Correcto! Cuando cuidamos estos elementos y los mantenemos en balance, hay mayores posibilidades de gozar de una buena Salud.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad I: El medio ambiente.',
        character: {
            src: 'src/telefono.png',
            width: '223',
            height: '330',
        }
    },
    /* ---Unit 3--- */
    // Pregunta 23
    {
        question: 'Esfera física de la Tierra formada por una capa de aire que rodea sus superficies sólidas; constituye la parte más externa del planeta:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Biomasa.',
            },
            {
                isCorrect: false,
                option: 'b. Biosfera.',
            },
            {
                isCorrect: false,
                option: 'c. Capa de ozono.',
            },
            {
                isCorrect: true,
                option: 'd. Atmósfera.',
            }
        ],
        bubbleAnswer: '¡Correcto! La atmósfera es la capa gaseosa que envuelve la tierra y que se mantiene unida al planeta por la fuerza de la gravedad.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad II: El impacto ambiental de los desechos.',
        character: {
            src: 'src/telefono.png',
            width: '223',
            height: '330',
        }
    },
    // Pregunta 24
    {
        question: 'Se refiere a la sustancia o el compuesto químico que puede degradarse por acción biológica:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Biótico.',
            },
            {
                isCorrect: true,
                option: 'b. Biodegradable.',
            },
            {
                isCorrect: false,
                option: 'c. Acuífero',
            },
            {
                isCorrect: false,
                option: 'd. Degradable.',
            }
        ],
        bubbleAnswer: '¡Correcto! El adjetivo biodegradable califica a aquellos materiales, naturales o sintéticos, que se descomponen por acción de agentes biológicos comunes, por lo general hasta transformarse en moléculas sencillas y compatibles con la vida, como agua y dióxido de carbono.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad II: El impacto ambiental de los desechos.',
        character: {
            src: 'src/telefono.png',
            width: '223',
            height: '330',
        }
    },
    // Pregunta 25
    {
        question: 'Diversidad biológica en la cual se incluyen todas las especies vegetales, animales y microorganismos de la Tierra, así como los ecosistemas de que forman parte:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Ecosistema.',
            },
            {
                isCorrect: false,
                option: 'b. Hábitat.',
            },
            {
                isCorrect: true,
                option: 'c. Biodiversidad.',
            },
            {
                isCorrect: false,
                option: 'd. Huella ecológica.',
            }
        ],
        bubbleAnswer: '¡Correcto! Se le llama biodiversidad a la variedad de formas de vida que se desarrolla en un ambiente natural.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad II: El impacto ambiental de los desechos.',
        character: {
            src: 'src/telefono.png',
            width: '223',
            height: '330',
        }
    },
    // Pregunta 26
    {
        question: 'Fenómeno del incremento térmico a escala terrestre, adicional respecto de sus valores medios, y cuyo origen se encuentra en el aumento de las concentraciones atmosféricas de los gases de efecto invernadero:',
        questionAsked: false,
        options:[
            {
                isCorrect: true,
                option: 'a. Calentamiento global.',
            },
            {
                isCorrect: false,
                option: 'b. Cambio climático.',
            },
            {
                isCorrect: false,
                option: 'c. Efecto invernadero.',
            },
            {
                isCorrect: false,
                option: 'd. Huella de carbono.',
            }
        ],
        bubbleAnswer: '¡Correcto! El calentamiento global consiste en el aumento de la temperatura de la tierra, mismo que se refleja en los océanos y la atmósfera principalmente causado por la emisión de gases de efecto invernadero expedidos por la actividad humana.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad II: El impacto ambiental de los desechos.',
        character: {
            src: 'src/telefono.png',
            width: '223',
            height: '330',
        }
    },
    // Pregunta 27
    {
        question: 'Cambio significativo en las características de los climas sobre grandes áreas o sobre todo el planeta por causas naturales, exógenas o endógenas:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Efecto invernadero.',
            },
            {
                isCorrect: false,
                option: 'b. Calentamiento global.',
            },
            {
                isCorrect: false,
                option: 'c. Huella de carbono.',
            },
            {
                isCorrect: true,
                option: 'd. Cambio climático.',
            }
        ],
        bubbleAnswer: '¡Correcto! El cambio climático afecta a todas las regiones del mundo. Los casquetes polares se están fundiendo y el nivel del mar está subiendo. En algunas regiones, los fenómenos meteorológicos extremos y las inundaciones son cada vez más frecuentes, y en otras se registran olas de calor y sequías.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad II: El impacto ambiental de los desechos.',
        character: {
            src: 'src/telefono.png',
            width: '223',
            height: '330',
        }
    },
    // Pregunta 28
    {
        question: 'Eliminación permanente del bosque y de sus estratos vegetales:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Extinción de especies.',
            },
            {
                isCorrect: false,
                option: 'b. Reforestación.',
            },
            {
                isCorrect: true,
                option: 'c. Deforestación.',
            },
            {
                isCorrect: false,
                option: 'd. Desertificación.',
            }
        ],
        bubbleAnswer: '¡Correcto! La deforestación es la destrucción o agotamiento de la superficie forestal (bosques naturales), habitualmente debido a la acción humana mediante la tala o la quema de árboles.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad II: El impacto ambiental de los desechos.',
        character: {
            src: 'src/telefono.png',
            width: '223',
            height: '330',
        }
    },
    // Pregunta 29
    {
        question: 'Proceso de disminución o destrucción del potencial biológico del suelo, que puede producir condiciones desérticas en ciertas áreas:',
        questionAsked: false,
        options:[
            {
                isCorrect: true,
                option: 'a. Desertificación.',
            },
            {
                isCorrect: false,
                option: 'b. Deforestación.',
            },
            {
                isCorrect: false,
                option: 'c. Reforestación.',
            },
            {
                isCorrect: false,
                option: 'd. Degradación ecológica.',
            }
        ],
        bubbleAnswer: '¡Correcto! El origen de la desertificación es la destrucción de la vegetación por parte del ser humano, lo que favorece la erosión del suelo por el aire o el agua.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad II: El impacto ambiental de los desechos.',
        character: {
            src: 'src/telefono.png',
            width: '223',
            height: '330',
        }
    },
    // Pregunta 30
    {
        question: 'Gases como el vapor de agua y el bióxido de carbono que crean un efecto invernadero natural sobre la Tierra, porque mantienen una temperatura promedio de 15 grados Celsius:',
        questionAsked: false,
        options:[
            {
                isCorrect: false,
                option: 'a. Huella hídrica.',
            },
            {
                isCorrect: true,
                option: 'b. Efecto invernadero.',
            },
            {
                isCorrect: false,
                option: 'c. Degradación ecológica.',
            },
            {
                isCorrect: false,
                option: 'd. Huella de carbono.',
            }
        ],
        bubbleAnswer: '¡Correcto! El efecto invernadero es un fenómeno natural y beneficioso para nosotros. Determinados gases presentes en la atmósfera retienen parte de la radiación térmica emitida por la superficie terrestre tras ser calentada por el sol, manteniendo la temperatura del planeta a un nivel adecuado para el desarrollo de la vida.',
        feedback: 'Respuesta incorrecta, repasa un poco mas la Unidad II: El impacto ambiental de los desechos.',
        character: {
            src: 'src/telefono.png',
            width: '223',
            height: '330',
        }
    },
];
// Javascript del Quizz



const questions = [
    // Preguntas

    {
        question: "¿Cuál es el nombre del hijo de Goku?",
        answers: { a: "Vegeta", b: "Gohan", c: "Trunks" },
        correct: "b"
    },
    {
        question: "¿Quién es el creador de Dragon Ball Z?",
        answers: {
            a: "Akira Toriyama",
            b: "Masashi Kishimoto",
            c: "Eiichiro Oda"
        },
        correct: "a"
    },
    {
        question: "¿Cuál es el nombre del hijo de Goku?",
        answers: {
            a: "Vegeta",
            b: "Gohan",
            c: "Trunks"
        },
        correct: "b"
    },
    {
        question: "¿Cuál es la primera transformación que consigue Goku?",
        answers: {
            a: "Super Saiyan",
            b: "Kaio-Ken",
            c: "Oozaru"
        },
        correct: "c"
    },
    {
        question: "¿Quién es más poderoso?",
        answers: {
            a: "Goku si hubiera conseguido el Super Saiyan 4 en la saga de Buu",
            b: "Vegetto Super Saiyan 1",
            c: "Super Buu Gohan"
        },
        correct: "b"
    },
    {
        question: "¿Cuál es el nombre del planeta natal de los Saiyan?",
        answers: {
            a: "Tierra",
            b: "Namekusein",
            c: "Vegeta"
        },
        correct: "c"
    },
    {
        question: "¿Qué técnica utiliza Goku para teletransportarse?",
        answers: {
            a: "Bola Genki",
            b: "Kamehameha",
            c: "Shunkan Idō"
        },
        correct: "c"
    },
    {
        question: "¿Quién es el mejor amigo de Goku?",
        answers: {
            a: "Krillin",
            b: "Bulma",
            c: "Piccolo"
        },
        correct: "a"
    },
    {
        question: "¿Qué forma usa Goku contra Majin Vegeta ?",
        answers: {
            a: "Super Saiyan 1",
            b: "Super Saiyan 2",
            c: "Super Kaioken"
        },
        correct: "b"
    },
    {
        question: "¿Quién destruye el planeta Vegeta?",
        answers: {
            a: "Freezer",
            b: "Cell",
            c: "Boo"
        },
        correct: "a"
    },
    {
        question: "¿Qué es el Kamehameha?",
        answers: {
            a: "Una técnica de combate",
            b: "Una forma de vida",
            c: "Un planeta"
        },
        correct: "a"
    },   
    {
        question: "¿Quién es el Rey de los Saiyan?",
        answers: {
            a: "Vegeta",
            b: "Bardock",
            c: "Radditz"
        },
        correct: "a"
    },
    {
        question: "¿Quién es el Saiyan Legendario?",
        answers: {
            a: "Goku",
            b: "Broly",
            c: "Vegeta"
        },
        correct: "b"
    },
    {
        question: "¿Qué es la Genki-Dama?",
        answers: {
            a: "Una técnica de combate",
            b: "Una forma de vida",
            c: "Un ataque que usa energía de otros"
        },
        correct: "c"
    },
    {
        question: "¿A qué enemigo no pudo vencer Goku?",
        answers: {
            a: "Cell",
            b: "Majin Buu",
            c: "Dabura"
        },
        correct: "a"
    },
    {
        question: "¿Qué es la técnica que usa Vegeta llamada 'Final Flash'?",
        answers: {
            a: "Un ataque de energía",
            b: "Un ataque de acometida",
            c: "Una transformación"
        },
        correct: "a"
    },
    {
        question: "¿Cómo se llama la fusión entre Goku y Vegeta?",
        answers: {
            a: "Genki-Dama",
            b: "Pothala",
            c: "Super Saiyan"
        },
        correct: "b"
    },
    {
        question: "¿Quién es el maestro de Gohan?",
        answers: {
            a: "Piccolo",
            b: "Krillin",
            c: "Goku"
        },
        correct: "a"
    },
    {
        question: "¿Qué técnica utiliza Goku que implica duplicar el poder base forzando el cuerpo?",
        answers: {
            a: "Shunkan Idō",
            b: "Genki-Dama",
            c: "Kaio-Ken"
        },
        correct: "c"
    },
    {
        question: "¿Quién es el primer villano que Goku enfrenta en Dragon Ball Z?",
        answers: {
            a: "Vegeta",
            b: "Nappa",
            c: "Frieza"
        },
        correct: "b"
    },
    {
        question: "¿Cuál es el nombre del hijo de Vegeta?",
        answers: {
            a: "Goten",
            b: "Trunks",
            c: "Bardock"
        },
        correct: "b"
    },
    {
        question: "¿Qué forma usa Goku contra Majin Boo?",
        answers: {
            a: "Super Saiyan 3",
            b: "Super Saiyan God",
            c: "Super Saiyan 2"
        },
        correct: "a"
    },
    {
        question: "El Androide 17 es más fuerte que",
        answers: {
            a: "Androide 16",
            b: "Súper Androide 13",
            c: "Cooler Forma Final"
        },
        correct: "c"
    },
    {
        question: "¿Cómo se conoce el ser que da lugar la técnica Metamoran?",
        answers: {
            a: "Gogeta",
            b: "Vegetto",
            c: "Vegettan"
        },
        correct: "a"
    },
    {
        question: "¿Quién es la madre de Gohan?",
        answers: {
            a: "Bulma",
            b: "Chi-Chi",
            c: "Videl"
        },
        correct: "b"
    },
    {
        question: "¿Qué es el Mafuba?",
        answers: {
            a: "Una técnica de combate",
            b: "Un tipo de fusión",
            c: "Un ataque que sella"
        },
        correct: "c"
    },
    {
        question: "¿Quuién fue la primera cita de Gohan?",
        answers: {
            a: "Videl",
            b: "Androide 18",
            c: "Angela"
        },
        correct: "c"
    },
    {
        question: "¿Cuál es el multiplicador del Kaioken?",
        answers: {
            a: "x2",
            b: "x50",
            c: "x10"
        },
        correct: "a"
    },
    {
        question: "¿Cuál es el nombre del planeta de Piccolo?",
        answers: {
            a: "Tierra",
            b: "Namek",
            c: "Vegeta"
        },
        correct: "b"
    },
    {
        question: "¿Quién es el creador de los androides?",
        answers: {
            a: "Dr. Gero",
            b: "Dr. Brief",
            c: "Bulma"
        },
        correct: "a"
    },
    {
        question: "¿De qué color es el pelo del Super Saiyan Dios?",
        answers: {
            a: "Blanco",
            b: "Rojo",
            c: "Azul"
        },
        correct: "b"
    },
    {
        question: "¿Quién es el príncipe de los Saiyan?",
        answers: {
            a: "Goku",
            b: "Vegeta",
            c: "Bardock"
        },
        correct: "b"
    },
    {
        question: "¿Qué hace Goku en la sala del tiempo?",
        answers: {
            a: "Entrena",
            b: "Duerme",
            c: "Medita"
        },
        correct: "a"
    },
    {
        question: "¿Quién es el principal antagonista en la saga de los androides?",
        answers: {
            a: "Frieza",
            b: "Cell",
            c: "Majin Buu"
        },
        correct: "b"
    },
    {
        question: "¿Qué es el Kamehameha?",
        answers: {
            a: "Una técnica de combate",
            b: "Una transformación",
            c: "Un ataque de fusión"
        },
        correct: "a"
    },
    {
        question: "¿Quién es el dragón que concede deseos en Namek?",
        answers: {
            a: "Shenron",
            b: "Porunga",
            c: "Elder Kai"
        },
        correct: "b"
    },
    {
        question: "¿Quién es el dragón que concede deseos en La Tierra?",
        answers: {
            a: "Shenron",
            b: "Elder Kai",
            c: "Porunga"
        },
        correct: "a"
    },
    {
        question: "¿Qué es la Genki-Dama?",
        answers: {
            a: "Una esfera de energía",
            b: "Una transformación",
            c: "La reina de Namek"
        },
        correct: "a"
    },
    {
        question: "¿Qué transformación se considera la más poderosa de Goku en Dragon Ball Z?",
        answers: {
            a: "Super Saiyan 3",
            b: "Super Kaioken",
            c: "Super Saiyan 1"
        },
        correct: "a"
    },
    {
        question: "¿Quién ganaría esta batalla? Goku SS3 vs Super Buu ",
        answers: {
            a: "Goku Super Saiyan 3",
            b: "Super Buu",
            c: "Goku no tiene el Super Saiyan 3 en la Saga de Majin Buu"
        },
        correct: "b"
    },
    {
        question: "¿Cuál es el nivel de poder de Freezer 100%?",
        answers: {
            a: "150,000,000",
            b: "140,000,000",
            c: "120,000,000"
        },
        correct: "c"
    },
    {
        question: "¿Cuál es el nivel de poder de Super Buu?",
        answers: {
            a: "28,600,000,000",
            b: "36,000,000,000",
            c: "530,000"
        },
        correct: "a"
    },
    {
        question: "¿Cuál es el nivel de poder de Cell Perfecto?",
        answers: {
            a: "1,500,000,000",
            b: "1,800,000,000",
            c: "3,000,000,000"
        },
        correct: "b"
    },
    {
        question: "¿Cuál es el nivel de poder de Goku Super Saiyan 2?",
        answers: {
            a: "3,000,000,000",
            b: "24,000,000,000",
            c: "4,500,000,000"
        },
        correct: "c"
    },
    {
        question: "¿Si Goku hubiera conseguido el Super Saiyan 4 en la Saga de Majin Buu, cuál habría sido su poder?",
        answers: {
            a: "180,000,000,000",
            b: "18,000,000,000",
            c: "100,000,000"
        },
        correct: "a"
    },
    {
        question: "¿Cuál es el multiplicador de la transformación Super Saiyan 3?",
        answers: {
            a: "x100",
            b: "x400",
            c: "x4000"
        },
        correct: "b"
    },
    {
        question: "¿Si Goku hubiera podido usar el Super Kaioken en la Tierra sin morir que habría pasado?",
        answers: {
            a: "Habría perdido contra Cell Perfecto",
            b: "Habría vencido a Cell Super Perfecto",
            c: "Sería más fuerte que Gohan Super Saiyan 2"
        },
        correct: "b"
    },
    {
        question: "¿Quién es más fuerte, Goku Super Saiyan 1 en la Saga de Freezer o Mecha Freezer?",
        answers: {
            a: "Goku",
            b: "Mecha Freezer",
            c: "Son iguales de poderosos"
        },
        correct: "a"
    },
    {
        question: "¿Quién es más fuerte, Goku si hubiera conseguido el Super Saiyan 2 en los Juegos de Cell o Cell Súper Perfecto?",
        answers: {
            a: "Cell Súper Perfecto",
            b: "Goku",
            c: "Son iguales de poderosos"
        },
        correct: "b"
    },
    {
        question: "¿Cuál es el multiplicador de la transformación Super Saiyan 2?",
        answers: {
            a: "x20",
            b: "x100",
            c: "x50"
        },
        correct: "b"
    },
    {
        question: "¿Cuál es el multiplicador de la transformación Super Saiyan 1?",
        answers: {
            a: "x100",
            b: "x20",
            c: "x50"
        },
        correct: "c"
    },
    {
        question: "¿Cuál es el multiplicador de la transformación de Oozaru?",
        answers: {
            a: "x20",
            b: "x10",
            c: "x50"
        },
        correct: "b"
    },
    {
        question: "¿Cuál es el nivel de poder del Androide 17?",
        answers: {
            a: "2.250.000.000",
            b: "200.000.000",
            c: "285.000.000"
        },
        correct: "c"
    },
    {
        question: "¿Quién hubiera ganado, Goku si hubiera conseguido el Super Saiyan 4 en la saga de Majin Buu o Super Buu Gohan?",
        answers: {
            a: "Super Buu Gohan",
            b: "Goku",
            c: "Sería una lucha igualada"
        },
        correct: "b"
    },
    {
        question: "¿Cuál es el multiplicador de la transformación Super Saiyan 4?",
        answers: {
            a: "x4000",
            b: "x100",
            c: "x400"
        },
        correct: "a"
    },
    {
        question: "¿Quién utiliza las Bolas de Dragón para liberar al Dr. Wheelo?",
        answers: {
            a: "Dr. Gero",
            b: "Dr. Kochin",
            c: "Dr. Brief"
        },
        correct: "b"
    },
    {
        question: "¿Qué técnica usa Goku para igualar al Dr. Wheelo?",
        answers: {
            a: "Kaio-ken x4",
            b: "Genkidama",
            c: "Super Saiyan"
        },
        correct: "a"
    },
    {
        question: "¿Quién secuestra a Bulma y el Maestro Roshi?",
        answers: {
            a: "Dr. Gero",
            b: "Lord Slug",
            c: "Bio-Men de Kochin"
        },
        correct: "c"
    },
    {
        question: "¿Quiénes luchan contra los Bio-Guerreros en 'The World's Strongest'?",
        answers: {
            a: "Piccolo, Gohan y Krillin",
            b: "Goku, Vegeta y Trunks",
            c: "Tien, Yamcha y Chiaotzu"
        },
        correct: "a"
    },
    {
        question: "¿Qué pide Lord Slug a Shenron?",
        answers: {
            a: "Juventud eterna",
            b: "Inmortalidad",
            c: "Destruir la Tierra"
        },
        correct: "a"
    },
    {
        question: "¿Quién debilita a Lord Slug con un silbato?",
        answers: {
            a: "Goku",
            b: "Piccolo",
            c: "Gohan"
        },
        correct: "c"
    },
    {
        question: "¿Cómo restaura Goku la atmósfera en 'Lord Slug'?",
        answers: {
            a: "Usando una Genkidama",
            b: "Destruyendo la máquina con un Kamehameha",
            c: "Usando el Dragon Fist"
        },
        correct: "a"
    },
    {
        question: "¿Qué transformación usa Goku para vencer a Cooler en 'Cooler's Revenge'?",
        answers: {
            a: "Kaio-ken x20",
            b: "Super Saiyan",
            c: "Oozaru"
        },
        correct: "b"
    },
    {
        question: "¿Qué hace Cooler antes de morir en 'Cooler's Revenge'?",
        answers: {
            a: "Lanza una Supernova",
            b: "Se fusiona con un androide",
            c: "Revive a Freezer"
        },
        correct: "a"
    },
    {
        question: "¿Quién se transforma en Super Saiyan para ayudar a Goku en 'The Return of Cooler'?",
        answers: {
            a: "Vegeta",
            b: "Gohan",
            c: "Trunks"
        },
        correct: "a"
    },
    {
        question: "¿Cómo destruyen Goku y Vegeta a Metal Cooler?",
        answers: {
            a: "Con una Genkidama",
            b: "Sobrecargando los circuitos",
            c: "Usando la Danza de Fusión"
        },
        correct: "b"
    },
    {
        question: "¿Cómo derrota Goku al Super Androide 13?",
        answers: {
            a: "Con una Genkidama absorbida",
            b: "Usando el Kaio-ken x20",
            c: "Transformándose en Super Saiyan 2"
        },
        correct: "a"
    },
    {
        question: "¿Qué busca Turles en la Tierra?",
        answers: {
            a: "Las Bolas de Dragón",
            b: "Plantar el Árbol del Poder",
            c: "Vengar a su padre"
        },
        correct: "b"
    },
    {
        question: "¿Qué fruta come Turles para aumentar su poder?",
        answers: {
            a: "Fruta del Árbol del Poder",
            b: "Semilla del Ermitaño",
            c: "Genkidama"
        },
        correct: "a"
    },
    {
        question: "¿Quién usa una luna artificial para transformar a Gohan en Oozaru?",
        answers: {
            a: "Vegeta",
            b: "Nappa",
            c: "Turles"
        },
        correct: "c"
    },
    {
        question: "¿Qué técnica usa Goku para destruir el Árbol del Poder?",
        answers: {
            a: "Super Genkidama",
            b: "Final Flash",
            c: "Kamehameha"
        },
        correct: "a"
    },
    {
        question: "¿Quiénes son los miembros del equipo de Turles en 'The Tree of Might'?",
        answers: {
            a: "Cacao, Amond, Daiz, Rasin y Lakasei",
            b: "Jeice, Burter, Recoome, Guldo",
            c: "Androide 13, Android 14, Android 15"
        },
        correct: "a"
    },
    {
        question: "¿Cómo comienza la película 'Cooler's Revenge'?",
        answers: {
            a: "Con la destrucción del Planeta Vegeta",
            b: "Con la llegada de Freezer a la Tierra",
            c: "Con Goku entrenando"
        },
        correct: "a"
    },
    {
        question: "¿Qué revela Cooler antes de morir?",
        answers: {
            a: "Una transformación final",
            b: "El paradero de Freezer",
            c: "El secreto de los Namekianos"
        },
        correct: "a"
    },
    {
        question: "¿Quién avisa a los Guerreros Z sobre el peligro del Árbol del Poder?",
        answers: {
            a: "Kaio Sama",
            b: "Kami",
            c: "Bulma"
        },
        correct: "a"
    },
    {
        question: "¿Qué técnica usa Goku para destruir a Wheelo?",
        answers: {
            a: "Genkidama",
            b: "Kamehameha",
            c: "Dragon Fist"
        },
        correct: "a"
    },
    {
        question: "¿Quién derrota a los Bio-Guerreros de Wheelo?",
        answers: {
            a: "Piccolo, Gohan y Krillin",
            b: "Goku solo",
            c: "Vegeta y Trunks"
        },
        correct: "a"
    },
    {
        question: "¿Cómo derrota Goku a Dr. Wheelo?",
        answers: {
            a: "Usando Kaio-ken x4",
            b: "Transformándose en Super Saiyan",
            c: "Usando una Genkidama"
        },
        correct: "c"
    },
    {
        question: "¿Qué hace el dispositivo que instala Lord Slug en la Tierra?",
        answers: {
            a: "Controla las mentes de los humanos",
            b: "Cubre la Tierra con nubes y bloquea la luz solar",
            c: "Revive a los muertos"
        },
        correct: "b"
    },
    {
        question: "¿Qué transformación revela Goku en 'Lord Slug'?",
        answers: {
            a: "Kaioken",
            b: "Super Saiyan 1",
            c: "Pseudo Super Saiyan",
        },
        correct: "c"
    },
    {
        question: "¿Quién ayuda a Gohan a escapar del campamento de Slug?",
        answers: {
            a: "Piccolo",
            b: "Krillin",
            c: "Goku"
        },
        correct: "a"
    },
    {
        question: "¿Cómo es finalmente derrotado Lord Slug?",
        answers: {
            a: "Con una Genkidama",
            b: "Con un Final Flash",
            c: "Con un Kamehameha"
        },
        correct: "a"
    },
    {
        question: "¿Qué fusión se enfrenta a Janemba?",
        answers: {
            a: "Gogeta",
            b: "Gotenks",
            c: "Vegetto"
        },
        correct: "a"
    },
    {
        question: "¿Qué técnica usa Goku para destruir a Janemba?",
        answers: {
            a: "Genkidama",
            b: "Stardust Breaker",
            c: "Kamehameha"
        },
        correct: "a"
    },
    {
        question: "¿Quiénes se fusionan para enfrentar a Janemba?",
        answers: {
            a: "Goten y Trunks",
            b: "Goku y Vegeta",
            c: "Goku y Gohan"
        },
        correct: "b"
    }
    
    
    
];

// Función para mezclar las preguntas
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Función para construir el quiz
function buildQuiz() {
    shuffle(questions);
    const selectedQuestions = questions.slice(0, 10); // Selecciona las primeras 10 preguntas
    const output = [];

    selectedQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (let letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}: ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });
    document.getElementById('quiz').innerHTML = output.join('');
}

// Función para mostrar resultados
function showResults() {
    const answerContainers = document.querySelectorAll('.answers');
    let score = 0;
    const selectedQuestions = questions.slice(0, 10); // Asegúrate de que coincida con las preguntas seleccionadas

    selectedQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // Resaltar la respuesta correcta e incorrecta
        const inputs = answerContainer.querySelectorAll('input');
        inputs.forEach(input => {
            // Si la respuesta es correcta
            if (input.value === currentQuestion.correct) {
                input.parentElement.style.color = 'green'; // Cambia el color a verde
            }
            // Si la respuesta es incorrecta y se seleccionó
            else if (input.value === userAnswer) {
                input.parentElement.style.color = 'red'; // Cambia el color a rojo
            }
        });

        // Contar puntuación
        if (userAnswer === currentQuestion.correct) {
            score++;
        }
    });

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Tu puntuación es ${score} de 10`;
    resultElement.style.opacity = 1;

    // Efecto si el usuario obtiene más de 7 puntos
    if (score > 7) {
        resultElement.classList.add('correct');
        document.body.style.backgroundColor = "#b2ffb2"; // Fondo verde claro
        alert("¡Increíble! ¡Eres un verdadero fan de Dragon Ball Z!");
    } else {
        document.body.style.backgroundColor = "#ffcccc"; // Fondo rojo claro
    }
}

// Llamadas iniciales
buildQuiz();
document.getElementById('submit').addEventListener('click', showResults);



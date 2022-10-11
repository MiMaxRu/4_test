import './index.css';//Подключение файла оформления
import React from 'react';//Подключение библиотеки React
const questions = [//Масив с вопросами
  {
    title: '1. Выберите наиболее подходящий ответ! “What does your husband do?”',
    variants: ['He is feeding the dog.', 'He is a doctor.', 'Yes, he does.'],
    correct: 1,//Номер правильного ответа
  },
  {
    title: '2. Что такое альтернативный вопрос в английском языке?2. Что такое альтернативный вопрос в английском языке?',
    variants: ['Вопрос, предполагающий выбор между двумя качествами, предметами или действиями.', 'Вопрос, являющийся уточнением какого-либо утверждения.', 'Вопрос, требующий ответа «Да» или «Нет».'],
    correct: 0,//Номер правильного ответа
  },
  {
    title: '3. Yesterday I ................. a bird.',
    variants: [
      'sawed',
      'see',
      'saw',
    ],
    correct: 2,//Номер правильного ответа
  },
  {
    title: '4. Найдите неправильный глагол: to play, to smile, to laugh, to see.',
    variants: [
      'to smile',
      'to laugh',
      'to see',
    ],
    correct: 2,//Номер правильного ответа
  },
];

function Result({ correct }) {//Компонента вывода результата. В качестве атрибута мы передаём переменную correct, для отображения количества правильных ответов

  return (
    <div className="result">
      <img src="https://abali.ru/wp-content/uploads/2020/03/hlopushka-animation-gif-Party-Popper.gif" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>{/*Отображение результата выполнения теста */}
      <a href='/'><button>Попробовать снова</button></a>{/*Перезагрузка окна */}

    </div>
  );
}

function Game({ step, question, onClickVariant }) {//Компонента вывода теста
  const percentage = Math.round(step / questions.length * 100);//Расчёт длины полосы индикатора выполнения, исходя из стадии и колличества вопросов теста
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>{/*Отображение индикатора состояния */}
      </div>
      <h1>{question.title}</h1>{/*Вывод текущего вопроса */}
      <ul>
        {question.variants.map((text, index) => (//Извлечение вариантов ответа
          <li onClick={() => onClickVariant(index)} key={text}>{text}</li> //Вывод списка вариантов ответа
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);//Переменная стадии выполнения квеста
  const [correct, setCorrect] = React.useState(0);//Переменная, которая хранит колличество правильных ответов
  const question = questions[step]//Обращение к масиву с вопросами

  const onClickVariant = (index) => {//Функция выбора кнопки с вариантом ответа
    setStep(step + 1)//Изменение стадии выполнения квеста
    if (index === question.correct) {//Проверка правильности ответа
      setCorrect(correct + 1)//Если ответ правильный, увеличиваем значение переменной correct на 1
    }
  }
  return (
    <div className="App">
      {step !== questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant} /> : <Result correct={correct} />}{/*Проверка
      стадии выполнения теста. Если тест не завершён, будет отображаться следующий вопрос. Если тест завершен, отобразится окно с результатом выполнения
      теста
       */}

    </div>
  );
}

export default App;

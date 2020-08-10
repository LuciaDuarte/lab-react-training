import React from 'react';

const Greetings = (props) => {
  let greeting;

  switch (props.lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      greeting = 'Olá';
  }

  return (
    <div className="Greetings box">
      <p>
        {greeting} {props.children}
      </p>
    </div>
  );
};

export default Greetings;

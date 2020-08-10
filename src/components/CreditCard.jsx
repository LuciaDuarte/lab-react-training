import React from 'react';

const CreditCard = (props) => {
  let source;

  switch (props.type) {
    case 'Visa':
      source = './img/visa.png';
      break;
    case 'Master Card':
      source = './img/master-card.svg';
      break;
  }

  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div className="CredidCardType">
        <img src={source} alt={props.type} />
      </div>
      <div className="Number">
        <p>**** **** **** {props.number.substr(-4)}</p>
      </div>
      <div className="Info">
        <div className="InfoLine">
          <p>
            Expires {('0' + props.expirationMonth).substr(-2)}/
            {props.expirationYear.toString().substr(2)}
          </p>
          <p className="Bank">{props.bank}</p>
        </div>
        <div>
          <p>{props.owner}</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;

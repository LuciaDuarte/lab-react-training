import React from 'react';

const DriverCard = (props) => {
  let stars;
  const value = Math.round(props.rating);

  switch (value) {
    case 0:
      stars = '☆☆☆☆☆';
      break;
    case 1:
      stars = '★☆☆☆☆';
      break;
    case 2:
      stars = '★★☆☆☆';
      break;
    case 3:
      stars = '★★★☆☆';
      break;
    case 4:
      stars = '★★★★☆';
      break;
    case 5:
      stars = '★★★★★';
      break;
  }
  return (
    <div className="DriverCard">
      <div className="DriversPic">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="DriversInfo">
        <p>{props.name}</p>
        <p>{stars}</p>
        <p>
          {props.car.model} {'-'} {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;

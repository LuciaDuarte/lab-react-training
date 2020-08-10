import React from 'react';

const IdCard = ({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture,
  birthdate,
}) => {
  return (
    <div className="IdCard box">
      <img src={picture} alt="" />
      <div className="IdCard-info">
        <p>
          <strong>First name:</strong> {firstName}
        </p>
        <p>
          <strong>Last name:</strong> {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {height / 100}m
        </p>
        <p>
          <strong>Birth:</strong> {birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;

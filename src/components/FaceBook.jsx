import React from 'react';
import profiles from './../data/berlin.json';

const FaceBook = () => {
  return (
    <div>
      {profiles.map((profile) => {
        return (
          <div key={profile.img}>
            <img src={profile.img} alt="" />
            <div>
              <p>
                <strong>First Name:</strong> {profile.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {profile.lastName}
              </p>
              <p>
                <strong>Country:</strong> {profile.country}
              </p>
              <p>
                <strong>Type:</strong>{' '}
                {profile.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaceBook;

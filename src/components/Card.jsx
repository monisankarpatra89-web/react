import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="p-6 shadow-lg rounded-lg bg-white">
      <h2 className="text-xl font-semibold mb-2 text-gray-900">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;

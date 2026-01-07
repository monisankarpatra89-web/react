import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, description }) => {
  return (
    <div className="p-4 shadow-md rounded-lg bg-white">
      {title && <h2 className="text-xl font-semibold mb-2 text-gray-900">{title}</h2>}
      {description && <p className="text-gray-700">{description}</p>}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Card;

import PropTypes from "prop-types";

const PriceOption = ({ priceOption }) => {
  const { name, features, price } = priceOption;
  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg flex flex-col mb-6 md:mb-0">
      <h3 className="text-5xl text-center pb-4">{name}</h3>
      <p className="text-2xl text-center pb-4">Price: {price}$</p>
      <ul className="list-disc list-inside flex-grow">
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <button className="bg-green-500 w-full py-2 rounded-lg">Purchase</button>
    </div>
  );
};

PriceOption.propTypes = {
  priceOption: PropTypes.object.isRequired,
};

export default PriceOption;

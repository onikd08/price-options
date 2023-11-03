import PropTypes from "prop-types";

const NavLink = ({ route }) => {
  return (
    <li className="">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

NavLink.propTypes = {
  route: PropTypes.object.isRequired,
};

export default NavLink;

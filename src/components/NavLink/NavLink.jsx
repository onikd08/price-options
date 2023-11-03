import PropTypes from "prop-types";

const NavLink = ({ route }) => {
  return (
    <li className="hover:bg-slate-50 px-2 pb-1">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

NavLink.propTypes = {
  route: PropTypes.object.isRequired,
};

export default NavLink;

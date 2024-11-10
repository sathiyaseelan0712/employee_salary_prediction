// src/components/Navbar.js
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white font-mono p-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Salary Prediction App</div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-[#FFC07C]">
            DataOverview
          </Link>
          <Link to="/prediction" className="hover:text-[#FFC07C]">
            Prediction
          </Link>
          <Link to="/correlation" className="hover:text-[#FFC07C]">
            Correlation
          </Link>
          <Link to="/about" className="hover:text-[#FFC07C]">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ title }) => {
  return (
    <div className=" py-3 px-12 md:px-16 flex justify-between items-center text-[#fff]">
      <h1 className="text-2xl font-semibold">{title}</h1>
    </div>
  );
};

export default Header;

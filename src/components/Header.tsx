import { Search, User } from "react-feather";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold text-xl">Selamat datang!</h1>
      <div className="flex gap-5">
        <Search />
        <User />
      </div>
    </div>
  );
};

export default Header;

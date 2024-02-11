import Image from "next/image";

const Header = ({ variant }) => {
  const isProfile = variant === "public";
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">          
          <Image src="/flag.png" alt="Logo" width={50} height={30} className="logo"/>
          <div>
            <h1>Образование - CZ</h1>
          </div>
        </div>
        {isProfile && (
          <div>
            <a href="#FORM">
            <button className="form-button">Получить консультацию</button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

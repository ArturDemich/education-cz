const Header = ({ variant }) => {
  const isProfile = variant === "public";
  return (
    <header>
      <div>
        <div>Logo</div>
        <div>
          <h1>Education - CZ</h1>
        </div>
      </div>
      {isProfile && <div>
        <button>Contact with as</button>
      </div>}
    </header>
  );
};

export default Header;

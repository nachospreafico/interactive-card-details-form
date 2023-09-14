import Logo from "./../assets/card-logo.svg";

const Header = ({ cardName, cardNumber, expiryDate, cvc }) => {
  function formatCardNum(cardNumber) {
    return cardNumber.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ");
  }

  return (
    <header className="lg:h-[100vh] lg:w-[30vw] bg-gradient-to-br from-violet-900 via-pink-900 to-violet-900 h-[35vh] relative">
      <div
        id="card-back"
        className="h-[152px] w-[275px]  lg:left-[50%] lg:top-[55%] lg:w-[350px] lg:h-[193px] absolute top-[10%] right-[10%]  bg-gray-100 rounded-lg py-5 md:w-[350px] md:h-[179px]"
      >
        <div id="black-band" className="w-full h-[30%] bg-[#292929]"></div>
        <div
          id="cvc-container"
          className="w-[80%] h-[30%] bg-gray-300 m-auto mt-2 rounded-md flex items-center justify-end pr-3"
        >
          <span className="text-white">{!cvc ? "000" : cvc}</span>
        </div>
      </div>
      <div
        id="card-front"
        className="lg:px-5 lg:py-5 sm:left-[45%] lg:top-[20%] lg:left-[32%] lg:w-[350px] lg:h-[193px] absolute top-[55%] left-[5%] h-[152px] w-[275px] bg-gradient-to-br from-indigo-500 via-pink-500 to-indigo-500 rounded-lg px-3 py-3 md:w-[350px] md:h-[179px] md:left-[40%]"
      >
        <div id="logo-container" className="h-[25%]">
          <img src={Logo} alt="card logo" className="w-[25%]"></img>
        </div>
        <div
          id="card-number-container"
          className="h-[50%] w-[100%] flex items-end justify-stretch"
        >
          <input
            className="text-lg bg-transparent placeholder:text-white placeholder:tracking-wider placeholder:text-lg text-white tracking-wider"
            placeholder="0000 0000 0000 0000"
            disabled={true}
            value={formatCardNum(cardNumber)}
          ></input>
        </div>
        <div
          id="name-expiry-container"
          className="h-[25%] flex flex-row justify-between items-end"
        >
          <input
            className="text-xs bg-transparent placeholder:text-white tracking-wider text-white"
            disabled={true}
            placeholder="JANE APPLESEED"
            value={cardName.toUpperCase()}
          ></input>
          <p className="text-xs text-white tracking-wider">
            <span>{!expiryDate.month ? "00" : expiryDate.month}</span>/
            <span>{!expiryDate.year ? "00" : expiryDate.year}</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

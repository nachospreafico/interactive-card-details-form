const Form = ({ setCardNumber, setCardName, setExpiryDate, setCVC, validateAll, errors }) => {

  return (
    <form className=" lg:h-[100vh] lg:w-[70wv] h-[65vh] lg:items-center md:px-32 sm:px-32 w-full px-5 pt-20 flex flex-col gap-8 lg:py-48">
      <div id="input-container" className="relative flex flex-col gap-2 lg:w-[50%]">
        <label className="text-sm tracking-widest">CARDHOLDER NAME</label>
        <input
          className={`${errors.name ? "input-error" : "border border-gray-200"}   lg:cursor-pointer  rounded-md px-4 py-2`}
          type="text"
          placeholder="e.g. Jane Appleseed"
          required
          onChange={(e) => {
            setCardName(e.target.value);
          }}
        ></input>
        <p className="error-message">{errors.name ? "Can't be blank." : null}</p>
      </div>
      <div id="input-container" className="relative flex flex-col gap-2 lg:w-[50%]">
        <label className=" text-sm tracking-widest">CARD NUMBER</label>
        <input
          onChange={(e) => {
            setCardNumber(e.target.value);
          }}
          className={`${errors.number ? "input-error" : "border border-gray-200"}   lg:cursor-pointer  rounded-md px-4 py-2`}
          type="text"
          maxLength={16}
          placeholder="e.g. 1234 5678 9123 0000"
          required
        ></input>
        <p className="error-message">{errors.number ? "Can't be blank." : null}</p>
      </div>
      <div
        id="details-input-container"
        className="flex flex-col gap-2 lg:w-[50%]"
      >
        <div id="row-1" className="flex flex-row">
          <p className="w-[50%] text-sm tracking-widest">EXP. DATE (MM/YY)</p>
          <p className="w-[50%] text-sm tracking-widest">CVC</p>
        </div>
        <div id="row-2" className="relative flex flex-row gap-2">
          <input
            onChange={(e) =>
              setExpiryDate((prevState) => ({
                ...prevState,
                month: e.target.value,
              }))
            }
            maxLength={2}
            className={`${errors.month ? "input-error" : "border border-gray-200"} lg:cursor-pointer w-[25%] rounded-md  px-4 py-2`}
            type="text"
            placeholder="MM"
            required
          ></input>
          <p></p>
          <input
            onChange={(e) =>
              setExpiryDate((prevState) => ({
                ...prevState,
                year: e.target.value,
              }))
            }
            maxLength="2"
            className={`${errors.year ? "input-error" : "border border-gray-200"} lg:cursor-pointer w-[25%] rounded-md  px-4 py-2`}
            type="text"
            placeholder="YY"
            required
          ></input>
          <input
            onChange={(e) => {
              setCVC(e.target.value);
            }}
            maxLength={3}
            className={`${errors.cVC ? "input-error" : "border border-gray-200"} lg:cursor-pointer  w-[50%] rounded-md  px-4 py-2`}
            type="text"
            placeholder="e.g. 123"
            required
          ></input>
        </div>
        <div className="relative flex flex-row w-[100%]">
            <p className="error-message w-[50%]">{errors.month || errors.year || errors.cVC ? "Can't be blank" : null}</p>
        </div>
      </div>
      <button
      type="button"
        className="bg-[#21092f] text-white py-3 rounded-md lg:w-[50%]"
        onClick={() => {
          validateAll();
        }}
      >
        Confirm
      </button>
    </form>
  );
};

export default Form;

import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState({
    month: "",
    year: "",
  });
  const [cvc, setCVC] = useState("");

  const [errors, setErrors] = useState({
    name: false,
    number: false,
    month: false,
    year: false,
    cVC: false,
  });

  useEffect(() => console.log(errors.name), [errors])

  function validateName() {
    if (cardName.trim() === "" || !/^[a-zA-z]+$/.test(cardName)) {
      setErrors((prevState) => ({
        ...prevState, name: true,
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState, name: false,
      }));
    }
  }

  function validateNumber() {
    if (cardNumber.trim() === "" || /^[0-9]+$/.test(cardNumber)) {
      setErrors((prevState) => ({
        ...prevState, number: true,
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState, number: false,
      }));
    }
  }

  function validateMonth() {
    if (cardName.trim() === "" || /^[0-9]+$/.test(expiryDate.month)) {
      setErrors((prevState) => ({
        ...prevState, month: true,
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState, month: false,
      }));
    }
  }

  function validateYear() {
    if (cardName.trim() === "" || /^[0-9]+$/.test(expiryDate.year)) {
      setErrors((prevState) => ({
        ...prevState, year: true,
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState, year: false,
      }));
    }
  }

  function validateCVC() {
    if (cardName.trim() === "" || /^[0-9]+$/.test(expiryDate.month)) {
      setErrors((prevState) => ({
        ...prevState,cVC: true,
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,cVC: false,
      }));
    }
  }

  function validateAll() {
    validateName();
    validateNumber();
    validateMonth();
    console.log("Hola!")
    validateYear();
    validateCVC();
  }

  return (
    <div className="font-bodyFont lg:flex lg:flex-row lg:h-[100vh]">
      <Header
        cardName={cardName}
        cardNumber={cardNumber}
        expiryDate={expiryDate}
        cvc={cvc}
      />
      <Form
        setCardNumber={setCardNumber}
        setCardName={setCardName}
        setExpiryDate={setExpiryDate}
        setCVC={setCVC}
        validateAll={validateAll}
        errors={errors}
      />
    </div>
  );
}

export default App;

import React from "react";
import "./styles.css";
import Input from "./components/Input";
import TextInput from "./components/TextInput";

const numberRegexp = /^\d+$/;
const textRegexp = /^[A-Za-z]*$/;

export default function App() {
  const onChange = (value) => console.log(value, "only numbers");
  return (
    <div className="App">
      <Input regExp={numberRegexp} onChange={onChange} />
      <TextInput regExp={textRegexp} onChange={onChange} />
    </div>
  );
}

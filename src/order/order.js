import React, { useState } from "react";
import Button from "/src/button/button";
import { Label } from "./styled";

function Order() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // переменные состояния
  const onChange = (evt, setChange) => setChange(evt.target.value);
  // Сделаем поля формы управляемыми, добавив к ним props value и onChange:
  const isButtonEnable = name && phone && address;
  // добав пров на заплн формы
  return (
    <form>
      <Label>
        Имя:{" "}
        <input
          name="name"
          value={name}
          onChange={(evt) => onChange(evt, setName)}
        />
      </Label>
      <Label>
        Телефон:{" "}
        <input
          name="phone"
          type="tel"
          value={phone}
          onChange={(evt) => onChange(evt, setPhone)}
        />
      </Label>
      <Label>
        Адрес доставки:{" "}
        <input
          name="address"
          value={address}
          onChange={(evt) => onChange(evt, setAddress)}
        />
      </Label>
      {/* <Button>Оформить</Button> */}
      <Button
        disabled={!isButtonEnable}
        onClick={(evt) => {
          evt.preventDefault();
          console.log(
            `${name}, спасибо за заказ. Мы доставим его как можно скорее по адресу: ${address}`
          );
        }}
      >
        Оформить
      </Button>
      {/* Добавим обработчик на кнопку и сохраним её неактивной до тех пор, пока все поля не будут заполнены */}
    </form>
  );
}

export default Order;

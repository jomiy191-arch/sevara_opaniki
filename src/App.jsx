import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");

  const SendMessage = (e) => {
    e.preventDefault();

    const token = "BOT_TOKEN";
    const chatId = "CHAT_ID";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const text = `Yangi xabar:\nIsm: ${name}\nFamiliya: ${lastname}\nTel: ${phone}`;

    axios.post(url, {
      chat_id: chatId,
      text
    })
    .then(() => {
      alert("Yuborildi!");
      setName("");
      setLastname("");
      setPhone("");
    })
    .catch(() => {
      alert("Xatolik!");
    });
  };

  return (
    <div className="form-container">
      <h2>Ro'yxatdan o'tish</h2>
      <form onSubmit={SendMessage}>
        <input
          type="text"
          placeholder="Ism"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Familiya"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="tel"
          placeholder="+998901234567"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Jo'natish</button>
      </form>
    </div>
  );
};

export default App;

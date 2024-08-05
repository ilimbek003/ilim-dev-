import React, { useState, useEffect } from "react";
import { data } from "../../data/data";
import { NavLink, useNavigate } from "react-router-dom";

const Box = () => {
  const navigate = useNavigate();
  const [showBlock, setShowBlock] = useState(false);
  const [show, setShow] = useState(false);
  const [showFlex, setShowFlex] = useState(false);
  const [nome, setNome] = useState(false);
  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShowBlock(true);
    }, 2500);
    const timeout2 = setTimeout(() => {
      setShow(true);
    }, 2000);
    const timeout3 = setTimeout(() => {
      setShowFlex(true);
    }, 2800);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);
  const navigateHandler = () => {
    setTimeout(() => {
      navigate("/about-us");
    }, 1000);
  };
  return (
    <>
      <div className={show === false ? "box_active" : "box"}>
        <h1 className="title_box">Kaiyrbekov Ilimbek</h1>
        <span className="subtitle_box">Frontend Developer</span>
      </div>
      <div className={showBlock === false ? "block_active" : "block"}>
        <p className="profile">
          Я фронтенд-разработчик создаю красивые, интерактивные и функциональные
          веб-интерфейсы.
        </p>
      </div>
      <div
        className={showFlex === false ? "flex_active" : "flex"}
        onClick={() => setNome(!nome)}
      >
        {data.map((item) => (
          <div
            onClick={navigateHandler}
            key={item.id}
            className={nome === false ? "hover" : "hover_none"}
          >
            <div className="about"></div>
            <span className="item">{item.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Box;

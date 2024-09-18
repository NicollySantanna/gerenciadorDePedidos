import React, { useEffect, useState } from "react";

import CarrouselFilter from "./components/CarrouselFilter/CarrouselFilter";
import InputSearch from "./components/Input/InputSearch";
import CardFood from "./components/CardFood/CardFood";
import Modal from "./components/Modal/Modal";

import './index.css'
import Logo from './components/Logo/Logo'
import './styles/global.css'

function App() {

  //MODAL
  const [selectedFood, setSelectedFood] =  useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (food) => {
    setSelectedFood(food)
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedFood(null)
  }

  const [foods, setFoods] = useState([])
  const [cardFoods, setcardFoods] = useState([])

  useEffect(() => {
    fetch('http://localhost:5091/foods')
    .then(response => response.json())
    .then(data => setFoods(data))
    .catch(error => console.error('Erro na busca dos dados', error))
  }, [])

  useEffect(() => {
    fetch('http://localhost:5091/cardFoods')
    .then(response => response.json())
    .then(data => setcardFoods(data))
    .catch(error => console.error('Erro na busca dos dados', error))
  }, [])

  return (
    <>
    <Logo/>
    <div className="search">
    <InputSearch/>
    </div>
      <div className="containerFilter">
        {foods.map((food) => (
          <CarrouselFilter
          key={food.id}
          imageSrc={food.imageSrc}
          nameFood={food.nameFood}
          text={`${food.category}`}
          />
        ) )}
      </div>

    <div className="cards">
      {cardFoods.map((card) => (
      <CardFood
        key={card.id}
        cardImg={card.cardImg}
        nameFood={card.nameFood}
        priceFood={card.priceFood}
        openModal={() => openModal(card)}
      />
    ))}
    </div>

    {selectedFood && (
      <Modal
        food={selectedFood}
        closeModal={closeModal}
      />
    )}
    </>
  );
}

export default App;

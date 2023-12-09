import React, { useState, useEffect } from "react";
import {
  StyledCard,
  StyledHeading,
  MainInfo,
  ImageContainer,
  FeaturesText,
  StyledButton,
  StyledModalContainer,
  ModalHeading,
  ModalFeaturesText,
  ModalDescription,
  ModalAccessories,
  ModalAccessoriesText,
  StyledModal,
  RentalConditions,
  Condition,
  StyledContactButton,
} from "./CarCard.styled";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CarCard = ({ data, index }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isFavourite, setIsFavourite] = useState(
    JSON.parse(localStorage.getItem("favourites")).some((obj) => {
      return JSON.stringify(obj) === JSON.stringify(data);
    })
  );

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalIsOpen]);

  const convertToDecimal = (number) => {
    let resultString = parseInt(number / 1000);
    resultString += "," + (number % 1000);
    return resultString;
  };

  const toggleFavourite = () => {
    if (!isFavourite) {
      setIsFavourite(true);
      localStorage.setItem(
        "favourites",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("favourites")),
          data,
        ])
      );
    } else {
      setIsFavourite(false);
      const updatedFavorites = JSON.parse(
        localStorage.getItem("favourites")
      ).filter((obj) => JSON.stringify(obj) !== JSON.stringify(data));
      localStorage.setItem("favourites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <>
      <StyledCard>
        <ImageContainer img={data.img ? data.img : data.photoLink}>
          {isFavourite ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              onClick={toggleFavourite}
            >
              <path
                d="M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z"
                fill="#3470FF"
                stroke="#3470FF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              onClick={toggleFavourite}
            >
              <path
                d="M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z"
                stroke="white"
                strokeOpacity="0.8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </ImageContainer>
        <MainInfo>
          <StyledHeading>
            {data.make} {index < 3 ? <span>{data.model}</span> : null},{" "}
            {data.year}
          </StyledHeading>
          <p>{data.rentalPrice}</p>
        </MainInfo>
        <FeaturesText>
          <p>{data.address.split(",")[1]}</p>
          <p>{data.address.split(",")[2]}</p>
          <p>{data.rentalCompany}</p>
          <p>{data.type}</p>
          <p>{data.model}</p>
          <p>{data.id}</p>
          <p>{data.functionalities[0]}</p>
        </FeaturesText>
        <StyledButton onClick={() => openModal()}>Learn More</StyledButton>
      </StyledCard>
      <StyledModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Car Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: 0,
          },
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(18, 20, 23, 0.50)",
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="50"
          height="50"
          fill="none"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          onClick={closeModal}
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        <StyledModalContainer>
          <img
            src={data.img ? data.img : data.photoLink}
            alt={`${data.make} ${data.model}`}
          />
          <ModalHeading>
            {data.make} <span>{data.model}</span>, {data.year}
          </ModalHeading>
          <ModalFeaturesText>
            <p>{data.address.split(",")[1]}</p>
            <p>{data.address.split(",")[2]}</p>
            <p>Id : {data.id}</p>
            <p>Year : {data.year}</p>
            <p>Type: {data.type}</p>
            <p>Fuel Consumption : {data.fuelConsumption}</p>
            <p>Engine Size : {data.engineSize}</p>
          </ModalFeaturesText>
          <ModalDescription>{data.description}</ModalDescription>
          <ModalAccessories>
            {" "}
            <p>Accessories and functionalities:</p>
            <ModalAccessoriesText>
              {data.functionalities.map((feature) => (
                <p>{feature}</p>
              ))}
              {data.accessories.map((accessory) => (
                <p>{accessory}</p>
              ))}
            </ModalAccessoriesText>
          </ModalAccessories>
          <p style={{ marginTop: 0 }}>Rental Conditions: </p>
          <RentalConditions>
            {data.rentalConditions.split("\n").map((condition) => {
              return <Condition>{condition}</Condition>;
            })}
            <Condition>
              Mileage : <span>{convertToDecimal(data.mileage)}</span>
            </Condition>
            <Condition>
              Price : <span>{data.rentalPrice}</span>
            </Condition>
          </RentalConditions>
          <StyledContactButton>Rental Car</StyledContactButton>
        </StyledModalContainer>
      </StyledModal>
    </>
  );
};

export default CarCard;

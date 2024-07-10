import React from 'react';
import './styles.css';


interface ErrorButtonProps {
  onError: () => void;
}


const ErrorButton: React.FC<ErrorButtonProps> = ({onError}) => {

  const handleClick = () => {
    onError();
  };

  return (


    <button className="error-button" onClick={handleClick}>
         Crash the app
    </button>


    );




};



export default ErrorButton;

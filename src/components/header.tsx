import React from "react";
import "./Header.css";

interface HeaderProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  backgroundImage?: string; // optional background customization
  children?: React.ReactNode; // allows inserting custom content
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
  backgroundImage,
  children,
}) => {
  return (
    <header
      className="hero-section"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }
          : {}
      }
    >
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}

        {buttonText && (
          <button className="hero-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}

        {/* You can pass custom children like images, extra buttons, etc. */}
        {children}
      </div>
    </header>
  );
};

export default Header;

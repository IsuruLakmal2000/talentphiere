import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

interface HeaderProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
  backgroundImage?: string; // optional background customization
  children?: React.ReactNode; // allows inserting custom content
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  onButtonClick,
  backgroundImage,
  children,
}) => {
  return (
    <header
      className="home-page-hero"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }
          : {}
      }
    >
      <div className="home-page-hero-content">
        <h1 className="home-page-hero-title">{title}</h1>
        {subtitle && <p className="home-page-hero-subtitle">{subtitle}</p>}

        {buttonText && buttonLink && (
          <Link to={buttonLink} className="home-page-hero-button">
            {buttonText}
          </Link>
        )}

        {buttonText && onButtonClick && !buttonLink && (
          <button className="home-page-hero-button" onClick={onButtonClick}>
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

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
        <motion.h1 
          className="home-page-hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            className="home-page-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>
        )}

        {buttonText && buttonLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link to={buttonLink} className="home-page-hero-button">
              {buttonText}
            </Link>
          </motion.div>
        )}

        {buttonText && onButtonClick && !buttonLink && (
          <motion.button 
            className="home-page-hero-button" 
            onClick={onButtonClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {buttonText}
          </motion.button>
        )}

        {/* You can pass custom children like images, extra buttons, etc. */}
        {children}
      </div>
    </header>
  );
};

export default Header;

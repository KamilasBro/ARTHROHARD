import React, { useState, useEffect } from "react";

import hamburger from "../../images/hamburger.png";
import closeBtn from "../../images/close.png";

import "./navbar.scss";

export default function Navbar() {
  // Variable that determines which section is active
  const [currentSection, setCurrentSection] = useState<string>("home");
  // Boolean that determines if the mobile navbar is active
  const [isMobileActive, setIsMobileActive] = useState<boolean>(false);

  // Function to scroll to the selected section
  function handleScroll(element: string) {
    // If the mobile navbar is active, deactivate it
    if (isMobileActive) {
      handleClose();
    }
    // Scroll logic
    // Since the navbar has a fixed position,
    // it will cover some of the page after scrolling,
    // so we subtract its height from the element's offsetTop
    document.documentElement.scrollTop =
      (document.getElementById(element) as HTMLDivElement).offsetTop -
      (document.querySelector(".navbar") as HTMLDivElement).offsetHeight;
  }

  useEffect(() => {
    // Add an event listener that will update currentSection
    // based on the user's scroll position
    document.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar") as HTMLDivElement;
      const distinction = document.getElementById(
        "distinction"
      ) as HTMLDivElement;
      const composition = document.getElementById(
        "composition"
      ) as HTMLDivElement;
      const products = document.getElementById("products") as HTMLDivElement;
      // For a better visual effect,
      // we don't need to scroll until the section touches the navbar
      let navbarMultiply = 2.5;

      if (
        window.scrollY >= 0 &&
        window.scrollY <
          distinction.offsetTop - navbar.offsetHeight * navbarMultiply
      ) {
        setCurrentSection("home");
      } else if (
        window.scrollY >=
          distinction.offsetTop - navbar.offsetHeight * navbarMultiply &&
        window.scrollY <
          composition.offsetTop - navbar.offsetHeight * navbarMultiply
      ) {
        setCurrentSection("distinction");
      } else if (
        window.scrollY >=
          composition.offsetTop - navbar.offsetHeight * navbarMultiply &&
        window.scrollY <
          products.offsetTop - navbar.offsetHeight * navbarMultiply
      ) {
        setCurrentSection("composition");
      } else {
        setCurrentSection("products");
      }
    });
  }, []);

  // Preventive event that unlocks scrolling when switching to
  // the computer responsiveness threshold with an active mobile navbar
  window.onresize = () => {
    if (isMobileActive && window.innerWidth > 1024) {
      setIsMobileActive(false);
    }
  };

  // Every time the mobile navbar is active,
  // scrolling is blocked to some extent, somewhat forcing us to use the navbar
  useEffect(() => {
    const htmlDisableScroll = document.querySelector("html");
    if (htmlDisableScroll) {
      if (isMobileActive) {
        htmlDisableScroll.style.overflowY = "hidden";
      } else {
        htmlDisableScroll.style.overflowY = "visible";
      }
    }
  }, [isMobileActive]);

  // For a visual effect, we add an animation to hide
  // and a timeout to deactivate the mobile navbar
  function handleClose() {
    const mobileNavbar = document.getElementById("mobileNavbar");
    if (mobileNavbar) {
      mobileNavbar.style.animation = "mobileAnim2 300ms";
      setTimeout(() => {
        setIsMobileActive(false);
      }, 250);
    }
  }

  return (
    <>
      <nav className="navbar" id="navbar">
        <div
          className="nav-logo"
          onClick={() => {
            document.documentElement.scrollTop = 0;
          }}
        >
          arthro<span style={{ color: "#AD4844" }}>hard</span>
        </div>
        <img
          src={hamburger}
          alt="hamburger"
          className="hamburger"
          onClick={() => {
            setIsMobileActive(true);
          }}
        />
        <ul className="nav-menu">
          <li
            onClick={() => {
              handleScroll("distinction");
            }}
            style={
              currentSection === "distinction" ? { borderColor: "#111111" } : {}
            }
          >
            co nas wyróżnia
          </li>
          <li
            onClick={() => {
              handleScroll("composition");
            }}
            style={
              currentSection === "composition" ? { borderColor: "#111111" } : {}
            }
          >
            skład
          </li>
          <li
            onClick={() => {
              handleScroll("products");
            }}
            style={
              currentSection === "products" ? { borderColor: "#111111" } : {}
            }
          >
            produkty
          </li>
        </ul>
      </nav>
      {/* Conditional rendering of the mobile navbar */}
      {isMobileActive && (
        <nav className="mobileNavbar" id="mobileNavbar">
          <div className="menu">
            <img
              src={closeBtn}
              alt="close"
              onClick={() => {
                handleClose();
              }}
            />
            <div className="mobileLogo">
              <span
                onClick={() => {
                  document.documentElement.scrollTop = 0;
                  handleClose();
                }}
              >
                arthro<span style={{ color: "#AD4844" }}>hard</span>
              </span>
            </div>
            <ul>
              <li>
                <span
                  onClick={() => {
                    handleScroll("distinction");
                  }}
                  style={
                    currentSection === "distinction"
                      ? { borderColor: "#111111" }
                      : {}
                  }
                >
                  co nas wyróżnia
                </span>
              </li>
              <li>
                <span
                  onClick={() => {
                    handleScroll("composition");
                  }}
                  style={
                    currentSection === "composition"
                      ? { borderColor: "#111111" }
                      : {}
                  }
                >
                  skład
                </span>
              </li>
              <li>
                <span
                  onClick={() => {
                    handleScroll("products");
                  }}
                  style={
                    currentSection === "products"
                      ? { borderColor: "#111111" }
                      : {}
                  }
                >
                  produkty
                </span>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}

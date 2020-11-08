import React from "react";
import styled from "styled-components";

const SideBar = () => {
  return (
    <StyledBar className="main_sidebar">
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <ul class="menu__box">
          <li>
            <a class="menu__item" href="#">
              Sale
            </a>
          </li>
          <li>
            <a class="menu__item" href="#">
              Furniture
            </a>
          </li>
          <li>
            <a class="menu__item" href="#">
              Lighting
            </a>
          </li>
          <li>
            <a class="menu__item" href="#">
              Decoration
            </a>
          </li>
          <li>
            <a class="menu__item" href="#">
              Accessories
            </a>
          </li>
        </ul>
      </div>
    </StyledBar>
  );
};

const StyledBar = styled.div`
  height: 100vh;
  background-color: #003151;
  width: 33.33%;

  /********************* Hamburger ********************/

  #menu__toggle {
    opacity: 0;
  }

  #menu__toggle:checked ~ .menu__btn > span {
    transform: rotate(45deg);
  }
  #menu__toggle:checked ~ .menu__btn > span::before {
    top: 0;
    transform: rotate(0);
    background: #003151;
  }
  #menu__toggle:checked ~ .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
    background: #003151;
  }
  #menu__toggle:checked ~ .menu__box {
    visibility: visible;
    left: 0;
  }

  .menu__btn {
    display: flex;
    align-items: center;
    position: fixed;
    top: 20px;
    left: 20px;

    width: 26px;
    height: 26px;

    cursor: pointer;
    z-index: 1;
  }

  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    display: block;
    position: absolute;

    width: 100%;
    height: 2px;

    background-color: #fff;

    transition-duration: 0.25s;
  }
  .menu__btn > span::before {
    content: "";
    top: -8px;
  }
  .menu__btn > span::after {
    content: "";
    top: 8px;
  }

  .menu__box {
    display: block;
    position: fixed;
    visibility: hidden;
    top: 0;
    left: -100%;

    width: 33.33%;
    height: 100%;

    margin: 0;
    padding: 80px 0;

    list-style: none;

    background-color: #eceff1;
    box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);

    transition-duration: 0.25s;
  }

  .menu__item {
    display: block;
    padding: 12px 24px;

    color: #003151;

    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 600;

    text-decoration: none;

    transition-duration: 0.25s;
  }
  .menu__item:hover {
    background-color: #cfd8dc;
  }
`;

export default SideBar;

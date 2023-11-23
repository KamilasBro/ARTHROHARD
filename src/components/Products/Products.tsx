import React, { useState, useEffect, useRef } from "react";

import arrowImg from "../../images/arrow.png";

import Popup from "../Popup/Popup";

import "./products.scss";

export default function Products() {
  const [isSelectActive, setIsSelectActive] = useState<boolean>(false);
  interface Product {
    id: number;
    name: string;
    value: number;
  }
  const [products, setProducts] = useState<Product[]>([]);
  const [productsLength, setProductsLength] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [didUserScrolled, setDidUserScrolled] = useState<boolean>(false);
  const [APIprops, setAPIprops] = useState({
    pageNumber: 1 as number,
    pageSize: 50 as number,
  });
  const [popupProps, setPopupProps] = useState({
    id: 0,
    name: "name",
    value: 0,
  });
  const [isPopupActive, setIsPopupActive] = useState<boolean>(false);
  const productList = document.getElementById("products-list") as HTMLElement;

  useEffect(() => {
    if (isLoading && didUserScrolled) {
      fetch(
        `https://brandstestowy.smallhost.pl/api/random?pageNumber=${APIprops.pageNumber}&pageSize=${APIprops.pageSize}`
      )
        .then((res) => res.json())
        .then((resdata) => {
          setProducts(resdata.data);
          setProductsLength(resdata.totalItems);
          setIsLoading(false);
        })
        .catch(() => {
          alert("Fetching failed");
          setIsLoading(false);
        });
    }
  }, [isLoading, didUserScrolled, APIprops]);

  function handleSelect(event: React.MouseEvent<HTMLLIElement>) {
    const selectedPageSize = event.currentTarget.innerText;
    if (selectedPageSize !== null) {
      const pageSize = parseInt(selectedPageSize, 10);
      setAPIprops((prevState) => {
        return {
          ...prevState,
          pageSize: pageSize,
        };
      });
      setIsSelectActive(false);
      setIsLoading(true);
    }
  }

  window.onscroll = () => {
    setIsSelectActive(false);
  };

  useEffect(() => {
    const selectBtn = document.getElementById("max-products-select");
    const selectList = document.getElementById("max-products-select-list");
    if (selectBtn && selectList) {
      selectList.style.width = `${selectBtn.clientWidth - 2}px`;
    }
  }, [isSelectActive]);

  const productListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (productListRef.current) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      const callback: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDidUserScrolled(true);
            observer.unobserve(entry.target);
          }
        });
      };

      const observer = new IntersectionObserver(callback, options);
      observer.observe(productListRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    const htmlDisableScroll = document.querySelector("html");
    if (htmlDisableScroll) {
      if (isPopupActive) {
        htmlDisableScroll.style.overflowY = "hidden";
      } else {
        htmlDisableScroll.style.overflowY = "visible";
      }
    }
  }, [isPopupActive]);

  return (
    <>
      <section className="products" id="products">
        <div className="products-wrap">
          <div className="max-products">
            <div className="max-products-text">liczba produktów na stronie</div>
            <div className="select-wrap">
              <div
                className="max-products-select"
                id="max-products-select"
                onClick={() => {
                  setIsSelectActive((prevState) => !prevState);
                }}
              >
                <p>{APIprops.pageSize}</p>
                <img src={arrowImg} alt="arrow" />
              </div>
              {isSelectActive && (
                <ul
                  className="max-products-select-list"
                  id="max-products-select-list"
                >
                  <li onClick={handleSelect}>50</li>
                  <li onClick={handleSelect}>100</li>
                  <li onClick={handleSelect}>150</li>
                  <li onClick={handleSelect}>200</li>
                  <li onClick={handleSelect}>250</li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="products-wrap">
          <ul
            className="products-list"
            id="products-list"
            ref={productListRef}
            onScroll={() => {
              const scrollableHeight =
                productList.scrollHeight - productList.clientHeight;
              if (productList?.scrollTop === scrollableHeight) {
                if (isLoading === false && APIprops.pageSize < productsLength) {
                  setAPIprops((prevState) => {
                    return {
                      ...prevState,
                      pageSize: prevState.pageSize + 50,
                    };
                  });
                  setTimeout(() => {
                    productList.scrollTo(0, scrollableHeight);
                  }, 100);
                  setIsLoading(true);
                }
              }
            }}
          >
            {!isLoading &&
              didUserScrolled &&
              products.map((product) => {
                return (
                  <li
                    className="products-list-item"
                    key={product.id}
                    onClick={() => {
                      setPopupProps(product);
                      setIsPopupActive(true);
                    }}
                  >
                    ID: {product.id}
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
      {isPopupActive && (
        <Popup setIsPopupActive={setIsPopupActive} popupProps={popupProps} />
      )}
    </>
  );
}

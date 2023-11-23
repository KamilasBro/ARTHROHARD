import bannerImg from "../../images/bannerImg.png";
import "./banner.scss";
export default function Banner() {
  //nothing special
  return (
    <section className="banner" id="banner">
      <img src={bannerImg} className="banner-img" alt="banner-img" />
      <div className="banner-text">
        <h1>
          arthro<span>hard</span>
        </h1>
        <h3>
          Lab-V Arthrohard Preparat
          <br /> na wsparcie stawów dla psa i kota
        </h3>
        <p>
          Arthrohard to dobrze przyswajalny suplement diety w formie syropu,
          <br />
          stworzony z myślą o zdrowiu stawów Twojego psa lub kota.
        </p>
        <button className="banner-btn">Kup teraz</button>
      </div>
    </section>
  );
}

import item1Img from "../../images/item1.png";
import item2Img from "../../images/item2.png";
import item3Img from "../../images/item3.png";
import shapes2 from "../../images/shapes2.png";

import "./distinction.scss";
//nothing special aswell
export default function Distinction() {
  return (
    <section className="distinction" id="distinction">
      <h1 className="section-title">Co wyróżnia nasz preparat</h1>
      <hr className="section-title-hr" />
      <img src={shapes2} alt="shapes2" className="shapes2" />
      <div className="distinction-items">
        <div className="distinction-item">
          <div className="distinction-item-text1">
            Innowacyjny dodatek -<br />
            Czarciego Pazura
          </div>
          <hr className="section-title-hr" />
          <div className="distinction-item-text2">
            Zapewnia dodatkowe wsparcie w zwalczaniu stanów bólowych i
            zapalnych. Skoncentrowane składniki aktywne, opracowane we
            współpracy z lekarzami weterynarii, przynoszą szybkie i zauważalne
            efekty, szczególnie korzystne dla zwierząt z poważnymi problemami
            stawowymi.
          </div>
          <img src={item1Img} alt="item1" />
        </div>
        <div className="distinction-item">
          <div className="distinction-item-text1">
            Wygoda -<br />
            dwa sposoby podawania
          </div>
          <hr className="section-title-hr" />
          <div className="distinction-item-text2">
            <div className="distinction-item-number">
              <div>1</div>
              <div>Bezpośrednio do pyszczka</div>
            </div>
            <div className="distinction-item-number">
              <div>2</div>
              <div>Zmieszany z karmą</div>
            </div>
          </div>
          <img src={item2Img} alt="item1" />
        </div>
        <div className="distinction-item">
          <div className="distinction-item-text1">
            Skuteczność -<br />
            skoncentrowana dawka
          </div>
          <hr className="section-title-hr" />
          <div className="distinction-item-text2">
            <span style={{ fontWeight: 450 }}>
              Tylko jedna porcja dziennie.
            </span>
            <br />
            To nie tylko wygoda, ale również gwarancja, że Twoje zwierzę
            otrzymuje wszystko, czego potrzebuje, aby cieszyć się zdrowiem i
            aktywnością na długo. Skorzystaj z zalet Arthrohard i zobacz różnicę
            w komforcie życia swojego zwierzęcia.
          </div>
          <img src={item3Img} alt="item1" />
        </div>
      </div>
    </section>
  );
}

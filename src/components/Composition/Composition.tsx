import {
  Parallax as ParallaxComponent,
  Background as BackgroundComponent,
} from "react-parallax";

import parallaxImg from "../../images/parallax.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as CarouselComponent } from "react-responsive-carousel";

import "./composition.scss";
// Here, I realized that there's no point in reinventing the wheel, so I leveraged
// the power of React by using custom components.
// For more information, check the links below.
// https://www.npmjs.com/package/react-parallax efekt paralaksy
// https://github.com/leandrowd/react-responsive-carousel galeria na mobilne rozdzielczości
export default function Composition() {
  //due to propably changes in this custom components i workaround with them with any type
  const Parallax: any = ParallaxComponent;
  const Background: any = BackgroundComponent;
  const Carousel: any = CarouselComponent;
  return (
    <section className="composition" id="composition">
      <h1 className="section-title">Skład w 5 ml</h1>
      <hr className="section-title-hr" />
      <h3>Co dają poszczególne składniki:</h3>
      <span className="composition-desktop">
        <div className="composition-wrap">
          <Parallax strength={-175} className="parallax-content">
            <Background className="custom-bg">
              <img src={parallaxImg} alt="parallax" className="parallax-img" />
            </Background>
            <div className="composition-list">
              <div className="grid-item">
                <div className="composition-wrap">
                  <div className="composite-circle"></div>
                </div>
                <div className="composite-name">
                  <span>Siarczan glukozaminy</span>
                </div>
                <div className="composite-amount">650 mg</div>
                <div className="composite-text">
                  Glukozamina jest naturalnym składnikiem chrząstki. Dodatek
                  glukozaminy przyczynia się do zwiększenia produkcji
                  glikozaminoglikanów (m.in. siarczanu keratanu, heparanu, kwasu
                  hialuronowego), które pomagają w odbudowie chrząstki, co jest
                  szczególnie korzystne dla zwierząt ze zmianami
                  zwyrodnieniowymi stawów.
                </div>
              </div>
              <div className="grid-item">
                <div className="composition-wrap">
                  <div className="composite-circle"></div>
                </div>
                <div className="composite-name">
                  <span>Siarczan chondroityny</span>
                </div>
                <div className="composite-amount">300 mg</div>
                <div className="composite-text">
                  Chondroityna, podobnie jak glukozamina, jest składnikiem
                  chrząstki. Chondroityna pomaga zwalczać enzymy, które niszczą
                  chrząstkę, a także pomaga chrząstce zatrzymać wodę, co jest
                  ważne dla jej sprężystości i absorpcji wstrząsów.
                </div>
              </div>
              <div className="grid-item">
                <span className="composition-wrap">
                  <div className="composite-circle"></div>
                </span>
                <div className="composite-name">
                  <span>Kwas hialuronowy</span>
                </div>
                <div className="composite-amount">50 mg</div>
                <div className="composite-text">
                  Kwas hialuronowy jest kluczowym składnikiem płynu stawowego,
                  który działa jak smar i amortyzator dla stawów. Suplementacja
                  kwasem hialuronowym może pomóc w utrzymaniu prawidłowej
                  objętości i konsystencji płynu stawowego.
                </div>
              </div>
              <div className="grid-item">
                <button className="composition-btn">Kup teraz</button>
              </div>
              <div className="grid-item">
                <span className="composition-wrap">
                  <div className="composite-circle"></div>
                </span>
                <div className="composite-name">
                  <span>Czarci pazur</span>
                </div>
                <div className="composite-amount">250 mg</div>
                <div className="composite-text">
                  Czarci pazur jest rośliną, która ma właściwości przeciwzapalne
                  i przeciwbólowe. Może to pomóc zwierzętom, które doświadczają
                  bólu i stanu zapalnego związanego z problemami ze stawami.
                </div>
              </div>
              <div className="grid-item">
                <span className="composition-wrap">
                  <div className="composite-circle"></div>
                </span>
                <div className="composite-name">
                  <span>Witamina C</span>
                </div>
                <div className="composite-amount">50 mg</div>
                <div className="composite-text">
                  Witamina C jest potężnym przeciwutleniaczem, który może pomóc
                  w ochronie stawów poprzez neutralizację wolnych rodników,
                  które mogą uszkadzać chrząstkę. Ponadto, witamina C odgrywa
                  ważną rolę w produkcji kolagenu, kluczowego składnika
                  chrząstki.
                </div>
              </div>
              <div className="grid-item">
                <span className="composition-wrap">
                  <div className="composite-circle"></div>
                </span>
                <div className="composite-name">
                  <span>MSM</span>
                </div>
                <div className="composite-amount">250 mg</div>
                <div className="composite-text">
                  Metylosulfonylometan, czyli MSM, to naturalny związek siarki,
                  który pomaga w utrzymaniu zdrowych stawów poprzez zmniejszenie
                  stanu zapalnego i bólu. MSM może również pomagać w produkcji
                  kolagenu, co przyczynia się do zdrowia chrząstki stawowej.
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      </span>
      <span className="composition-mobile">
        <div className="composition-mobile-inner">
          <Carousel showThumbs={false} showStatus={false} showArrows={false}>
            <div className="grid-item">
              <div className="composition-wrap">
                <div className="composite-circle"></div>
              </div>
              <div className="composite-name">
                <span>Siarczan glukozaminy</span>
              </div>
              <div className="composite-amount">650 mg</div>
              <div className="composite-text">
                Glukozamina jest naturalnym składnikiem chrząstki. Dodatek
                glukozaminy przyczynia się do zwiększenia produkcji
                glikozaminoglikanów (m.in. siarczanu keratanu, heparanu, kwasu
                hialuronowego), które pomagają w odbudowie chrząstki, co jest
                szczególnie korzystne dla zwierząt ze zmianami zwyrodnieniowymi
                stawów.
              </div>
            </div>
            <div className="grid-item">
              <div className="composition-wrap">
                <div className="composite-circle"></div>
              </div>
              <div className="composite-name">
                <span>Siarczan chondroityny</span>
              </div>
              <div className="composite-amount">300 mg</div>
              <div className="composite-text">
                Chondroityna, podobnie jak glukozamina, jest składnikiem
                chrząstki. Chondroityna pomaga zwalczać enzymy, które niszczą
                chrząstkę, a także pomaga chrząstce zatrzymać wodę, co jest
                ważne dla jej sprężystości i absorpcji wstrząsów.
              </div>
            </div>
            <div className="grid-item">
              <span className="composition-wrap">
                <div className="composite-circle"></div>
              </span>
              <div className="composite-name">
                <span>Kwas hialuronowy</span>
              </div>
              <div className="composite-amount">50 mg</div>
              <div className="composite-text">
                Kwas hialuronowy jest kluczowym składnikiem płynu stawowego,
                który działa jak smar i amortyzator dla stawów. Suplementacja
                kwasem hialuronowym może pomóc w utrzymaniu prawidłowej
                objętości i konsystencji płynu stawowego.
              </div>
            </div>
            <div className="grid-item">
              <span className="composition-wrap">
                <div className="composite-circle"></div>
              </span>
              <div className="composite-name">
                <span>Czarci pazur</span>
              </div>
              <div className="composite-amount">250 mg</div>
              <div className="composite-text">
                Czarci pazur jest rośliną, która ma właściwości przeciwzapalne i
                przeciwbólowe. Może to pomóc zwierzętom, które doświadczają bólu
                i stanu zapalnego związanego z problemami ze stawami.
              </div>
            </div>
            <div className="grid-item">
              <span className="composition-wrap">
                <div className="composite-circle"></div>
              </span>
              <div className="composite-name">
                <span>Witamina C</span>
              </div>
              <div className="composite-amount">50 mg</div>
              <div className="composite-text">
                Witamina C jest potężnym przeciwutleniaczem, który może pomóc w
                ochronie stawów poprzez neutralizację wolnych rodników, które
                mogą uszkadzać chrząstkę. Ponadto, witamina C odgrywa ważną rolę
                w produkcji kolagenu, kluczowego składnika chrząstki.
              </div>
            </div>
            <div className="grid-item">
              <span className="composition-wrap">
                <div className="composite-circle"></div>
              </span>
              <div className="composite-name">
                <span>MSM</span>
              </div>
              <div className="composite-amount">250 mg</div>
              <div className="composite-text">
                Metylosulfonylometan, czyli MSM, to naturalny związek siarki,
                który pomaga w utrzymaniu zdrowych stawów poprzez zmniejszenie
                stanu zapalnego i bólu. MSM może również pomagać w produkcji
                kolagenu, co przyczynia się do zdrowia chrząstki stawowej.
              </div>
            </div>
          </Carousel>
          <div className="btn-wrap">
            <button className="composition-btn">Kup teraz</button>
          </div>
        </div>
      </span>
    </section>
  );
}

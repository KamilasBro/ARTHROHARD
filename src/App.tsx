import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import Distinction from "./components/Distinction/Distinction"
import Composition from "./components/Composition/Composition"
import Products from "./components/Products/Products"
import Shapes1 from "./images/shapes1.png"

export default function App() {
// I tried not to pass any props to the components, so everything here is neatly self-contained.

// Originally, the plan was to encapsulate everything except the navbar within the <main> tag.
// However, there were a few complications, and I decided that this approach would be better as it is.
  return (
    <>
      <Navbar/>
      <img src={Shapes1} className="shapes1" alt="shapes1"/>
      <main>
        <section className="inner-main">
          <Banner/>
          <Distinction/>
        </section>
      </main>
      <Composition/>
      <Products/>
    </>
  )
}

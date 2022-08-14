import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import Title from "./Components/Title/Title";
import ProductList from "./Components/ProductList/ProductList";
import Category from "./Components/Category/Category";
import AboutCompany from "./Components/AboutCompany/AboutCompany";
import Testimonial from "./Components/Tesimonial/Testimonial";
import Subscribe from "./Components/Subscribe/Subscribe";
import Service from "./Components/Service/Service";
import Categories from "./Components/Categories/Categories";
import Contact from "./Components/Contact/Contact";
import Payment from "./Components/Payment/Payment";
import PaymentOption from "./Components/PaymentOption/PaymentOption";
import Successful from "./Components/Successful/Successful";
import Account from "./Components/Account/Account";
import Checkout from "./Components/Checkout/Checkout";
import ProductPage from "./Components/ProductPage/ProductPage";
import Footer1 from "./Components/Footer1/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Title />
      <ProductList />
      <Title />
      <Category />
      <AboutCompany />
      <ProductList />
      <Testimonial />
      <ProductList />
      <Subscribe />
      <Service />
      <Categories />
      <Contact />
      <Payment />
      <PaymentOption />
      <Successful />
      <Account />
      <ProductPage />
      <Footer1 />
      <Checkout />

      <Footer />
    </div>
  );
}

export default App;

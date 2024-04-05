import React from "react"
import "./../Crops/Grapes.css"
import Navbar from "../../Componant/Navbar/Navbar";
import Product7 from "../../Componant/Crops Product/Product7";
import Footer from "../../Componant/Footer/Footer";
import Banner2 from "../../Componant/Banner/Banner2";



// ProductCard component
const ProductCard = (props) => {
  const { imgSrc, productName, description, packSize, moreButtonText } = props;

  return (
    <div>
   <Navbar/>
   <div class="bannerhed">
    <img class="sugercaneimg" src="https://media.istockphoto.com/id/613254134/photo/field-with-ripe-corn.jpg?s=612x612&w=0&k=20&c=Jl_ZuR91hkq1kLEvZryHOofreuM-iY5xQ2e2ycGxdZs=" alt=".."/>
    <div class="text-containt">
        <h1 class="heading">MAIZE</h1>
        <p class="sub-heading">better harvest better tomorrow</p>
    </div>

  </div>

    <div className="mainbox">
      <div className="left-card">
        <h2 className="text-success ">{productName}</h2>
        <h3>PRODUCT</h3>
        <hr/>
        <p>By supplying proper nutrition it helps to overcome nutrient deficiencies at critical growth stages of the maize crop.</p>
        
        <h4 class="text-success mt-5">{packSize}</h4>
       
      </div>
      <div className="middle-card ps-4">
       <img className="productimg" src={imgSrc} alt=".." />
       <button>{moreButtonText}</button>
      </div>
      <div className="right-card">
        <h3>CONTENTS</h3>
        <hr/>
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>

   <Product7/>
    <Banner2/>
    <Footer/>
    </div>
  );
};

// Main component
const App = () => {
  return (
    <div>
      {/* Render product cards using ProductCard component */}
      <ProductCard
        imgSrc="https://ariesagro.com/wp-content/uploads/2022/12/Majorsol_Maize-1.png"
        productName="Majorsol Maize"
        description={[
          'Manganese as Mn : 2.0%',
          'Zinc as Zn : 2.5%',
          'Sulphur as S : 5.0%',
          'Potassium as K2O : 18.0%',
          'Phosphorus as P2O5 : 14.0%',
          'Copper as Cu : 1.0%',
          'Boron as B : 1.0%',
          'Iron as Fe : 2.5%'
        ]}
        packSize="Pack Size:- 5 kg/ 10 kg"
        moreButtonText="REDE MORE"
        
      />

    </div>
  );
};

export default App;

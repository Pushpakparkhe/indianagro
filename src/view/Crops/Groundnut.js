import React from "react"
import "./../Crops/Grapes.css"
import Navbar from "../../Componant/Navbar/Navbar";
import Product8 from "../../Componant/Crops Product/Product8";
import Footer from "../../Componant/Footer/Footer";
import Banner2 from "../../Componant/Banner/Banner2";



// ProductCard component
const ProductCard = (props) => {
  const { imgSrc, productName, description, packSize, moreButtonText } = props;

  return (
    <div>
   <Navbar/>
   <div class="bannerhed">
    <img class="sugercaneimg" src="https://media.istockphoto.com/id/184982250/photo/roasted-peanuts-in-shell-on-old-rustic-table.jpg?s=612x612&w=0&k=20&c=Xvftd-r9mnuYX6nu-lGQGwMc5hYQlhoE5zPfhI4p9b0=" alt=".."/>
    <div class="text-containt">
        <h1 class="heading">GROUNDNUT</h1>
        <p class="sub-heading">better harvest better tomorrow</p>
    </div>

  </div>

    <div className="mainbox">
      <div className="left-card">
        <h2 className="text-success ">{productName}</h2>
        <h3>PRODUCT</h3>
        <hr/>
        <p>Majorsol groundnut is used to improve kernel setting & better size of groundnut seed. It increase oil content of groundnut thereby helps to get quality production. It helps to increases disease resistance power in groundnut crop. </p>
        
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

   <Product8/>
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
        imgSrc="https://ariesagro.com/wp-content/uploads/2022/12/Majorsol_Groundnut-1.png"
        productName="Majorsol Groundnut"
        description={[
          'Water Soluble Phosphorus as P2O5 :10%',
          'Water soluble Potassium as K2O : 21%',
          'Boron as B : 0.3%',
          'Copper as Cu :1.0%',
         'Iron(Chelated) :1.0%',
          'Zinc(Chelated) :3.5%',
          'Manganese as Mn :4.0%',
          'Molybdenum as Mo :0.001%',
          'Sulphur as S :7.0%'
        ]}
        packSize="Pack Size:- 5 kg/ 10 kg"
        moreButtonText="REDE MORE"
        
      />

      {/* Repeat the above block for other products */}
    </div>
  );
};

export default App;

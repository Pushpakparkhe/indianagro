import React, { useState } from "react";
import "./../../Componant/Navbar/Navbar.css";
import Login from "./../../Componant/assets/login.png";
import Navbarimag from "./../../Componant/assets/kpng1.png";

function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  // Translations object
  const translations = {
    English: {
      crops: "Crops",
      productsServices: "Product & Services",
      micronutrients: "Micronutrients",
      waterSolubleNPK: "Water Soluble NPK",
      organicBioProduct: "Organic & Bio Product",
      cropSpecific: "Crop Specific",
      slowReleaseFertilizers: "Slow Release Fertilizers Pastilles",
      plantProtection: "Plant Protection",
      equipment: "Equipment",
      aboutUs: "About us",
      infrastructure: "Infrastructure",
      hydroponicConsultancy: "Hydroponic & Consultancy",
      blogsVideo: "Blogs & Video",
      contactUs: "Contact us",
      selectLanguage: "Select Language",
      login: "Login",
    },
    Hindi: {
      crops: "फसलें",
      productsServices: "उत्पाद और सेवाएं",
      micronutrients: "माइक्रोन्यूट्रिएंट्स",
      waterSolubleNPK: "पानी विलयनीय एनपीके",
      organicBioProduct: "कार्बनिक और जैविक उत्पाद",
      cropSpecific: "फसल विशिष्ट",
      slowReleaseFertilizers: "धीरे रिहाई उर्वरक पास्तिल्स",
      plantProtection: "पौधा संरक्षण",
      equipment: "उपकरण",
      aboutUs: "हमारे बारे में",
      infrastructure: "बुनियादी संरचना",
      hydroponicConsultancy: "हाइड्रोपोनिक और परामर्श",
      blogsVideo: "ब्लॉग और वीडियो",
      contactUs: "संपर्क करें",
      selectLanguage: "भाषा चुनें",
      login: "लॉग इन करें",
    },
    Marathi: {
      crops: "शेती",
      productsServices: "उत्पादन आणि सेवा",
      micronutrients: "मायक्रोन्यूट्रिएंट्स",
      waterSolubleNPK: "पाणी विलयनीय एनपीके",
      organicBioProduct: "कार्बनिक आणि जैविक उत्पाद",
      cropSpecific: "फसल विशिष्ट",
      slowReleaseFertilizers: "स्थगित रिहाव उर्वरक पॅस्टिल्स",
      plantProtection: "वनस्पती संरक्षण",
      equipment: "उपकरणे",
      aboutUs: "आमच्याबद्दल",
      infrastructure: "आधारसंरचना",
      hydroponicConsultancy: "हायड्रोपोनिक आणि सल्लागार",
      blogsVideo: "ब्लॉग आणि व्हिडिओ",
      contactUs: "संपर्क साधा",
      selectLanguage: "भाषा निवडा",
      login: "लॉग इन करा",
    },
  };

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <img className="navbar-img" src={Navbarimag} alt=".." />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 ">
            <li className="nav-item">
              <a className="nav-link text-black ms-2 me-2 " aria-disabled="true" href="..">
                {translations[selectedLanguage].crops}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-black" href=".." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {translations[selectedLanguage].productsServices}
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/micronutrients">{translations[selectedLanguage].micronutrients}</a></li>
                <li><a className="dropdown-item" href="/watersoluble">{translations[selectedLanguage].waterSolubleNPK}</a></li>
                <li><a className="dropdown-item" href="/organicproduct">{translations[selectedLanguage].organicBioProduct}</a></li>
                <li><a className="dropdown-item" href="/cropspecific">{translations[selectedLanguage].cropSpecific}</a></li>
                <li><a className="dropdown-item" href="/fertilizer">{translations[selectedLanguage].slowReleaseFertilizers}</a></li>
                <li><a className="dropdown-item" href="/plantprotection">{translations[selectedLanguage].plantProtection}</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link text-black ms-2" aria-disabled="true" href="/equipment">
                {translations[selectedLanguage].equipment}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-black ms-2" href=".." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {translations[selectedLanguage].aboutUs}
              </a>
              <ul className="dropdown-menu text-black">
                <li><a className="dropdown-item" href="/infrastracture">{translations[selectedLanguage].infrastructure}</a></li>
                <li><a className="dropdown-item" href="/hydroponic">{translations[selectedLanguage].hydroponicConsultancy}</a></li>
                <li><a className="dropdown-item" href="/blogsvideo">{translations[selectedLanguage].blogsVideo}</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link text-black ms-2" aria-disabled="true" href="/contactus">
                {translations[selectedLanguage].contactUs}
              </a>
            </li>
          </ul>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="English">{translations[selectedLanguage].selectLanguage}</option>
            <option value="Hindi">{translations[selectedLanguage].Hindi}</option>
            <option value="Marathi">{translations[selectedLanguage].Marathi}</option>
          </select>
          <a href="/login"><img className="login-img" src={Login} alt="Login"/></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

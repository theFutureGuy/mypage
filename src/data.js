import Servista from "./assets/portfolioImages/servista.jpg"
import landingPage from "./assets/portfolioImages/url.jpg";
import ChessEngine from "./assets/portfolioImages/chessengine.png";
import nlpbot from "./assets/portfolioImages/nlpbot.png";
import Crud from "./assets/portfolioImages/crud.png";
import Pds from "./assets/portfolioImages/pds.png";
import PlantDisease from "./assets/portfolioImages/pdiseaseprediction.png";
import Expense from "./assets/portfolioImages/expensetracker.png";
import Ecomm from "./assets/portfolioImages/ecommpy.png"
import Weather from "./assets/portfolioImages/weather.png"
 
const ProjectsData = [
  {
    id: "nlpbot",
    img: nlpbot,
    name: "Health Care bot using NLP",
    stack: ["< Python />", "< Tensorflow />", "< Tkinter />"],
    live: "",
    source: "https://github.com/theFutureGuy/Healt-Care-BOT",
    description:  
        "This is NLP-Health care bot which acts as a virtual doctor for consutation for some diseases and predicts its apt medicals. It gets the report input too as an parameter too for consultation. This was done as Approved project for NLP course in University.",
  },
  {
    id: "Pds",
    img: Pds,
    name: "Public Distribution System in Blockchain",
    stack: ["< Solidity /> " ,"< Ethereum />" ,"< BootStrap /> " , "< Javascript />"],
    live: "",
    source: "https://github.com/theFutureGuy/Project-PDS",
    description:  
        "This public distribution system is portable application used to reduce the frauds in the Ration Shops in India. Its was done in a hackathon which was shortlisted in top 3 in Cognition Hackthon.",
  },

  {
    id: "Expense",
    img: Expense,
    name: "Expense Manage App",
    stack: ["< React Js />","< Mongo DB />", "< Taiwind CSS />", "< MUI />", "< Express JS />",],
    live: "",
    source: "https://github.com/theFutureGuy/ePenditure",
    description:  
        "This is Expense logger application where I used Redux-toolkit and latest Graph JS fro great display and fetching of data.",
  },

  {
    id: "ChessEngine",
    img: ChessEngine,
    name: "Chess Engine",
    stack: ["<  Flask />", "< Tensorflow />", "< Numpy />"],
    live: "",    
    source: "https://github.com/theFutureGuy/chess-engine",
    description:  
        "It uses chess library and neural network for forecasting predictions to play with the humans as a computer game. It was inspires from Stockfish (UCI chess engine).",
  },
  { 
    id: "Weather",
    img: Weather,
    name: "Weather App",
    stack: ["<  React JS />", "< Tailwind CSS />", "< MUI />"],
    live: "",    
    source: " https://github.com/theFutureGuy/weather-main",
    description:  
        "It uses openweather api to display hourly,weekly and daily data for every loctions in the world.",
  },
  {
    id: "rest-Crud",
    img: Crud,
    name: "Employee Mangement System",
    stack: ["<  Node jS />", "< Javascript />", "< HTML5 />", "< CSS3 />"],
    live: "",
    source: "https://github.com/theFutureGuy/CRUD-Operations",
    description:  
        "This is Employee-Managment application where the the details of employee is perfomed CRUD opertions. ",
  },
  {
    id: "PlantDisease",
    img: PlantDisease,
    name: "Plant Disease Prediction using Image Clssification",
    stack: ["< Flask />  ", "< Tensorflow />","< Kaggle />"],
    live: "",    
    source: "https://github.com/theFutureGuy/Image-prediction",
    description:  
        "Predicts Disease of the Tomato by passing Images. It uses CNN algorithm and SVM classifier to classify the image from the loaded model.It is intergrated with Flask for full stack App.",
  },

  {
    id: "Ecomm",
    img: Ecomm,
    name: "Ashiq's Store",
    stack: ["< Flask  /> ", "< SQLite />","< Fast API />","< CSS3 />"],
    live: "",    
    source: "https://github.com/theFutureGuy/Flask-Development",
    description:  
        "An E-Commerce app built with Python Flask.It uses Fast api for products, It contains multiple pages like login,cart,payment pages. I use SQLite DB for storage and retrive of datas.",
  },  
   
];

const InprogressProjectsData = [
   
  {
    id: "servista",
    img: Servista,
    name: "BLE app",
    stack: ["< Flutter />", "< Google Auth />", "< Firebse />"],
    live: "",
    source: "",
    description:  
        "A cross-platform app that connects with ESP32 device to determine the temperature and humidity from surroundings. It was done as project in Intership.",
  },

  {
    id: "url-short",
    img: landingPage,
    name: "SiriCoin",
    stack: ["< React JS />", "< Solidity />" ,"< Tailwind CSS />"],
    live: "",
    source: "",
    description:  
        "Siricoin landing page for our startup.",
  },

];

export default {ProjectsData, InprogressProjectsData}

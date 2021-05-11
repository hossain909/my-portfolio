import book from "../assets/projectImages/book.png";
import paradise from "../assets/projectImages/paradise-travels.png";
import techWorld from "../assets/projectImages/tech-world.png";

const sliderData = [
  {
    id: "1",
    title: "Tech World",
    image: techWorld,
    desc: "This is a MERN Stack Project. A single page web application with ReactJS in the frontend and NodeJS and MongoDB are used in the backend",
    github: "https://github.com/hossain909/tech-world",
    live: "https://tech-world-bd.web.app/"
  },
  {
    id: "2",
    title: "Book Shop",
    image: book,
    desc: "A single page web app for E-commerce business and Manage order with stripe payment gateway and Authentication with firebase ",
    github: "https://github.com/hossain909/book-shop",
    live: "https://online-book-shoop.web.app/"
  },
  {
    id: "3",
    title: "Paradise Travel",
    image: paradise,
    desc: "A singe page Travel application with Google login system. Use have to login and the can buy a ride. User also see their desired location in the google map.",
    github: "https://github.com/hossain909/paradise-travels",
    live: "https://paradise-travels-bd.web.app/"
  },
]
export default sliderData;
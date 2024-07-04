import Header from "@/views/Header/Header";
import About from "@/views/About/About";
import Interests from "@/views/Interests/Interests";
import ContactForm from "@/views/ContactForm/ContactForm";

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Interests />
            <ContactForm />
        </div>
    );
};

export default Home;

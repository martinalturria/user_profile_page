import Header from "@/views/Header/Header";
import About from "@/views/About/About";
import Interests from "@/views/Interests/Interests";
import ContactForm from "@/views/ContactForm/ContactForm";

const Home = () => {
    return (
        <div>
            <div className="container">
                <Header />
                <About />
                <Interests />
                <ContactForm />
            </div>
        </div>
    );
};

export default Home;

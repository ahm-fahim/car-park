import About from "./homeComponents/About/About";
import Hero from "./homeComponents/Hero/Hero";
import Services from "./homeComponents/Services/Services";

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Services/>
        </div>
    );
};

export default Home;
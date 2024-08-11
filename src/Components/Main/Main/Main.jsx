import Portfolio from "../../Portfolio/Portfolio";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";
import MyResume from "../MyResume/MyResume/MyResume";
import Review from "../Review/Review";
import TopNav from "../TopNav/TopNav";

const Main = ({ handleSideNav }) => {
    return (
        <div className="flex-1 md:flex-1">
            <TopNav handleSideNav={handleSideNav}></TopNav>
            <Banner></Banner>
            <SectionTitle title1={'Features'} tittle2={'What I Do'}></SectionTitle>
            <Features></Features>
            {/* <SectionTitle title1={'Review'} tittle2={'Review from Client'}></SectionTitle>
            <Review></Review> */}
            <SectionTitle title1={'Visit my portfolio and keep your feedback'} tittle2={'My Portfolio'}></SectionTitle>
            <Portfolio></Portfolio>
            <SectionTitle title1={'7+ Years of Experience'} tittle2={'My Resume'}></SectionTitle>
            <MyResume></MyResume>
            <SectionTitle title1={'Contact'} tittle2={'Contact With Me'}></SectionTitle>
            <Contact></Contact>
        </div>
    );
};

export default Main;
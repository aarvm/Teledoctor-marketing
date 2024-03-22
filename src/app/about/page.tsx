import aboutUsStyles from "./about.module.css";

interface aboutPage {
  aboutUsTitle: string;
  description: string;
  aboutUsBanner: string;
}


const content : aboutPage ={
  aboutUsTitle:"A little bit About us",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, molestias.",
  aboutUsBanner:"../public/next.svg"
}




const About = () => {

  return <div className={aboutUsStyles.about_us_page}>
    <div className={aboutUsStyles.about_us_container}>
      <p className={aboutUsStyles.about_us_title}>{content.aboutUsTitle}</p>
      <p className={aboutUsStyles.about_us_description}>{content.description}</p>
      <img className={aboutUsStyles.about_us_image} src={content.description} />
    </div>
  </div>;
};

export default About;

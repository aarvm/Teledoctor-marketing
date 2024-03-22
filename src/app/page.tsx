import Image from "next/image";
import styles from "./page.module.css";

interface Content {
  imgUrl?: string;
  text?: string;
};
const homeData: Content[] = [{
  imgUrl: "",
  text: "SignUp",
},
{
  imgUrl: "",
  text: "Find Your Doctor",
},
{
  imgUrl: "",
  text: "Schedule a Consultation",
}];

export default function Home() {

  return (<div>
    <header className={styles.home_page_header}>
      <div className={styles.home_banner_container}>
        <div>
          <p className={styles.home_banner_text}>
            Access Premier Healthcare
            <span className={styles.home_anytime_text}> Anytime,</span>
            <span className={styles.home_anywhere_text}> Anywhere.</span>
          </p>
        </div>
        <div className={styles.home_nurse_image}>
          <img src="" alt="nurse-photo" />
        </div>
      </div>
    </header>
    <main>
      <div className={styles.home_what_we_do}>
        <p className={styles.home_page_headings}>What We Do</p>
        <article className={styles.home_what_we_do_content}>
          Connect with professional doctors through video calls and messages at
          your convenience.Our platform enables seamless online consultations
          with certified medical professionals across various specialties.
          Experience the future of health care today.
        </article>
      </div>
      <div className={styles.home_three_easy_steps}>
        <p className={styles.home_page_headings}>
          Healthcare made simple in three easy steps.
        </p>
        <div className={styles.home_three_easy_steps_contents}>
          {
            homeData?.map((data) => (
              <section className={styles.home_media_icons}>
                <img className={styles.home_three_step_image} src={data?.imgUrl} alt={data?.text} />
                <p className={styles.home_sign_up_text} >{data?.text}</p>
              </section>
            ))
          }
        </div>
      </div>
    </main>
  </div>);
};

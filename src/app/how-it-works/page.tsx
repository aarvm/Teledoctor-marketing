import styles from "./how-it-works.module.css";
import Image from "next/image";

const HowItWorks = () => {
    return (<main>
        <div className={styles.how_we_work}>
            <p className={styles.how_we_work_headings}>How We Work</p>
            <div className={styles.how_we_work_contents}>
                <p>
                    Our doctors are more than healthcare providers; they're partners in
                    your health journey. With a focus on personalised care, they ensure
                    that every treatment plan is tailored to meet your unique needs and
                    health goals.
                </p>
                <p>
                    Whether you need a general health check-up, mental health support,
                    or specialist care, our diverse team of medical professionals is
                    equipped to address a wide range of health concerns. Their expertise
                    spans across multiple specialties, providing you with comprehensive
                    support, no matter your health needs.
                </p>
                <p>
                    <span className={styles.patient_text}>Patients:</span> "Create your account,
                    browse doctor profiles, book an appointment, and receive care—all
                    from the comfort of your home."
                </p>
                <p>
                    <span className={styles.doctors_text}>Doctors:</span> "Join our network to
                    offer your expertise remotely, enjoy flexible schedules, and expand
                    your reach to patients nationwide."
                </p>
                <div className={styles.how_we_work_image_container}>
                    {/* <Image src={imageUrl} width={1} height={1} className={styles.how_we_work_image} alt="how-it-works"/> */}
                </div>
            </div>
        </div>
    </main>);
};


export default HowItWorks;

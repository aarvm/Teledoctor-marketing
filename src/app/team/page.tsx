import styles from "./team.module.css"

interface CardContent {
    profile?: string;
    name?: string;
    specialization?: string;
};

const props = [
    {
        profile: './images/doctor.png',
        name: 'Dr.Akshara',
        specialization: 'Psychiatrist'
    },
    {
        profile: './images/doctor.png',
        name: 'Dr.Akshara',
        specialization: 'Psychiatrist'
    },
    {
        profile: './images/doctor.png',
        name: 'Dr.Akshara',
        specialization: 'Psychiatrist'
    },
    {
        profile: './images/doctor.png',
        name: 'Dr.Akshara',
        specialization: 'Psychiatrist'
    },
    {
        profile: './images/doctor.png',
        name: 'Dr.Akshara',
        specialization: 'Psychiatrist'
    },
    {
        profile: './images/doctor.png',
        name: 'Dr.Akshara',
        specialization: 'Psychiatrist'
    },
    {
        profile: './images/doctor.png',
        name: 'Dr.Akshara',
        specialization: 'Psychiatrist'
    },
    {
        profile: './images/doctor.png',
        name: 'Dr.Akshara',
        specialization: 'Psychiatrist'
    },
]

const OurTeam = () => {
    
    return ( 
        <div className={styles.our_team_banner}>
            <h1 className={styles.our_team_title}>Our Team Page Title</h1>
            <p className={styles.our_team_description}>Our team page description Our team page description Our team page description Our team page description Our team page description Our team page description Our team page description Our team page description Our team page description Our team page description </p>
            <section className={styles.our_team_doctors_lists}>
                {props?.map((prop) => (
                        <section className={styles.doctors}>
                                <img className={ styles.doctor_profile } src={prop?.profile} />
                            <div className={ styles.doctor_info }>
                                <p className={ styles.doctor_info_name }>{ prop?.name }</p>
                                <p className={ styles.doctor_info_specialization }>{ prop?.specialization }</p>
                            </div>
                        </section>
                    ))
                }
            </section>
        </div> 
   );
};



export default OurTeam;

import styles from "./service.module.css";
interface ServiceData {
  id:number;
  title: string;
  content: string;
  imgUrl: string;
}

const serviceData: ServiceData[] = [
  { 
    id:1,
    title: "TeleDoctor Facilitation Center",
    content:
      "TeleDoctor Facilitation Centers are designed to bridge the gap between virtual and in-person healthcare, offering a unique space where patients can access a variety of healthcare services supported by TeleDoctor's digital platform",
    imgUrl: "../Images/center.svg",
  },
  {
    id:2,
    title: "Get Prescriptions online",
    content:
      " WithTeleDoctor, securing your prescriptions has never been easier.From the comfort of your home, and at any time that suits you,  gain access to the medical prescriptions you need. Our streamlined process ensures that you receive your medication quickly and hassle-free, directly through our platform.",
    imgUrl: "../Images/new.svg",
  },
  {
    id:3,
    title: "Get Lab Requisitions",
    content:
      "TeleDoctor simplifies the process of obtaining lab requisitions,ensuring you can access necessary laboratory tests without the  traditional hassle. Here's how our platform assists you in accessing the necessary lab tests.",
    imgUrl: "../Images/prescription.svg",
  },
];
const Service = () => {
  return (
    <div className={styles.service_container}>
      <main>
        <header className="text_center">
          <h1 className="header_name">Our Services</h1>
        </header>
        <section className={styles.services}>
          {serviceData?.map((data) => (
            <article className={`${styles.services_list}`} key={data?.id} >
              <div className={styles.service_img_container}>
                <img src={data?.imgUrl} alt={data?.title} />
              </div>
              <h3 className="text_center">{data?.title}</h3>
              <p>{data?.content}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};
export default Service;

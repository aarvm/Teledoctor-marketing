import styles from "./contact.module.css";
interface Content {
  id?: number;
  imgUrl?: string;
  title?: string;
  addressData?: {
    title?: string;
    address?: string;
    location?: string;
    phoneNumber?: string;
    mail?: string;
  }[];
}

const content: Content[] = [
  {
    id: 1,
    imgUrl: "",
    title: "Address",
    addressData: [
      {
        title: "TFC_1",
        address: "2/498 Chennai main road",
        location: "chennai-600001",
      },
      {
        title: "TFC_1",
        address: "2/498 Chennai main road",
        location: "chennai-600001",
      },
      {
        title: "TFC_1",
        address: "2/498 Chennai main road",
        location: "chennai-600001",
      },
    ],
  },
  {
    id: 2,
    imgUrl: "",
    title: "Phone",
    addressData: [
      {
        title: "TFC_1",
        phoneNumber: "1234567890",
      },
      {
        title: "TFC_1",
        phoneNumber: "1234567890",
      },
    ],
  },
  {
    id: 3,
    imgUrl: "",
    title: "Email",
    addressData: [
      {
        title: "TFC_1",
        mail: "tcf1.org",
      },
      {
        title: "TFC_1",
        mail: "tcf1.org",
      },
    ],
  },
];

const ContactUs = () => {
  return (
    <main className={styles.contactus_main_container}>
      <header className="text_center">
        <h1 className="header_name">Contact us</h1>
      </header>
      <section className={styles.contactus_section}>
        {content.map(({id,imgUrl,title,addressData}) => (
          <div className={styles.contactus_item} key={id}>
            <div className={styles.contactus_item_icon}>
              <img src={imgUrl} alt={title} />
            </div>
            <h1 className={styles.contact_head}>{title}</h1>
            {addressData?.map(({title,address,location,mail,phoneNumber}) => (
              <div className={styles.location_list}>
                <div>
                  <h3 className={styles.location_head}>{title}</h3>
                  {address && location && (
                    <>
                      <p>{address}</p> <p>{location}</p>
                    </>
                  )}
                  {phoneNumber && <p>{phoneNumber}</p>}
                  {mail && <p>{mail}</p>}
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
};
export default ContactUs;

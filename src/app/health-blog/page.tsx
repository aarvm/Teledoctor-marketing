import styles from "./health-blog.module.css";

interface Content {
    container_heading?: string;
    container_secondary_heading?: string;
    contents?: string;
    imgUrl?: string;
};
const contentData: Content[] = [{
    container_heading: 'Health Blog',
    container_secondary_heading: 'Duis aute irure dolor in reprehe',
    contents: 'Whether you need a general health check-up, mental health support,or specialist care, our diverse team of medical professionals is equipped to address a wide range of health concerns. Their expertise spans across multiple specialties, providing you with comprehensive support, no matter your health needs.',
    imgUrl: ''
},
{
    container_heading: 'Health Blog',
    container_secondary_heading: 'Duis aute irure dolor in reprehe',
    contents: 'Whether you need a general health check-up, mental health support,or specialist care, our diverse team of medical professionals is equipped to address a wide range of health concerns. Their expertise spans across multiple specialties, providing you with comprehensive support, no matter your health needs.',
    imgUrl: ''
},
{
    container_heading: 'Health Blog',
    container_secondary_heading: 'Duis aute irure dolor in reprehe',
    contents: 'Whether you need a general health check-up, mental health support,or specialist care, our diverse team of medical professionals is equipped to address a wide range of health concerns. Their expertise spans across multiple specialties, providing you with comprehensive support, no matter your health needs.',
    imgUrl: ''
},
{
    container_heading: 'Health Blog',
    container_secondary_heading: 'Duis aute irure dolor in reprehe',
    contents: 'Whether you need a general health check-up, mental health support,or specialist care, our diverse team of medical professionals is equipped to address a wide range of health concerns. Their expertise spans across multiple specialties, providing you with comprehensive support, no matter your health needs.',
    imgUrl: ''
},
{
    container_heading: 'Health Blog',
    container_secondary_heading: 'Duis aute irure dolor in reprehe',
    contents: 'Whether you need a general health check-up, mental health support,or specialist care, our diverse team of medical professionals is equipped to address a wide range of health concerns. Their expertise spans across multiple specialties, providing you with comprehensive support, no matter your health needs.',
    imgUrl: ''
},
{
    container_heading: 'Health Blog',
    container_secondary_heading: 'Duis aute irure dolor in reprehe',
    contents: 'Whether you need a general health check-up, mental health support,or specialist care, our diverse team of medical professionals is equipped to address a wide range of health concerns. Their expertise spans across multiple specialties, providing you with comprehensive support, no matter your health needs.',
    imgUrl: ''
}];
const page = () => {
    return (
        <main>
            <div className={styles.health_blog}>
                <p className={styles.health_blog_headings}>Health Blog</p>
            </div>
            <div className={styles.health_blog_main_container}>
                {
                    contentData?.map((data) => (
                        <div className={styles.health_blog_container}>
                            <img className={styles.health_blog_image} src={data?.imgUrl} alt={data?.container_heading} />
                            <p className={styles.health_blog_container_heading}>{data?.container_heading}</p>
                            <p className={styles.health_blog_secondary_heading}>{data?.container_secondary_heading}</p>
                            <p className={styles.health_blog_content}>
                                {data?.contents}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className={styles.read_more}>
                <a className={styles.read_more_link} href="">Read more</a>
            </div>
        </main>
    );
};

export default page;
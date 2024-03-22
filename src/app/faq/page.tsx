"use client"
import { useState } from "react";
import faqStyles from "./faq.module.css"


interface FaqPage {
    faqTitle: string;
    faqAccordian: {
        question?: string;
        answer?: string;
    }[]
}


const content: FaqPage = {
    faqTitle: "FAQs",
    faqAccordian: [{
        question: "How doI sign up for TeleDoctor?",
        answer: "Simply visit our website, click on the Sign Up button, and follow the prompts to create your account.You'll need to provide some basic information to get started"
    }, {
        question: "How doI sign up for TeleDoctor?",
        answer: "Simply visit our website, click on the Sign Up button, and follow the prompts to create your account.You'll need to provide some basic information to get started"
    }, {
        question: "How doI sign up for TeleDoctor?",
        answer: "Simply visit our website, click on the Sign Up button, and follow the prompts to create your account.You'll need to provide some basic information to get started"
    }, {
        question: "How doI sign up for TeleDoctor?",
        answer: "Simply visit our website, click on the Sign Up button, and follow the prompts to create your account.You'll need to provide some basic information to get started"
    },
    {
        question: "How doI sign up for TeleDoctor?",
        answer: "Simply visit our website, click on the Sign Up button, and follow the prompts to create your account.You'll need to provide some basic information to get started"
    }]
};



const Faq = () => {

    const [currentIndex, setCurrentIndex] = useState(new Array(content.faqAccordian.length).fill(false))

    const handleClick = (index: number) => {
        const newOpenItems = [...currentIndex];
        newOpenItems[index] = !newOpenItems[index];
        setCurrentIndex(newOpenItems);
    }
    return (
        <div className={faqStyles.faq_page}>
            <p className={faqStyles.faq_title}>{content.faqTitle}</p>
            <div className={faqStyles.faq_container}>
                {
                    content.faqAccordian?.map((faq, index) => (
                        <div className={faqStyles.accordian}>
                            <a className={faqStyles.accordian_link} onClick={() => handleClick(index)}>
                                {faq.question}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                </svg> 
                            </a>
                            {currentIndex[index] &&
                                (
                                <p className={faqStyles.answer_para}>
                                    {faq.answer}
                                </p>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>

    );
};



export default Faq;


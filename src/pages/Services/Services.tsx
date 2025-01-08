import React from 'react'
import title_underline from "../../assets/svg/title-underline.svg"
import "./services.css"
import image from "../../assets/images/arifsolar.webp"
import FormSection from '../../elements/form/form'
import Comments from '../../elements/comments/comments'
import { useTranslation } from "react-i18next";
import "../../i18n";
const ServicesPage: React.FC = () => {
    const { t } = useTranslation();
    
  return (
    <div className='services'>
        <div className="container">
            <div className='services_title'>
                <h1>{t("services.name")}</h1>
                <img src={title_underline} alt="title_underline" />
            </div>
        </div>
        <div className="services_section_one">
            <div className="container">
                <div className="services_container">
                    <img src={image} alt="image" />
                    <div className='services_section_one_text'>
                        <h1>{t("services.sectionOne.title")}</h1>
                        <img src={image} alt="image" className='services_img'/>
                        <p>{t("services.sectionOne.text")}</p>
                        <button className='services_section_one_btn'>{t("services.button")}</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="services_section_two">
            <div className="container">
                <div className="services_container">
                    <div className='services_section_two_text'>
                        <h1>{t("services.sectionTwo.title")}</h1>
                        <img src={image} alt="image" className='services_img'/>
                        <p>{t("services.sectionTwo.text")}</p>
                        <button className='services_section_two_btn'>{t("services.button")}</button>
                    </div>
                    <img src={image} alt="image" />
                </div>
            </div>
        </div>
        <div className="services_section_three">
            <div className="container">
                <div className="services_container">
                    <img src={image} alt="image" />
                    <div className='services_section_three_text'>
                        <h1>{t("services.sectionThree.title")}</h1>
                        <img src={image} alt="image" className='services_img'/>
                        <p>{t("services.sectionThree.text")}</p>
                        <button className='services_section_three_btn'>{t("services.button")}</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="services_section_four">
            <div className="container">
                <div className="services_container">
                    <div className='services_section_four_text'>
                        <h1>{t("services.sectionFour.title")}</h1>
                        <img src={image} alt="image" className='services_img'/>
                        <p>{t("services.sectionFour.text")}</p>
                        <button className='services_section_four_btn'>{t("services.button")}</button>
                    </div>
                    <img src={image} alt="image" />
                </div>
            </div>
        </div>
        <div className="services_section_five">
            <div className="container">
                <div className="services_container">
                    <img src={image} alt="image" />
                    <div className='services_section_five_text'>
                        <h1>{t("services.sectionFive.title")}</h1>
                        <img src={image} alt="image" className='services_img'/>
                        <p>{t("services.sectionFive.text")}</p>
                        <button className='services_section_five_btn'>{t("services.button")}</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Comments/>
        </div>
        <div className='services_form_section'>
            <FormSection/>
        </div>
    </div>
  )
}

export default ServicesPage
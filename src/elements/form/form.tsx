import React from 'react'
import "./form.css"
import phone from "../../assets/svg/phone.svg"
import { useTranslation } from "react-i18next";

const FormSection: React.FC = () => {
    const { t } = useTranslation();
    
  return (
    <div className='form_section'>
        <div className="container">
            <div className='form_section_container'>
                <div className='form_section_info'>
                    <h1 className='form_section_title'>{t("formElement.title")}</h1>
                    <h2 className='form_section_text'>{t("formElement.text")}</h2>
                    <div className='form_section_phone'>
                        <div className='form_section_phone_icon'>
                            <div className='form_section_phone_btn'>
                                <img src={phone} alt="phone" />
                            </div>
                        </div>
                        <h1 className='form_section_number'>+998 78 555 70 17</h1>
                    </div>
                </div>
                <form>
                    <div className='form'>
                        <p>{t("formElement.form.name.text")} <span>*</span></p>
                        <input type="text" placeholder={t("formElement.form.name.placeholder")}/>
                        <p>{t("formElement.form.phone.text")} <span>*</span></p>
                        <input placeholder={t("formElement.form.phone.placeholder")} type="tel" />
                        <p>{t("formElement.form.email.text")}</p>
                        <input placeholder={t("formElement.form.email.placeholder")} type="email" />
                        <button className='form_btn'>{t("formElement.form.button")}</button>
                    </div>
                </form>
                <div className='form_title2'>
                    <h2 className='form_section_text'>{t("formElement.text")}</h2>
                    <div className='form_section_phone'>
                        <div className='form_section_phone_icon'>
                            <div className='form_section_phone_btn'>
                                <img src={phone} alt="phone" />
                            </div>
                        </div>
                        <h1 className='form_section_number'>+998 78 555 70 17</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormSection
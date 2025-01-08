import React from 'react'
import "./footer.css"
import { NavLink } from 'react-router-dom'
import logo_text from "../../assets/images/logo_text.jpg"
import email from "../../assets/svg/email.svg"
import icon_phone from "../../assets/svg/icon_phone.svg"
import location from "../../assets/svg/location.svg"
import linkedin from "../../assets/svg/linkedin.svg"
import instagram from "../../assets/svg/instagram.svg"
import { useTranslation } from "react-i18next";
import "../../i18n";

const Footer: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <div className='footer'>
            <div className="container">
                <div className='footer_container'>
                    <div className='footer_top'>
                        <div className='footer_top_1'>
                            <img src={logo_text} alt="" className='footer_logo'/>
                            <p>{t("footer.text")}</p>
                        </div>
                        <div className='footer_top_2'>
                            <p>{t("footer.topSectionOne.text1")}</p>
                            <NavLink to={"/"} className={"footer_link"}>
                                {t("footer.topSectionOne.text2")}
                            </NavLink>
                            <NavLink to={"/portfolio"} className={"footer_link"}>
                                {t("footer.topSectionOne.text3")}
                            </NavLink>
                            <NavLink to={"/"} className={"footer_link"}>
                                {t("footer.topSectionOne.text4")}
                            </NavLink>
                            <NavLink to={"/services"} className={"footer_link"}>
                                {t("footer.topSectionOne.text5")}
                            </NavLink>
                            <NavLink to={"/contact"} className={"footer_link"}>
                                {t("footer.topSectionOne.text6")}
                            </NavLink>
                        </div>
                        <div className='footer_top_3'>
                            <p>{t("footer.topSectionTwo.text1")}</p>
                            <NavLink to={"/"} className={"footer_link"}>
                                {t("footer.topSectionTwo.text2")}
                            </NavLink>
                            <NavLink to={"/portfolio"} className={"footer_link"}>
                                {t("footer.topSectionTwo.text3")}
                            </NavLink>
                            <NavLink to={"/"} className={"footer_link"}>
                                {t("footer.topSectionTwo.text4")}
                            </NavLink>
                            <NavLink to={"/services"} className={"footer_link"}>
                                {t("footer.topSectionTwo.text5")}
                            </NavLink>
                            <NavLink to={"/contact"} className={"footer_link"}>
                                {t("footer.topSectionTwo.text6")}
                            </NavLink>
                        </div>
                    </div>
                    <div className='footer_bottom'>
                        <p className='footer_bottom_text'>© Copyright Dynamic Soft</p>
                        <div className="footer_bottom_info">
                            <img src={location} alt="" />
                            <p>Tashkent, Sagʻbon 37/1</p>
                        </div>
                        <div className="footer_bottom_info">
                            <img src={email} alt="" />
                            <p>info@dynamicsoft.uz</p>
                        </div>
                        <div className="footer_bottom_info">
                            <img src={icon_phone} alt="" />
                            <p>+998 78 555 70 17</p>
                        </div>
                        <div className="footer_bottom_info">
                            <img src={linkedin} alt="" />
                            <img src={instagram} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
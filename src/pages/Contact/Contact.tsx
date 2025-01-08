import React from 'react'
import "./contact.css"
import title_underline from "../../assets/svg/title-underline.svg"
import phone from "../../assets/svg/phone.svg"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useTranslation } from "react-i18next";
import "../../i18n";
const ContactPage: React.FC = () => {
    const { t } = useTranslation();

    const containerStyle = {
        width: "100%", 
        height: "200px", 
        borderRadius: "48px", 
        overflow: "hidden",
    };
    
    const center = {
        lat: 41.3389, 
        lng: 69.3346, 
    };

  return (
    <div className='contact'>
        <div className="container">
            <div className="contact_container">
                <div>
                    <div className='contact_title'>
                        <h1>{t("contacts.name")}</h1>
                       <img src={title_underline} alt="title_underline" />
                    </div>
                    <form>
                        <div className='contact_form'>
                            <p>{t("formElement.form.name.text")} <span>*</span></p>
                            <input type="text" placeholder={t("formElement.form.name.placeholder")}/>
                            <p>{t("formElement.form.phone.text")} <span>*</span></p>
                            <input placeholder={t("formElement.form.phone.placeholder")} type="tel" value="+998" />
                            <p>{t("formElement.form.email.text")}</p>
                            <input placeholder={t("formElement.form.email.placeholder")} type="email" value="" />
                            <button className='contact_form_btn'>{t("contacts.button")}</button>
                        </div>
                    </form>
                </div>
                <div className='contact_info'>
                    <div className='contact_info_phone'>
                        <div className='contact_info_phone_icon'>
                            <div className='contact_info_phone_btn'>
                                <img src={phone} alt="phone" />
                            </div>
                        </div>
                        <p className='contact_info_phone_text'>+998 78 555 70 17</p>
                    </div>
                    <div className='contact_info_home'>
                        <div className='contact_info_home_icon'>
                            <div className='contact_info_home_btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18.5" viewBox="0 0 17 20" fill="none"><path d="M6.4848 16.5794V14.2112C6.4848 13.6067 6.93296 13.1166 7.48579 13.1166H9.50665C9.77213 13.1166 10.0267 13.2319 10.2145 13.4372C10.4022 13.6425 10.5076 13.9209 10.5076 14.2112V16.5794C10.506 16.8308 10.5961 17.0724 10.758 17.2508C10.9199 17.4292 11.1403 17.5295 11.3701 17.5295H12.7488C13.3928 17.5313 14.0109 17.2529 14.4668 16.7556C14.9227 16.2584 15.1789 15.5831 15.1789 14.879V8.13227C15.1789 7.56347 14.9483 7.02393 14.5494 6.659L9.8592 2.56277C9.04333 1.84457 7.87438 1.86775 7.08287 2.61785L2.49974 6.659C2.0819 7.01317 1.83217 7.55431 1.81982 8.13227V14.8721C1.81982 16.3397 2.9078 17.5295 4.24989 17.5295H5.59713C6.0745 17.5295 6.46245 17.1083 6.46591 16.5863L6.4848 16.5794Z" fill="white"></path></svg>
                            </div>
                        </div>
                        <p className='contact_info_home_text'>Tashkent, Sagʻbon 37/1</p>
                    </div>
                    <div className='contact_info_email'>
                        <div className='contact_info_email_icon'>
                            <div className='contact_info_email_btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M16.6667 1.66667C16.6667 0.75 15.9167 0 15 0H1.66667C0.75 0 0 0.75 0 1.66667V11.6667C0 12.5833 0.75 13.3333 1.66667 13.3333H15C15.9167 13.3333 16.6667 12.5833 16.6667 11.6667V1.66667ZM15 1.66667L8.33333 5.83333L1.66667 1.66667H15ZM15 11.6667H1.66667V3.33333L8.33333 7.5L15 3.33333V11.6667Z" fill="white"></path></svg>
                            </div>
                        </div>
                        <p className='contact_info_email_text'>info@dynamicsoft.uz</p>
                    </div>
                    <div className='contact_info_map'>
                        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={15} // Масштаб карты
                            >
                                <Marker position={center} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactPage
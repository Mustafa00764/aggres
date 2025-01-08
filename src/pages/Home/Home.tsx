import React from 'react'
import "./home.css"
import title_underline from "../../assets/svg/title-underline.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import img from "../../assets/images/img.webp"
import icon from "../../assets/images/icon.webp"
import design from "../../assets/svg/design.svg"
import mobile_app from "../../assets/svg/mobile-app.svg"
import script from "../../assets/svg/script.svg"
import startaps from "../../assets/svg/startaps.svg"
import tg_bot from "../../assets/svg/tg-bot.svg"
import web_dev from "../../assets/svg/web-dev.svg"
import { useTranslation } from "react-i18next";
// Стили Swiper
import "../../i18n";
import "swiper/css";
import "swiper/css/effect-coverflow";
import FormSection from '../../elements/form/form';
import Comments from '../../elements/comments/comments';
const HomePage: React.FC = () => {
    const { t } = useTranslation();

    const slides = [
        {
          title: "Education",
          description:
            "Приложение для новостей о технологиях и IT от WeProject, одного из крупнейших новостных агентств Центральной Азии. Будьте в курсе последни...",
          image: img,
          icon: icon,
        },
        {
          title: "Business",
          description:
          "Приложение для новостей о технологиях и IT от WeProject, одного из крупнейших новостных агентств Центральной Азии. Будьте в курсе последни...",
          image: img,
          icon: icon,
        },
        {
          title: "ERP",
          description:
          "Приложение для новостей о технологиях и IT от WeProject, одного из крупнейших новостных агентств Центральной Азии. Будьте в курсе последни...",
          image: img,
          icon: icon,
        },
        {
          title: "Extra",
          description: "Приложение для новостей о технологиях и IT от WeProject, одного из крупнейших новостных агентств Центральной Азии. Будьте в курсе последни...",
          image: img,
          icon: icon,
        },
        {
            title: "Business",
            description: 
            "Приложение для новостей о технологиях и IT от WeProject, одного из крупнейших новостных агентств Центральной Азии. Будьте в курсе последни...",
            image: img,
            icon: icon,

          },
          {
            title: "ERP",
            description:
            "Приложение для новостей о технологиях и IT от WeProject, одного из крупнейших новостных агентств Центральной Азии. Будьте в курсе последни...",
            image: img,
            icon: icon,

          },
          {
            title: "Extra",
            description: "Приложение для новостей о технологиях и IT от WeProject, одного из крупнейших новостных агентств Центральной Азии. Будьте в курсе последни...",

            image: img,
            icon: icon,

          },
          {
            title: "Extra",
            description: "Приложение для новостей о технологиях и IT от WeProject, одного из крупнейших новостных агентств Центральной Азии. Будьте в курсе последни...",
            image: img,
            icon: icon,
          },
    ];

    const services = [
        {
            icon: web_dev,
            title: t("homePage.sectionFour.cardOne.title"),
            text: t("homePage.sectionFour.cardOne.text"),
        },
        {
            icon: script,
            title: t("homePage.sectionFour.cardTwo.title"),
            text: t("homePage.sectionFour.cardTwo.text"),
        },
        {
            icon: mobile_app,
            title: t("homePage.sectionFour.cardThree.title"),
            text: t("homePage.sectionFour.cardThree.text"),
        },
        {
            icon: design,
            title: t("homePage.sectionFour.cardFour.title"),
            text: t("homePage.sectionFour.cardFour.text"),
        },
        {
            icon: startaps,
            title: t("homePage.sectionFour.cardFive.title"),
            text: t("homePage.sectionFour.cardFive.text"),
        },
        {
            icon: tg_bot,
            title: t("homePage.sectionFour.cardSix.title"),
            text: t("homePage.sectionFour.cardSix.text"),
        },
    ]

    const ourValues = [
        {
            icon: web_dev,
            title: t("homePage.sectionSeven.cardOne.title"),
            text: t("homePage.sectionSeven.cardOne.text"),
        },
        {
            icon: script,
            title: t("homePage.sectionSeven.cardTwo.title"),
            text: t("homePage.sectionSeven.cardTwo.text"),
        },
        {
            icon: mobile_app,
            title: t("homePage.sectionSeven.cardThree.title"),
            text: t("homePage.sectionSeven.cardThree.text"),
        },
        {
            icon: design,
            title: t("homePage.sectionSeven.cardFour.title"),
            text: t("homePage.sectionSeven.cardFour.text"),
        },
        {
            icon: startaps,
            title: t("homePage.sectionSeven.cardFive.title"),
            text: t("homePage.sectionSeven.cardFive.text"),
        },
        {
            icon: tg_bot,
            title: t("homePage.sectionSeven.cardSix.title"),
            text: t("homePage.sectionSeven.cardSix.text"),
        },
    ]

  return (
    <div className='homePage'>
        <div className='section_one'>
            <div className='section_one_blur'></div>
            <div className="container">
                <div className="section_one_info">
                    {/* <img className='main_banner_vector' src={main_banner_vector} alt="main_banner_vector" /> */}
                    <h1>{t("homePage.sectionOne.title")}</h1>
                    <div className='section_one_btns'>
                        <button className='section_one_btn1'>{t("homePage.sectionOne.buttonOne")}</button>
                        <button className='section_one_btn2'>
                            <p>{t("homePage.sectionOne.buttonTwo")}</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='section_two'>
            <div className="container">
                <div className='section_two_text'>
                    <h1>{t("homePage.sectionTwo.elementOne.title.text1")}<span>{t("homePage.sectionTwo.elementOne.title.text2")}</span></h1>
                    <p className='section_two_text1'>{t("homePage.sectionTwo.elementOne.text")}</p>
                </div>
                <div className='section_two_text'>
                    <h1>{t("homePage.sectionTwo.elementTwo.title.text1")}<span>{t("homePage.sectionTwo.elementTwo.title.text2")}</span></h1>
                    <p className='section_two_text2'>{t("homePage.sectionTwo.elementTwo.text")}</p>
                </div>
                <div className='section_two_text'>
                    <h1>{t("homePage.sectionTwo.elementThree.title.text1")}<span>{t("homePage.sectionTwo.elementThree.title.text2")}</span></h1>
                    <p className='section_two_text3'>{t("homePage.sectionTwo.elementThree.text")}</p>
                </div>
                <div className='section_two_text'>
                    <h1>{t("homePage.sectionTwo.elementFour.title.text1")}<span>{t("homePage.sectionTwo.elementFour.title.text2")}</span></h1>
                    <p className='section_two_text4'>{t("homePage.sectionTwo.elementFour.text")}</p>
                </div>
                <div className='section_two_text'>
                    <h1><span>{t("homePage.sectionTwo.elementFive.title.text2")}</span>{t("homePage.sectionTwo.elementFive.title.text1")}</h1>
                    <p className='section_two_text5'>{t("homePage.sectionTwo.elementFive.text")}</p>
                </div>
            </div>
        </div>
        <div className='section_three' id='our-company'>
            <div className="container">
                <div className='section_three_container'>
                    <div className='section_three_titles'>
                        <p className="section_three_name">{t("homePage.sectionThree.name")}</p>
                        <img src={title_underline} alt="" />
                        <h1 className='section_three_title'>{t("homePage.sectionThree.title.text1")} <span>{t("homePage.sectionThree.title.text2")}</span> {t("homePage.sectionThree.title.text3")}</h1>
                    </div>
                    <div className='section_three_text'>
                        <p>{t("homePage.sectionThree.text")}</p>
                    </div>
                </div>
                <div className='section_three_slider'>
                    <Swiper
                        modules={[EffectCoverflow, Autoplay]}
                        effect="coverflow" 
                        grabCursor={true} 
                        centeredSlides={true} 
                        slidesPerView={1} 
                        loop
                        spaceBetween= {40}
                        speed={1000}
                        autoplay={{
                          delay: 4000, 
                          disableOnInteraction: false, 
                          waitForTransition: true,
                        }}
                        coverflowEffect={{
                          rotate: 0, // Поворот слайдов
                          stretch: 0, // Растяжение
                          depth: 0, // Глубина эффекта
                          modifier: 0, // Модификатор эффекта
                          slideShadows: false, // Тени слайдов
                        }}
                        breakpoints={{
                            701: {
                                coverflowEffect:{
                                    rotate: 0, // Поворот слайдов
                                    stretch: 0, // Растяжение
                                    depth: 200, // Глубина эффекта
                                    modifier: 2, // Модификатор эффекта
                                    slideShadows: false, // Тени слайдов
                                  },
                                slidesPerView: 3 
                            },
                        }}
                        className="section_swiper" 
                    >
                       {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className='slider_card'>
                                    <div className='slider_card_logo'>
                                        <img src={slide.icon} alt="icon" />
                                        <img src={slide.image} alt="image" className='slider_card_logo_img'/>
                                    </div>
                                    <div className='slider_card_main'>
                                        <div className='slider_card_text'>
                                            <div className='slider_card_category'>
                                                {slide.title}
                                            </div>
                                            <p className='slider_card_description'>{slide.description}</p>
                                        </div>
                                        <div className='slider_card_img'>
                                            <img src={slide.image} alt="image" />
                                        </div>
                                    </div>
                                    <div className='slider_card_btns'>
                                        <button className='slider_card_btn'>VIEW MORE</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
        <div className='section_four'>
            <div className="container">
                <div className='section_four_container'>
                    <p className="section_four_name">{t("homePage.sectionFour.name")}</p>
                    <img src={title_underline} alt="title_underline" />
                </div>
                <div className='section_four_cards'>
                    {
                        services.map((item,index)=>{
                            return(
                                <div key={index} className='section_four_card'>
                                    <div className='section_four_card_name'>
                                        <img src={item.icon} alt="icon" />
                                        <h1>{item.title}</h1>
                                    </div>
                                    <p className='section_four_text'>{item.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        <div className='section_five'>
            <div className="container">
                <div className='section_five_container'>
                    <p className="section_five_name">{t("homePage.sectionFive.name")}</p>
                    <img src={title_underline} alt="title_underline" />
                </div>
                <div className='section_five_marquees'>
                    <div className='marquee_container'>
                        <div className="marquee">
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                        </div>
                        <div className="marquee">
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                        </div>
                    </div>
                    <div className='marquee_container'>
                        <div className="marquee2">
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                        </div>
                        <div className="marquee2">
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                            <img src={icon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='section_six'>
            <div className="container">
                <div className='section_six_container'>
                    <h1 className='section_six_title'>{t("homePage.sectionSix.title")}</h1>
                    <button className='section_six_btn'>{t("homePage.sectionSix.button")}</button>
                </div>
            </div>
        </div>
        <div className='section_seven'>
            <div className="container">
                <div className='section_seven_container'>
                    <p className="section_seven_name">{t("homePage.sectionSeven.name")}</p>
                    <img src={title_underline} alt="title_underline" />
                </div>
                <div className='section_seven_cards'>
                    {
                        ourValues.map((item,index)=>{
                            return(
                                <div key={index} className='section_seven_card'>
                                    <div className='section_seven_card_name'>
                                        <img src={item.icon} alt="icon" />
                                        <h1>{item.title}</h1>
                                    </div>
                                    <p className='section_seven_text'>{item.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        <div>
            <FormSection/>
        </div>
        <div>
            <Comments/>
        </div>
    </div>
  )
}

export default HomePage

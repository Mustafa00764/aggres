import React from 'react'
import "./portfolio.css"
import title_underline from "../../assets/svg/title-underline.svg"
import img from "../../assets/images/img.webp"
import icon from "../../assets/images/icon.webp"
import { useTranslation } from "react-i18next";
import "../../i18n";
import { Link } from 'react-router-dom'
const PortfolioPage: React.FC = () => {
    const { t } = useTranslation();
    
    const category = [
        {
            name: "e-commerce",
        },
        {
            name: "media",
        },
        {
            name: "business",
        },
        {
            name: "education",
        },
        {
            name: "erp",
        },
        {
            name: "pos",
        },
    ]

    const cards = [
        {
          id: 1,
          title: "Education",
          description: t("portfolioPage.portfolioCard.text"),
          image: img,
          icon: icon,
        },
        {
            id: 2,
            title: "Education",
            description: t("portfolioPage.portfolioCard.text"),
            image: img,
            icon: icon,
        },
        {
          id: 3,
          title: "ERP",
          description: t("portfolioPage.portfolioCard.text"),
          image: img,
          icon: icon,
        },
        {
          id: 4,
          title: "Extra",
          description: t("portfolioPage.portfolioCard.text"),
          image: img,
          icon: icon,
        },
        {
            id: 5,
            title: "Business",
            description: t("portfolioPage.portfolioCard.text"),
            image: img,
            icon: icon,

        },
        {
          id: 6,
            title: "ERP",
            description: t("portfolioPage.portfolioCard.text"),
            image: img,
            icon: icon,

        },
        {
          id: 7,

            title: "Extra",
            description: t("portfolioPage.portfolioCard.text"),
            image: img,
            icon: icon,

        },
        {
          id: 8,
            title: "Extra",
            description: t("portfolioPage.portfolioCard.text"),
            image: img,
            icon: icon,
        },
        {
          id: 9,

            title: "Education",
            description: t("portfolioPage.portfolioCard.text"),
            image: img,
            icon: icon,
          },
          {
          id: 10,
            title: "Business",
            description: t("portfolioPage.portfolioCard.text"),
            image: img,
            icon: icon,
          },
          {
            id: 11,
            title: "ERP",
            description: t("portfolioPage.portfolioCard.text"),
            image: img,
            icon: icon,
          },
          {
          id: 12,
            title: "Extra",
            description: t("portfolioPage.portfolioCard.text"),
            image: img,
            icon: icon,
          },
          {
          id: 13,

              title: "Business",
              description: t("portfolioPage.portfolioCard.text"),
              image: img,
              icon: icon,
  
          },
          {
          id: 14,
              title: "ERP",
              description: t("portfolioPage.portfolioCard.text"),
              image: img,
              icon: icon,
  
          },
          {
          id: 15,
              title: "Extra",
              description: t("portfolioPage.portfolioCard.text"),
              image: img,
              icon: icon,
  
        },
        {
              id: 16,
              title: "Extra",
              description: t("portfolioPage.portfolioCard.text"),
              image: img,
              icon: icon,
        },
        {
            id: 17,
            title: "Extra",
            description: t("portfolioPage.portfolioCard.text"),
            image: img,
            icon: icon,

        },
        {
            id: 18,
            title: "Extra",
            description: t("portfolioPage.portfolioCard.text"),
            image: img,
            icon: icon,
        },
    ];

  return (
    <div className='portfolio'>
        <div className="container">
            <div className="portfolio_container">
                <div className='portfolio_title'>
                    <h1>{t("portfolioPage.name")}</h1>
                    <img src={title_underline} alt="title_underline" />
                </div>
                <div className='portfolio_categoties'>
                    {
                        category.map((item,index)=>{
                            return(
                                <button key={index} className='portfolio_category'>{item.name}</button>
                            )
                        })
                    }
                </div>
                <div className='portfolio_cards'>
                    {
                        cards.map((item)=>{
                            return(
                                <Link key={item.id} to={`/portfolio/${item.id}`}>
                                <div className='portfolio_card'>
                                    <div className='portfolio_card_icon'>
                                        <img src={item.icon} alt="icon" />
                                        <img src={item.image} alt="image" className='portfolio_card_img'/>
                                    </div>
                                    <div className='portfolio_card_main'>
                                        <div className='portfolio_card_text'>
                                            <button>{item.title}</button>
                                            <p>{item.description}</p>
                                        </div>
                                        <img src={item.image} alt="image" />
                                    </div>
                                    <div className='portfolio_card_btns'>
                                        <button className='portfolio_card_btn'>{t("portfolioPage.portfolioCard.button")}</button>
                                    </div>
                                </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default PortfolioPage
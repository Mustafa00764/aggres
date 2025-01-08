import React, { useEffect, useState } from 'react'
import img from "../../assets/images/img.webp"
import icon from "../../assets/images/icon.webp"
import { useTranslation } from "react-i18next";
import "../../i18n";
import "./Information.css"
import title_underline from "../../assets/svg/title-underline.svg"
import { useParams } from 'react-router-dom'
interface Card {
    id: number,
    title: string,
    description: string,
    image: string,
    icon: string,
    category: string,
    img2: string,
    tags: string[]
}
const InformationPage: React.FC = () => {
    const { id } = useParams()
    const { t } = useTranslation();
    const cards = [
        {
          id: 1,
          title: t("informationPage.name"),
          description: t("informationPage.text"),
          image: img,
          icon: icon,
          category: "E-commerce",
          img2: img,
          tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]
        },
        {
            id: 2,
            title: t("informationPage.name"),
            description: t("informationPage.text"),
            image: img,
            icon: icon,
            category: "E-commerce",
            img2: img,
            tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]
        },
        {
          id: 3,
          title: t("informationPage.name"),
          description: t("informationPage.text"),
          image: img,
          icon: icon,
          category: "E-commerce",
          img2: img,
          tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]
        },
        {
          id: 4,
          title: t("informationPage.name"),
          description: t("informationPage.text"),
          image: img,
          icon: icon,
          category: "E-commerce",
          img2: img,
          tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]
        },
        {
            id: 5,
            title: t("informationPage.name"),
            description: t("informationPage.text"),
            image: img,
            icon: icon,
            category: "E-commerce",
            img2: img,
            tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]

        },
        {
          id: 6,
          title: t("informationPage.name"),
          description: t("informationPage.text"),
          image: img,
          icon: icon,
          category: "E-commerce",
          img2: img,
          tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]

        },
        {
          id: 7,

          title: t("informationPage.name"),
          description: t("informationPage.text"),
          image: img,
          icon: icon,
          category: "E-commerce",
          img2: img,
          tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]

        },
        {
          id: 8,
          title: t("informationPage.name"),
          description: t("informationPage.text"),
          image: img,
          icon: icon,
          category: "E-commerce",
          img2: img,
          tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]
        },
        {
          id: 9,
          title: t("informationPage.name"),
          description: t("informationPage.text"),
          image: img,
          icon: icon,
          category: "E-commerce",
          img2: img,
          tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]
          },
          {
          id: 10,
          title: t("informationPage.name"),
          description: t("informationPage.text"),
          image: img,
          icon: icon,
          category: "E-commerce",
          img2: img,
          tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]
          },
          {
            id: 11,
            title: t("informationPage.name"),
            description: t("informationPage.text"),
            image: img,
            icon: icon,
            category: "E-commerce",
            img2: img,
            tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]
          },
          {
          id: 12,
          title: t("informationPage.name"),
          description: t("informationPage.text"),
          image: img,
          icon: icon,
          category: "E-commerce",
          img2: img,
          tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]
          },
          {
          id: 13,

          title: t("informationPage.name"),
          description: t("informationPage.text"),
          image: img,
          icon: icon,
          category: "E-commerce",
          img2: img,
          tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]
  
          },
          {
          id: 14,
          title: t("informationPage.name"),
          description: t("informationPage.text"),
          image: img,
          icon: icon,
          category: "E-commerce",
          img2: img,
          tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]
  
          },
          {
          id: 15,
          title: t("informationPage.name"),
          description: t("informationPage.text"),
          image: img,
          icon: icon,
          category: "E-commerce",
          img2: img,
          tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]
  
        },
        {
              id: 16,
              title: t("informationPage.name"),
              description: t("informationPage.text"),
              image: img,
              icon: icon,
              category: "E-commerce",
              img2: img,
              tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]
        },
        {
            id: 17,
            title: t("informationPage.name"),
            description: t("informationPage.text"),
            image: img,
            icon: icon,
            category: "E-commerce",
            img2: img,
            tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]

        },
        {
            id: 18,
            title: t("informationPage.name"),
            description: t("informationPage.text"),
            image: img,
            icon: icon,
            category: "E-commerce",
            img2: img,
            tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]
        },
    ];
    const [card,setCard] = useState<Card>(cards[Number(id)-1])
    useEffect(()=> {
        const interval = setInterval(() => {
            setCard(cards[Number(id)-1])
          }, 1000);
      
          return () => clearInterval(interval);
    },[card])

    return (
        <div className='informtion'>
            <div className="container">
                <div className="informtion_container">
                    
                    <div className='informtion_logo'>
                        <img src={card.icon} alt="" />
                    </div>
                    <div className="sectionOne">
                        <img src={card.image} alt="" />
                        <div className='sectionOne_title'>
                            <h1>{card.title}</h1>
                            <img src={title_underline} alt="" />
                            <div className='sectionOne_category'>
                                {card.category}
                            </div>
                            <p>{card.description}</p>
                        </div>
                    </div>
                    <div className="sectionTwo">
                        <h1>{t("informationPage.sectionOne.name")}</h1>
                        <img src={title_underline} alt="" />
                        <div className='sectionTwo_cards'>
                            <div className='sectionTwo_card'>
                                <h3>{t("informationPage.sectionOne.card1.title")}: 01</h3>
                                <p>{t("informationPage.sectionOne.card1.text")}</p>
                            </div>
                            <div className='sectionTwo_card'>
                                <h3>{t("informationPage.sectionOne.card2.title")}: 01</h3>
                                <p>{t("informationPage.sectionOne.card2.text")}</p>
                            </div>
                            <div className='sectionTwo_card'>
                                <h3>{t("informationPage.sectionOne.card3.title")}: 01</h3>
                                <p>{t("informationPage.sectionOne.card3.text")}</p>
                            </div>
                            <div className='sectionTwo_card'>
                                <h3>{t("informationPage.sectionOne.card4.title")}: 01</h3>
                                <p>{t("informationPage.sectionOne.card4.text")}</p>
                            </div>
                            <div className='sectionTwo_card'>
                                <h3>{t("informationPage.sectionOne.card5.title")}: 01</h3>
                                <p>{t("informationPage.sectionOne.card5.text")}</p>
                            </div>
                        </div>
                    </div>
                    <div className='informtion_img'>
                        <img src={card.image} alt="" />
                    </div>
                    <div className="sectionThree">
                        <h1>{t("informationPage.sectionThree.name")}</h1>
                        <img src={title_underline} alt="" />
                        <div className='sectionThree_tags'>
                            {
                                card.tags.map((item,index)=> {
                                    return(
                                        <div className='sectionThree_tag' key={index}>
                                            <p>{item}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationPage
import React from 'react'
import "./comments.css"
import { useTranslation } from "react-i18next";
import "../../i18n";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid } from 'swiper/modules';
const Comments: React.FC = () => {
    const { t } = useTranslation();
    
    const comments = [
        {
            img: "https://dynamicsoft.uz/_next/image?url=https%3A%2F%2Fapi.dynamicsoft.uz%2Fv1%2Ffile%2Freviews%2Fimage-b57dd472-cd3a-419f-85fd-a5786b23944f.jpeg&w=96&q=75",
            title: t("comments.cardOne.name"),
            text1: t("comments.cardOne.profession"),
            text2: t("comments.cardOne.text"),
        },
        {
            img: "https://dynamicsoft.uz/_next/image?url=https%3A%2F%2Fapi.dynamicsoft.uz%2Fv1%2Ffile%2Freviews%2Fimage-b57dd472-cd3a-419f-85fd-a5786b23944f.jpeg&w=96&q=75",
            title: t("comments.cardTwo.name"),
            text1: t("comments.cardTwo.profession"),
            text2: t("comments.cardTwo.text"),
        },
        {
            img: "https://dynamicsoft.uz/_next/image?url=https%3A%2F%2Fapi.dynamicsoft.uz%2Fv1%2Ffile%2Freviews%2Fimage-b57dd472-cd3a-419f-85fd-a5786b23944f.jpeg&w=96&q=75",
            title: t("comments.cardThree.name"),
            text1: t("comments.cardThree.profession"),
            text2: t("comments.cardThree.text"),
        },
        {
            img: "https://dynamicsoft.uz/_next/image?url=https%3A%2F%2Fapi.dynamicsoft.uz%2Fv1%2Ffile%2Freviews%2Fimage-b57dd472-cd3a-419f-85fd-a5786b23944f.jpeg&w=96&q=75",
            title: t("comments.cardFour.name"),
            text1: t("comments.cardFour.profession"),
            text2: t("comments.cardFour.text"),
        },
        {
            img: "https://dynamicsoft.uz/_next/image?url=https%3A%2F%2Fapi.dynamicsoft.uz%2Fv1%2Ffile%2Freviews%2Fimage-b57dd472-cd3a-419f-85fd-a5786b23944f.jpeg&w=96&q=75",
            title: t("comments.cardFive.name"),
            text1: t("comments.cardFive.profession"),
            text2: t("comments.cardFive.text"),
        },

    ]

    return (
        <div className='comments'>
            <div className="container">
                <div className='comments_container'>
                    <Swiper
                        slidesPerView={1}
                        grid={{
                        rows: 1,
                        }}
                        loop
                        spaceBetween={30}
                        modules={[Grid]}
                        className="mySwiper"
                        breakpoints={{
                            701: {
                                slidesPerView: 3,
                                grid: {rows: 2},
                                spaceBetween: 40
                            },
                        }}
                    >
                    {
                        comments.map((item,index)=>{
                            return(
                                <SwiperSlide key={index}>
                                <div className='comment_card' >
                                    <img src={item.img} alt="" className='comment_card_img'/>
                                    <div className='comment_card_info'>
                                        <p className='comment_card_title'>{item.title}</p>
                                        <p className='comment_card_text1'>{item.text1}</p>
                                        <p className='comment_card_text2'>{item.text2}</p>
                                        <div className='stars'>
                                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1033 0.816987C10.4701 0.0737414 11.5299 0.0737401 11.8967 0.816986L14.294 5.67446C14.4397 5.9696 14.7213 6.17417 15.047 6.2215L20.4075 7.00043C21.2277 7.11961 21.5552 8.12759 20.9617 8.70612L17.0828 12.4871C16.8471 12.7169 16.7396 13.0479 16.7952 13.3723L17.7109 18.7111C17.851 19.528 16.9936 20.151 16.26 19.7653L11.4653 17.2446C11.174 17.0915 10.826 17.0915 10.5347 17.2446L5.74005 19.7653C5.00642 20.151 4.14899 19.528 4.2891 18.7111L5.20479 13.3723C5.26043 13.0479 5.15288 12.7169 4.91719 12.4871L1.03827 8.70612C0.444756 8.12759 0.772265 7.11961 1.59249 7.00043L6.95302 6.2215C7.27873 6.17417 7.5603 5.9696 7.70596 5.67446L10.1033 0.816987Z" fill="#C14040"></path></svg><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1033 0.816987C10.4701 0.0737414 11.5299 0.0737401 11.8967 0.816986L14.294 5.67446C14.4397 5.9696 14.7213 6.17417 15.047 6.2215L20.4075 7.00043C21.2277 7.11961 21.5552 8.12759 20.9617 8.70612L17.0828 12.4871C16.8471 12.7169 16.7396 13.0479 16.7952 13.3723L17.7109 18.7111C17.851 19.528 16.9936 20.151 16.26 19.7653L11.4653 17.2446C11.174 17.0915 10.826 17.0915 10.5347 17.2446L5.74005 19.7653C5.00642 20.151 4.14899 19.528 4.2891 18.7111L5.20479 13.3723C5.26043 13.0479 5.15288 12.7169 4.91719 12.4871L1.03827 8.70612C0.444756 8.12759 0.772265 7.11961 1.59249 7.00043L6.95302 6.2215C7.27873 6.17417 7.5603 5.9696 7.70596 5.67446L10.1033 0.816987Z" fill="#C14040"></path></svg><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1033 0.816987C10.4701 0.0737414 11.5299 0.0737401 11.8967 0.816986L14.294 5.67446C14.4397 5.9696 14.7213 6.17417 15.047 6.2215L20.4075 7.00043C21.2277 7.11961 21.5552 8.12759 20.9617 8.70612L17.0828 12.4871C16.8471 12.7169 16.7396 13.0479 16.7952 13.3723L17.7109 18.7111C17.851 19.528 16.9936 20.151 16.26 19.7653L11.4653 17.2446C11.174 17.0915 10.826 17.0915 10.5347 17.2446L5.74005 19.7653C5.00642 20.151 4.14899 19.528 4.2891 18.7111L5.20479 13.3723C5.26043 13.0479 5.15288 12.7169 4.91719 12.4871L1.03827 8.70612C0.444756 8.12759 0.772265 7.11961 1.59249 7.00043L6.95302 6.2215C7.27873 6.17417 7.5603 5.9696 7.70596 5.67446L10.1033 0.816987Z" fill="#C14040"></path></svg><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1033 0.816987C10.4701 0.0737414 11.5299 0.0737401 11.8967 0.816986L14.294 5.67446C14.4397 5.9696 14.7213 6.17417 15.047 6.2215L20.4075 7.00043C21.2277 7.11961 21.5552 8.12759 20.9617 8.70612L17.0828 12.4871C16.8471 12.7169 16.7396 13.0479 16.7952 13.3723L17.7109 18.7111C17.851 19.528 16.9936 20.151 16.26 19.7653L11.4653 17.2446C11.174 17.0915 10.826 17.0915 10.5347 17.2446L5.74005 19.7653C5.00642 20.151 4.14899 19.528 4.2891 18.7111L5.20479 13.3723C5.26043 13.0479 5.15288 12.7169 4.91719 12.4871L1.03827 8.70612C0.444756 8.12759 0.772265 7.11961 1.59249 7.00043L6.95302 6.2215C7.27873 6.17417 7.5603 5.9696 7.70596 5.67446L10.1033 0.816987Z" fill="#C14040"></path></svg><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1033 0.816987C10.4701 0.0737414 11.5299 0.0737401 11.8967 0.816986L14.294 5.67446C14.4397 5.9696 14.7213 6.17417 15.047 6.2215L20.4075 7.00043C21.2277 7.11961 21.5552 8.12759 20.9617 8.70612L17.0828 12.4871C16.8471 12.7169 16.7396 13.0479 16.7952 13.3723L17.7109 18.7111C17.851 19.528 16.9936 20.151 16.26 19.7653L11.4653 17.2446C11.174 17.0915 10.826 17.0915 10.5347 17.2446L5.74005 19.7653C5.00642 20.151 4.14899 19.528 4.2891 18.7111L5.20479 13.3723C5.26043 13.0479 5.15288 12.7169 4.91719 12.4871L1.03827 8.70612C0.444756 8.12759 0.772265 7.11961 1.59249 7.00043L6.95302 6.2215C7.27873 6.17417 7.5603 5.9696 7.70596 5.67446L10.1033 0.816987Z" fill="#C14040"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                            )
                        })
                    }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Comments
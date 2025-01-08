import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import logo_text from "../../assets/images/logo_text.jpg"
import "./header.css"
import { useTranslation } from "react-i18next";
import { Button, Menu, MenuItem } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import "../../i18n";
import menu from "../../assets/svg/menu.svg"
const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [language, setLanguage] = useState<string>("en"); // Текущий язык
    const { i18n,t } = useTranslation();
    const [menus, setMenus] = useState<boolean>(false)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
  
    const handleClose = (lang: string | null = null) => {
        if (lang){
            setLanguage(lang);
            i18n.changeLanguage(lang);
            localStorage.setItem("i18nextLng", lang);
        } 
        
        setAnchorEl(null);
    };

    useEffect(()=>{
        setLanguage(`${localStorage.getItem("i18nextLng")}`)
    },[])
  return (
    <div className='header'>
        <div className={menus?"menu":"menu_close"}>
            <NavLink onClick={()=>setMenus(false)} to={"/"} className={"link"} style={({ isActive }) => ({color: isActive ? 'var(--text-gradient)' : '', })}>
                {t("header.nav.home")}
            </NavLink>
            <NavLink onClick={()=>setMenus(false)} to={"/portfolio"} className={"link"} style={({ isActive }) => ({color: isActive ? 'var(--text-gradient)' : '', })}>
                {t("header.nav.portfolio")}
            </NavLink>
            <a onClick={()=>setMenus(false)} href="/#our-company" className="link">
                {t("header.nav.aboutUs")}
            </a>
            <NavLink onClick={()=>setMenus(false)} to={"/services"} className={"link"} style={({ isActive }) => ({color: isActive ? 'var(--text-gradient)' : '', })}>
                {t("header.nav.services")}
            </NavLink>
            <NavLink onClick={()=>setMenus(false)} to={"/contact"} className={"link"} style={({ isActive }) => ({color: isActive ? 'var(--text-gradient)' : '', })}>
                {t("header.nav.contacts")}
            </NavLink>
            <button onClick={()=>setMenus(false)} className="menu_btn">{t("header.button")}</button>
        </div>
        <div className='container'>
            <div className='header_container'>
                <div className="header_menu" onClick={()=>setMenus(!menus)}>
                    <img src={menu} alt="" />
                </div>
                <div>
                    <img src={logo_text} alt="" className='header_logo'/>
                </div>
                <div className='navbar'>
                    <div className='navbar_link'>
                        <NavLink to={"/"} className={"link"} style={({ isActive }) => ({color: isActive ? 'var(--text-gradient)' : '', })}>
                            {t("header.nav.home")}
                        </NavLink>
                        <NavLink to={"/portfolio"} className={"link"} style={({ isActive }) => ({color: isActive ? 'var(--text-gradient)' : '', })}>
                            {t("header.nav.portfolio")}
                        </NavLink>
                        <a href="/#our-company" className="link">
                            {t("header.nav.aboutUs")}
                        </a>
                        <NavLink to={"/services"} className={"link"} style={({ isActive }) => ({color: isActive ? 'var(--text-gradient)' : '', })}>
                            {t("header.nav.services")}
                        </NavLink>
                        <NavLink to={"/contact"} className={"link"} style={({ isActive }) => ({color: isActive ? 'var(--text-gradient)' : '', })}>
                            {t("header.nav.contacts")}
                        </NavLink>
                    </div>
                    <div className='header_buttons'>
                        <button className='header_btn'>
                            {t("header.button")}
                        </button>
                        <div className='language'>
                            <Button
                                startIcon={<TranslateIcon />}
                                variant="outlined"
                                onClick={handleClick}
                                sx={{
                                    backgroundColor: "#f0f9ff",
                                    color: "var(--text-color)",
                                    padding: "4.75px 20px",
                                    border: "1px solid #0D2137",
                                    borderRadius: "6px",
                                    "&:hover": {
                                        backdropFilter: "blur(7.5px)",
                                        background: "linear-gradient(0deg, rgba(0, 0, 0, .05), rgba(0, 0, 0, .05)), #f0f9ff",
                                    },
                                  }}
                            >
                                {language.toLocaleUpperCase()}
                            </Button>

                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={() => handleClose()}
                                sx={{
                                    "& .MuiPaper-root": {
                                        backgroundColor: "#f0f9ff",
                                        borderRadius: "6px",
                                    },
                                    "& .MuiMenuItem-root": {
                                        padding: "7px 33px",
                                        "&:hover": {
                                            backdropFilter: "blur(7.5px)",
                                            background: "linear-gradient(0deg, rgba(0, 0, 0, .05), rgba(0, 0, 0, .05)), #f0f9ff",
                                        },
                                    },
                                  }}
                            >
                                <MenuItem onClick={() => handleClose("en")}>EN</MenuItem>
                                <MenuItem onClick={() => handleClose("ru")}>RU</MenuItem>
                                <MenuItem onClick={() => handleClose("uz")}>UZ</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
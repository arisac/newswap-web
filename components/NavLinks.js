import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useTranslation, Trans, Translation } from 'react-i18next'


const NavLinks = () => {
  // const [dropdownStatus, setDropdownStatus] = useState(false);
  const handleDropdownStatus = (e) => {
    // setDropdownStatus(!dropdownStatus);
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  let { t ,i18n} = useTranslation();
  return (
    <ul className="main-nav__navigation-box">
      <li>
        <Link href={process.env.NEXT_PUBLIC_NEWSWAP_APP_URL}>
          <a>{t('global.exchange')}</a>
        </Link>
      </li>
      <li>
        <Link href={process.env.NEXT_PUBLIC_NEWSWAP_FARM_URL}>
          <a>{t('global.farm')}</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="#">
          <>
            <a>{t('global.tokens')}</a>
            <i className="fa fa-angle-down" onClick={handleDropdownStatus}></i>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/#home-nsp">
              <a>{t('menu.nsp')}</a>
            </Link>
          </li>
          <li>
            <Link href="/#home-nst">
              <a>{t('menu.nst')}</a>
            </Link>
          </li>
          <li>
            <Link href="/#">
              <a>{t('menu.nusd')}</a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/#">
          <a>{t('global.governance')}</a>
        </Link>
      </li>
      <li>
        <Link href={process.env.NEXT_PUBLIC_NEWSWAP_INFO_URL}>
          <a>{t('global.analytics')}</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="#">
          <>
            <a>{t('global.more')}</a>
            <i className="fa fa-angle-down" onClick={handleDropdownStatus}></i>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/faq">
              <a>{t('global.faq')}</a>
            </Link>
          </li>
          <li>
            <Link href="/tools">
              <a>{t('global.tools')}</a>
            </Link>
          </li>
          <li>
            <Link href="/apply-listing">
              <a>{t('global.apply listing')}</a>
            </Link>
          </li>
          <li>
            <Link href={process.env.NEXT_PUBLIC_TWITTER_URL}>
              <a target="_blank">Twitter</a>
            </Link>
          </li>
          <li>
            <Link href={process.env.NEXT_PUBLIC_TELEGRAM_URL}>
              <a target="_blank">Telegram</a>
            </Link>
          </li>
          <li>
            <Link href={process.env.NEXT_PUBLIC_GITHUB_URL}>
              <a target="_blank">{t('global.github')}</a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="#">
          <a onClick={()=>i18n.changeLanguage(i18n.language=='en'?'zh':'en')}><span style={{fontSize:13, fontWeight:400,}}>{i18n.language=='en'?'中文':'English'}</span></a>
        </Link>
      </li>

    </ul>
  );
};

export default NavLinks;

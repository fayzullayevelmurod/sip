import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Text } from "@consta/uikit/Text";
import { User } from '@consta/uikit/User';

// Icons
import { IconRing } from "@consta/uikit/IconRing";
import { IconBento } from "@consta/uikit/IconBento"

// Header
import {
  Header,
  HeaderButton,
  HeaderLogo,
  HeaderMenu,
  HeaderModule,
  HeaderSearchBar
} from "@consta/uikit/Header";

import './Navbar.style.scss'

export default function App() {
  const activeMenuItemInitial = JSON.parse(sessionStorage.getItem('active-menu'))
  const [activeMenuItem, setActiveMenuItem] = useState(activeMenuItemInitial || 0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation()

  const [value, setValue] = useState(null);
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
    setActiveMenuItem(0)
  }

  const menuItems = [
    {
      label: "Главная",
      onClick: () => {
        navigate('/')
        setActiveMenuItem(0)
      },
      active: activeMenuItem === 0
    },
    {
      label: "Аналитика",
      onClick: () => {
        navigate('/analytics')
        setActiveMenuItem(1)
      },
      active: activeMenuItem === 1
    },
    {
      label: "Справочники",
      onClick: () => {
        navigate('/references')
        setActiveMenuItem(2)
      },
      active: activeMenuItem === 2
    }
  ];

  useEffect(() => {
    sessionStorage.setItem('active-menu', JSON.stringify(activeMenuItem))
  }, [activeMenuItem])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setActiveMenuItem(0)
        break;

      case '/analytics':
        setActiveMenuItem(1)
        break;

      case '/references':
        setActiveMenuItem(2)
        break;

      default:
        break;
    }
  }, [location])

  return (
    <Header
      className="header"
      leftSide={
        <>
          <HeaderModule>
            <HeaderLogo onClick={goHome} className="header__logo">
              <Text as="p" size="l" weight="bold">
                СИП. РБ
              </Text>
            </HeaderLogo>
          </HeaderModule>
          <HeaderModule indent="l" className="header__search">
            <HeaderSearchBar
              placeholder="я ищу"
              label="поиск"
              value={value}
              onChange={({ value }) => setValue(value)}
            />
          </HeaderModule>
          <HeaderModule indent="l" className="header__menu">
            <HeaderMenu items={menuItems} />
          </HeaderModule>
        </>
      }

      rightSide={
        <>
          <HeaderModule indent="s">
            <HeaderButton iconLeft={IconRing} />
          </HeaderModule>
          <HeaderModule indent="s">
            <HeaderButton iconLeft={IconBento} />
          </HeaderModule>
          <HeaderModule indent="s">
            {windowWidth > 800 ? (
              <User
                avatarUrl="/assets/images/user-logo.png"
                name="Имя Фамилия"
                info="Доп. информация"
              />
            ) : (
              <User
                avatarUrl="/assets/images/user-logo.png"
                name="Имя Фамилия"
                info="Доп. информация"
                onlyAvatar
              />
            )}
          </HeaderModule>
        </>
      }
    />
  );
}

// React
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';

// Consta/uikit components
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';

// Icons
import { IconSlide } from '@consta/icons/IconSlide';
import { IconClose } from '@consta/icons/IconClose';

import { ReflexContainer, ReflexSplitter } from 'react-reflex';
import 'react-reflex/styles.css'
import './Modal.style.scss'

export default function Modal({
  title, defaultType, sameType, isCollapse, isOpen, onClose, setIsObjectModalFullHeight, style
}) {
  const [isShown, setIsShown] = useState(false);
  const [fullHeight, setFullHeight] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const calculateModalWidth = `calc(${windowWidth}px - 24px)`
  return (
    <Layout
      direction='column'
      className={`modal ${fullHeight ? 'fullHeight' : ''} ${isCollapse ? 'bg-white-modal ' : ''} ${isOpen ? 'active-modal' : 'inactive-modal'}`}
      style={{ width: `${windowWidth <= 640 ? calculateModalWidth : ""} `, ...style }}
    >
      <Layout className="modal__header">
        <Text className='modal__header--title'>{title}</Text>
        <Text className='modal__header--close' onClick={onClose}>
          <IconClose size='xs' />
        </Text>
      </Layout>
      <Layout direction='column' className={`modal__content`}>
        <ReflexContainer orientation="horizontal">
          {defaultType}
          {sameType && <ReflexSplitter className="modal__resize-handle" />}
          {sameType}
        </ReflexContainer>
      </Layout>
      <Layout
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={() => {
          setFullHeight(prev => !prev)
          if (setIsObjectModalFullHeight) {
            setIsObjectModalFullHeight(prev => !prev)
          }
        }}
        className="modal__resizer"
      >
        {!isShown ? (
          <IconSlide
            view="ghost"
            size="xs"
            className="modal__resizer--icon" />
        ) : (
          <img
            src={`${!fullHeight ? '/assets/svg/arrow-top.svg' : '/assets/svg/arrow-bottom.svg'} `}
          />
        )}
      </Layout>
    </Layout >
  )
}


Modal.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func,
  defaultType: PropTypes.element,
  sameType: PropTypes.element,
  title: PropTypes.string,
  setIsObjectModalFullHeight: PropTypes.func,
  isCollapse: PropTypes.bool,
  style: PropTypes.any,
  isOpen: PropTypes.bool
}
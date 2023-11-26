// React
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';

// Consta/uikit components
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';

// Icons
import { IconSlide } from '@consta/icons/IconSlide';
import { IconClose } from '@consta/icons/IconClose';

import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import './Modal.style.scss'

export default function Modal({
  title, defaultType, sameType, isCollapse, onClose, setIsObjectModalFullHeight, style
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
      className={`modal ${fullHeight ? 'fullHeight' : ''} ${isCollapse ? 'bg-white-modal ' : ''}`}
      style={{ width: `${windowWidth <= 640 ? calculateModalWidth : ""}`, ...style }}
    >
      <Layout className="modal__header">
        <Text className='modal__header--title'>{title}</Text>
        <Text className='modal__header--close' onClick={onClose}>
          <IconClose size='xs' />
        </Text>
      </Layout>
      <Layout direction='column' className={`modal__content`}>
        <PanelGroup direction="vertical">
          <Panel
            style={{ overflowY: 'auto' }}
            defaultSize={40}
            minSizePixels={44}
            order={1}>
            {defaultType}
          </Panel>
          {sameType && (
            <>
              <PanelResizeHandle className="modal__resize-handle" />
              <Panel
                style={{ overflowY: 'auto' }}
                collapsible={true}
                defaultSize={30}
                minSize={4}
                order={2}
              >
                {sameType}
              </Panel>
            </>
          )}
        </PanelGroup>
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
  isCollapse: PropTypes.func,
  style: PropTypes.any
}
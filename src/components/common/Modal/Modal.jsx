import PropTypes from 'prop-types'

import { useState } from 'react';
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';
import { Collapse } from '@consta/uikit/Collapse';

import { IconSlide } from '@consta/icons/IconSlide';
import { IconClose } from '@consta/icons/IconClose';

import './Modal.style.scss'

export default function Modal({ title, defaultType, sameTitle, sameType, onClose }) {
  const [collapseIsOpen, setcollapseIsOpen] = useState(true);
  const [isShown, setIsShown] = useState(false);
  const [fullHeight, setFullHeight] = useState(false)

  return (
    <Layout
      direction='column'
      className={`modal ${fullHeight ? 'fullHeight' : ''} ${sameTitle ? 'sameType' : ''}`}>
      <Layout className="modal__header">
        <Text className='modal__header--title'>{title}</Text>
        <Text className='modal__header--close' onClick={onClose}>
          <IconClose size='xs' />
        </Text>
      </Layout>
      <Layout direction='column' className={`modal__content`}>
        {defaultType}
        {sameTitle && (
          <Collapse
            size="xs"
            label={sameTitle}
            isOpen={collapseIsOpen}
            onClick={() => setcollapseIsOpen(!collapseIsOpen)}
            iconPosition="right"
          >
            {sameType}
          </Collapse>
        )}
      </Layout>
      <Layout
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={() => setFullHeight(prev => !prev)}
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
    </Layout>
  )
}


Modal.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func,
  defaultType: PropTypes.element,
  sameType: PropTypes.element,
  title: PropTypes.string,
  sameTitle: PropTypes.string
}
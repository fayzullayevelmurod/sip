import PropTypes from 'prop-types'

import { forwardRef, useState } from "react";
import { Layout } from "@consta/uikit/Layout"
import { List } from '@consta/uikit/ListCanary';
import { Text } from '@consta/uikit/Text';
import { Collapse } from '@consta/uikit/Collapse';

import Modal from '@components/common/Modal/';
import {
  dataItems,
  sameMenuItems,
  objectMenuItems
} from '../mock';
import { ReflexElement } from 'react-reflex';
import 'react-reflex/styles.css'

const ContentMiddle = forwardRef((props, ref) => {
  const {
    setIsObjectModalFullHeight,
    leftSideActiveModal,
    setLeftSideActiveModal,
    calculationItems,
    calculationItemChecked,
    setCalculationItemChecked,
    RightSideActiveModal,
    setRightSideActiveModal,
    windowWidth,
  } = props

  const [collapseIsOpen, setcollapseIsOpen] = useState(true);

  // Left side popup data
  const [dataItemChecked, setDataItemChecked] = useState(dataItems[0]);
  const [switchedData, setSwitchedData] = useState(dataItems[0])

  // Right side popup data
  const [objectItemChecked, setObjectItemChecked] = useState(objectMenuItems[0])
  const [sameItemChecked, setSameItemChecked] = useState(sameMenuItems[0])
  const [switchedObject, setSwitchedObject] = useState(null)

  return (
    <Layout className="home__middle">

      {/* Calculation and Data Popup menu */}
      <Layout direction='row'>
        <Modal
          isOpen={leftSideActiveModal == 0}
          title="Расчеты"
          onClose={() => setLeftSideActiveModal(null)}
          defaultType={(
            <ReflexElement
              className="left-pane"
            >
              <Layout direction='column' className="home__calculations-modal">
                <List
                  items={calculationItems}
                  getItemRightSide={(item) => (
                    <Text className='home__calculations-modal--date'>{item.date}</Text>
                  )}
                  getItemChecked={(item) => calculationItemChecked === item}
                  onItemClick={setCalculationItemChecked}
                  className="home__calculations-modal--listitems"
                />
              </Layout>
            </ReflexElement>
          )}
        />
        <Modal
          isOpen={leftSideActiveModal == 1}
          style={{ minHeight: '245px', position: 'absolute', left: '12px' }}
          title="Данные"
          onClose={() => setLeftSideActiveModal(null)}
          defaultType={(
            <ReflexElement
              className="left-pane"
              minSize={44}
              style={{ height: '150px !important' }}
            >
              <Layout direction='column' className="home__data-modal">
                <List
                  items={dataItems}
                  getItemChecked={(item) => {
                    if (dataItemChecked === item) {
                      setSwitchedData(dataItemChecked)
                    }

                    return dataItemChecked === item
                  }}
                  onItemClick={setDataItemChecked}
                />
              </Layout>
            </ReflexElement>
          )}
          sameType={(
            <ReflexElement
              className="right-pane"
            >
              <Text size="xs" view="secondary">{switchedData.text}</Text>
            </ReflexElement>
          )}
        />
      </Layout>

      <Layout ref={ref} className="home__context-menu"></Layout>

      {/* Objects Popup menu */}
      <Layout className="home__object-modal-wrapper">
        <Modal
          isOpen={RightSideActiveModal || leftSideActiveModal == 2}
          style={{ minHeight: '300px' }}
          setIsObjectModalFullHeight={setIsObjectModalFullHeight}
          title="Обьекты"
          isCollapse={true}
          onClose={() => {
            setRightSideActiveModal(false)
            if (windowWidth <= 640) {
              setLeftSideActiveModal(null)
            }
          }}
          defaultType={(
            <ReflexElement
              className="left-pane"
              minSize={44}
            >
              <Layout direction='column' className="home__object-modal">
                <List
                  items={objectMenuItems}
                  getItemChecked={(item) => {
                    if (objectItemChecked === item) {
                      setSwitchedObject(objectItemChecked)
                    }

                    return objectItemChecked === item
                  }}
                  onItemClick={setObjectItemChecked}
                />
              </Layout>
            </ReflexElement>
          )}
          sameType={(
            <ReflexElement
              className="right-pane"
            >
              <Collapse
                size="xs"
                label="Однотипные"
                isOpen={collapseIsOpen}
                onClick={() => setcollapseIsOpen(!collapseIsOpen)}
                iconPosition="right"
                hoverEffect
              >
                {RightSideActiveModal && (
                  <Layout direction='column' style={{ gap: 6, paddingRight: 3 }}>
                    <List
                      items={switchedObject?.data}
                      getItemChecked={(item) => sameItemChecked === item}
                      onItemClick={setSameItemChecked}
                    />
                  </Layout>
                )}
              </Collapse>
            </ReflexElement>
          )}
        />
      </Layout>
    </Layout >
  )
})

ContentMiddle.propTypes = {
  leftSideActiveModal: PropTypes.number,
  setLeftSideActiveModal: PropTypes.func,
  calculationItems: PropTypes.array,
  calculationItemChecked: PropTypes.object,
  setCalculationItemChecked: PropTypes.func,
  setDataItemChecked: PropTypes.func,
  RightSideActiveModal: PropTypes.bool,
  setRightSideActiveModal: PropTypes.func,
  objectMenuItems: PropTypes.array,
  setSameItemChecked: PropTypes.func,
  setIsObjectModalFullHeight: PropTypes.func,
  windowWidth: PropTypes.number
}

ContentMiddle.displayName = "ContentMiddle"
export default ContentMiddle
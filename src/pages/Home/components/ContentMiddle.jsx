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
      <Layout>
        {leftSideActiveModal == 0 && (
          <Modal
            title="Расчеты"
            onClose={() => setLeftSideActiveModal(null)}
            defaultType={(
              <Layout direction='column' className="home__calculations-modal">
                <List
                  items={calculationItems}
                  getItemRightSide={(item) => (
                    <Text className='home__calculations-modal--date'>{item.date}</Text>
                  )}
                  getItemChecked={(item) => calculationItemChecked === item}
                  onItemClick={setCalculationItemChecked}
                />
              </Layout>
            )}
          />
        )}
        {leftSideActiveModal == 1 && (
          <Modal
            style={{ minHeight: '300px' }}
            title="Данные"
            onClose={() => setLeftSideActiveModal(null)}
            defaultType={(
              <Layout direction='column'>
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
            )}
            sameType={(
              <Text size="xs" view="secondary">{switchedData.text}</Text>
            )}
          />
        )}
      </Layout>

      <Layout ref={ref} className="home__context-menu"></Layout>

      {/* Objects Popup menu */}
      <Layout>
        {RightSideActiveModal || leftSideActiveModal == 2 ? (
          <Modal
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
              <Layout direction='column'>
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
            )}
            sameType={(
              <Collapse
                size="xs"
                label="Однотипные"
                isOpen={collapseIsOpen}
                onClick={() => setcollapseIsOpen(!collapseIsOpen)}
                iconPosition="right"
                className='modal__collapse'
              >
                <Layout direction='column'>
                  <List
                    items={switchedObject?.data}
                    getItemChecked={(item) => sameItemChecked === item}
                    onItemClick={setSameItemChecked}
                  />
                </Layout>
              </Collapse>
            )}
          />
        ) : null}
      </Layout>
    </Layout>
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
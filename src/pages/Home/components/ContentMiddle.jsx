import PropTypes from 'prop-types'

import { forwardRef, useState } from "react";
import { Layout } from "@consta/uikit/Layout"
import { List } from '@consta/uikit/ListCanary';
import { Text } from '@consta/uikit/Text';
import { Collapse } from '@consta/uikit/Collapse';
import { Panel } from 'react-resizable-panels';

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
              <Panel
                style={{ overflowY: 'auto' }}
                defaultSize={40}
                minSizePixels={44}
                order={1}>
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
              </Panel>
            )}
          />
        )}
        {leftSideActiveModal == 1 && (
          <Modal
            style={{ minHeight: '245px' }}
            title="Данные"
            onClose={() => setLeftSideActiveModal(null)}
            defaultType={(
              <Panel
                style={{ overflowY: 'auto' }}
                defaultSize={46}
                minSizePixels={44}
                order={1}>
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
              </Panel>
            )}
            sameType={(
              <Panel
                style={{ overflowY: 'auto' }}
                collapsible={true}
                defaultSize={30}
                minSize={4}
                order={2}
              >
                <Text size="xs" view="secondary">{switchedData.text}</Text>
              </Panel>
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
              <Panel
                style={{ overflowY: 'auto' }}
                defaultSize={40}
                minSizePixels={44}
                order={1}>
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
              </Panel>
            )}
            sameType={(
              <Panel
                style={{ overflowY: 'auto' }}
                collapsible={true}
                defaultSize={30}
                minSize={4}
                order={2}
              >
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
              </Panel>
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
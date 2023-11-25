import PropTypes from 'prop-types'

import { forwardRef } from "react";
import { Layout } from "@consta/uikit/Layout"
import { List } from '@consta/uikit/ListCanary';
import { Text } from '@consta/uikit/Text';

import Modal from '@components/common/Modal/';

const ContentMiddle = forwardRef((props, ref) => {
  const {
    leftSideActiveModal,
    setLeftSideActiveModal,
    calculationItems,
    calculationItemChecked,
    setCalculationItemChecked,
    dataItems,
    dataItemChecked,
    setDataItemChecked,
    RightSideActiveModal,
    setRightSideActiveModal,
    objectMenuItems,
    objectItemChecked,
    setObjectItemChecked,
    sameMenuItems,
    sameItemChecked,
    setSameItemChecked
  } = props

  return (
    <Layout className="home__middle">
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
            title="Данные"
            onClose={() => setLeftSideActiveModal(null)}
            defaultType={(
              <Layout direction='column' className="home__calculations-modal">
                <List
                  items={dataItems}
                  getItemChecked={(item) => dataItemChecked === item}
                  onItemClick={setDataItemChecked}
                />
              </Layout>
            )}
          />
        )}
      </Layout>
      <Layout ref={ref} className="home__context-menu"></Layout>
      <Layout >
        {RightSideActiveModal || leftSideActiveModal == 2 ? (
          <Modal
            title="Обьекты"
            sameTitle="Однотипные"
            onClose={() => {
              setRightSideActiveModal(false)
              setLeftSideActiveModal(null)
            }}
            defaultType={(
              <Layout direction='column' className="home__calculations-modal">
                <List
                  items={objectMenuItems}
                  getItemChecked={(item) => objectItemChecked === item}
                  onItemClick={setObjectItemChecked}
                />
              </Layout>
            )}
            sameType={(
              <Layout direction='column' className="home__calculations-modal">
                <List
                  items={sameMenuItems}
                  getItemChecked={(item) => sameItemChecked === item}
                  onItemClick={setSameItemChecked}
                />
              </Layout>
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
  dataItems: PropTypes.array,
  dataItemChecked: PropTypes.object,
  setDataItemChecked: PropTypes.func,
  RightSideActiveModal: PropTypes.bool,
  setRightSideActiveModal: PropTypes.func,
  objectMenuItems: PropTypes.array,
  objectItemChecked: PropTypes.object,
  setObjectItemChecked: PropTypes.func,
  sameMenuItems: PropTypes.array,
  sameItemChecked: PropTypes.object,
  setSameItemChecked: PropTypes.func
}

ContentMiddle.displayName = "ContentMiddle"
export default ContentMiddle
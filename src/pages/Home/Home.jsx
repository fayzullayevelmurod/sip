// React
import { useRef, useState } from 'react';

// Consta/uikit components
import { List } from '@consta/uikit/ListCanary';
import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';
import { ContextMenu } from '@consta/uikit/ContextMenu';
import { Switch } from '@consta/uikit/Switch'
import { Tag } from '@consta/uikit/Tag';
import { Table } from '@consta/uikit/Table';

// Icons
import { IconHamburger } from '@consta/uikit/IconHamburger'
import { IconTree } from '@consta/icons/IconTree'
import { IconCursorMouse } from '@consta/icons/IconCursorMouse'
import { IconHand } from '@consta/icons/IconHand'
import { IconShape } from '@consta/icons/IconShape'
import { IconFolderOpen } from '@consta/icons/IconFolderOpen'
import { IconWindow } from '@consta/icons/IconWindow'
import { IconMapStroked } from '@consta/icons/IconMapStroked'

// Mock data
import {
  calculationItems,
  dataItems,
  contextMenuItems,
  sameMenuItems,
  objectMenuItems
} from './mock'

import Modal from '@components/common/Modal/';
import './Home.style.scss'

export default function Home() {
  const [leftSideActiveModal, setLeftSideActiveModal] = useState(null)
  const [RightSideActiveModal, setRightSideActiveModal] = useState(false)

  const [calculationItemChecked, setCalculationItemChecked] = useState(calculationItems[0]);
  const [dataItemChecked, setDataItemChecked] = useState(dataItems[0]);
  const [objectItemChecked, setObjectItemChecked] = useState(objectMenuItems[0])
  const [sameItemChecked, setSameItemChecked] = useState(sameMenuItems[0])

  const [items, setItems] = useState(contextMenuItems);
  const [isOpen, setIsOpen] = useState(false);


  const toggleLeftSideModalCalc = () => {
    const active = leftSideActiveModal === 0 ? null : 0
    setLeftSideActiveModal(active)
  }

  const toggleLeftSideModalData = () => {
    const active = leftSideActiveModal === 1 ? null : 1
    setLeftSideActiveModal(active)
  }

  const toggleRightSideModalObject = () => {
    setRightSideActiveModal(prev => !prev)
    setIsOpen(false)
  }

  const toggleContextMenu = () => {
    setRightSideActiveModal(false)
    setIsOpen(!isOpen)
  }

  function renderRightSide(item, onChange) {
    const nodeArray = [];

    if (item.switch !== undefined) {
      nodeArray.push(
        <Switch
          size="xs"
          checked={item.switch}
          onChange={() => onChange(item)}
          key="Switch"
        />,
      );
    }

    return nodeArray;
  }

  const ref = useRef(null);

  const onChange = (switchItem) => {
    const newItems = items.map((item, index) => {
      if (switchItem.label === item.label) {
        return { ...items[index], switch: !items[index].switch };
      }
      return item;
    });

    setItems(newItems);
  };

  return (
    <>
      <Layout className='home'>
        <Layout className='home__background'>
          <img src="/assets/svg/bg-map.svg" />

          <Layout direction='column' className='home__content'>
            <Layout className='home__header'>
              <Layout className='home__header-left'>
                <Button
                  truncate="true"
                  onClick={toggleLeftSideModalCalc}
                  className='home__header--button truncate-btn'
                  label="Расчет региона №1 Зеленая роща"
                  iconLeft={IconHamburger}
                  view="ghost"
                  size="xs"
                />
                <Button
                  onClick={toggleLeftSideModalData}
                  className='home__header--button'
                  label="Данные"
                  iconLeft={IconTree}
                  view="ghost"
                  size="xs"
                  onlyIcon
                />
              </Layout>
              <Layout className='home__header-center'>
                <Button
                  className='home__header--button'
                  label="Данные"
                  iconLeft={IconCursorMouse}
                  view="ghost"
                  size="xs"
                  onlyIcon
                />
                <Button
                  className='home__header--button'
                  label="Данные"
                  iconLeft={IconHand}
                  view="ghost"
                  size="xs"
                  onlyIcon
                />
                <Button
                  className='home__header--button'
                  label="Данные"
                  iconLeft={IconShape}
                  view="ghost"
                  size="xs"
                  onlyIcon
                />
              </Layout>
              <Layout className='home__header-right'>
                <Button
                  className='home__header--button'
                  label="Обьекты"
                  iconLeft={IconFolderOpen}
                  view="ghost"
                  size="xs"
                  onClick={() => toggleRightSideModalObject()}
                />
                <Layout className="home__header-right--border"></Layout>
                <Button
                  className='home__header--button'
                  label="Вид"
                  iconLeft={IconWindow}
                  view="ghost"
                  size="xs"
                  onClick={toggleContextMenu}
                />
                <ContextMenu
                  size="xs"
                  isOpen={isOpen}
                  items={items}
                  anchorRef={ref}
                  getItemRightSide={(item) => renderRightSide(item, onChange)}
                  className="view-context-menu"
                />
              </Layout>
            </Layout>
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
                {RightSideActiveModal && (
                  <Modal
                    title="Обьекты"
                    sameTitle="Однотипные"
                    onClose={() => setRightSideActiveModal(false)}
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
                )}
              </Layout>
            </Layout>
            <Layout className="home__footer">
              <Layout className={`home__footer-top`}>
                <Layout className="home__footer-top--tag">
                  <Tag size="xs" mode="link" label="1:200" />
                </Layout>
                <Tag size="xs" mode="link" label="Название региона, meta info" />
                <Layout className="home__footer-top--map-layer">
                  <IconMapStroked view="secondary" />
                  <Text size="xs">Слой карты</Text>
                </Layout>
              </Layout>
              <Layout className="home__footer-bottom">
                {/* <Table rows={} columns={columns} />; */}
              </Layout>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}
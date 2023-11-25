// React
import { useEffect, useRef, useState } from 'react';

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
import { IconTable2 } from '@consta/icons/IconTable2'
import { IconExpand } from '@consta/icons/IconExpand'
import { IconPanelBottom } from '@consta/icons/IconPanelBottom'
import { IconArrowDown } from '@consta/icons/IconArrowDown'

// Mock data
import {
  calculationItems,
  dataItems,
  contextMenuItems,
  sameMenuItems,
  objectMenuItems,
  ListOfDistrictsRows,
  ListOfDistrictsColumns,
  ListOfDistrictsFilter
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const [items, setItems] = useState(contextMenuItems);
  const [isOpen, setIsOpen] = useState(false);

  const [sidebarHeight, setSidebarHeight] = useState(0)
  const [sideBarFullHeight, setSideBarFullHeight] = useState(false)
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [isMapLayerOpen, setIsMapLayerOpen] = useState(false)

  // Toggle pop-up window 1 (left side)
  const toggleLeftSideModalCalc = () => {
    const active = leftSideActiveModal === 0 ? null : 0
    setLeftSideActiveModal(active)
  }

  // Toggle pop-up window 2 (left side)
  const toggleLeftSideModalData = () => {
    const active = leftSideActiveModal === 1 ? null : 1
    setLeftSideActiveModal(active)
  }

  // Toggle pop-up window 3 (right side)
  const toggleRightSideModalObject = () => {
    setRightSideActiveModal(prev => !prev)
    setIsOpen(false)
  }

  // Toggle context menu (right side)
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

  // Get window width and height for resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const calculateMapLayerPopupWidth = `calc(${windowWidth}px - 24px)`

  return (
    <>
      <Layout direction="column" className='home'>
        <Layout
          className='home__background'
          style={{ height: `calc(100dvh - (100px - ${!sideBarOpen ? '40px' : '0px'} + ${sidebarHeight}px))` }}
        >
          <img src="/assets/svg/bg-map.svg" />

          <Layout direction='column' className='home__content'>
            {windowWidth >= 640 ? (
              <Layout
                className='home__header'
                style={{ backgroundColor: `${sideBarFullHeight ? 'white' : ''}` }}
              >
                <Layout className='home__header-left'>
                  <Button
                    truncate="true"
                    onClick={toggleLeftSideModalCalc}
                    className={`home__header--button truncate-btn ${leftSideActiveModal == 0 ? 'active-button' : ''}`}
                    label="Расчет региона №1 Зеленая роща"
                    iconLeft={IconHamburger}
                    view="ghost"
                    size="xs"
                    onlyIcon={windowWidth <= 800}
                  />

                  <Button
                    onClick={toggleLeftSideModalData}
                    className={`home__header--button ${leftSideActiveModal == 1 ? 'active-button' : ''}`}
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
                    label="Move"
                    iconLeft={IconCursorMouse}
                    view="ghost"
                    size="xs"
                    onlyIcon
                  />
                  <Button
                    className='home__header--button'
                    label="Handle"
                    iconLeft={IconHand}
                    view="ghost"
                    size="xs"
                    onlyIcon
                  />
                  <Button
                    className='home__header--button'
                    label="Trim"
                    iconLeft={IconShape}
                    view="ghost"
                    size="xs"
                    onlyIcon
                  />
                </Layout>
                <Layout className='home__header-right'>
                  <Button
                    className={`home__header--button ${RightSideActiveModal ? 'active-button' : ''}`}
                    label="Обьекты"
                    iconLeft={IconFolderOpen}
                    view="ghost"
                    size="xs"
                    onlyIcon={windowWidth <= 800}
                    onClick={() => toggleRightSideModalObject()}
                  />
                  <Layout className="home__header-right--border"></Layout>
                  <Button
                    className={`home__header--button ${isOpen ? 'active-button' : ''}`}
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
                    style={{ marginLeft: '-12px' }}
                  />
                </Layout>
              </Layout>
            ) : (
              <Layout
                className='home__header'
                style={{ backgroundColor: `${sideBarFullHeight ? 'white' : ''}` }}
              >
                <Layout className='home__header-left'>
                  <Button
                    truncate="true"
                    onClick={toggleLeftSideModalCalc}
                    className={`home__header--button truncate-btn ${leftSideActiveModal == 0 ? 'active-button' : ''}`}
                    label="Расчет региона №1 Зеленая роща"
                    iconLeft={IconHamburger}
                    view="ghost"
                    size="xs"
                    onlyIcon={windowWidth <= 800}
                  />
                  <Button
                    onClick={toggleLeftSideModalData}
                    className={`home__header--button ${leftSideActiveModal == 1 ? 'active-button' : ''}`}
                    label="Данные"
                    iconLeft={IconTree}
                    view="ghost"
                    size="xs"
                    onlyIcon
                  />
                  <Button
                    className={`home__header--button  ${leftSideActiveModal == 2 ? 'active-button' : ''}`}
                    label="Обьекты"
                    iconLeft={IconFolderOpen}
                    view="ghost"
                    size="xs"
                    onlyIcon
                    onClick={() => {
                      const active = leftSideActiveModal === 2 ? null : 2
                      setLeftSideActiveModal(active)
                    }}
                  />
                  <Button
                    onClick={() => {
                      setSideBarOpen(prev => !prev)
                      if (sideBarFullHeight) {
                        setSidebarHeight(0)
                        setSideBarFullHeight(false)
                      }
                    }}
                    className={`home__header--button ${sideBarOpen ? 'active-button' : ''}`}
                    label="Таблица"
                    iconLeft={IconTable2}
                    view="ghost"
                    size="xs"
                    onlyIcon
                  />
                  <Button
                    className={`home__header--button  ${isOpen ? 'active-button' : ''}`}
                    label="Вид"
                    iconLeft={IconWindow}
                    view="ghost"
                    size="xs"
                    onlyIcon
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
                <Layout className='home__header-right'>
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
              </Layout>
            )}
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

            <Layout className="home__footer">
              <Layout className="home__footer--tag">
                <Tag size="xs" mode="link" label="1:200" />
              </Layout>
              <Layout className="home__footer--table-tag">
                <Tag
                  onClick={() => setSideBarOpen(prev => !prev)}
                  size="xs"
                  mode="link"
                  label="Название региона, meta info"
                  style={{ backgroundColor: `${sideBarOpen ? 'white' : ''}` }}
                />
              </Layout>
              <Layout className="home__footer--map-layer" onClick={() => setIsMapLayerOpen(true)}>
                <IconMapStroked view="secondary" />
                <Text size="xs">Слой карты</Text>
              </Layout>
              {isMapLayerOpen && (
                <Layout
                  direction='column'
                  key="1" data-grid={{ x: 100, y: 20, w: 3, h: 2 }}
                  className="home__footer--map-layer--popup"
                  style={{ width: `${windowWidth <= 640 ? calculateMapLayerPopupWidth : ''}` }}
                >
                  <Layout className="home__footer--map-layer--header">
                    <Layout style={{ alignItems: "center", gap: '8px' }}>
                      <IconMapStroked view="secondary" />
                      <Text size="xs">Слой карты</Text>
                    </Layout>
                    <Layout>
                      <Button
                        size="xs"
                        label="Закрыть"
                        view="clear"
                        iconLeft={IconArrowDown}
                        onlyIcon
                        onClick={() => setIsMapLayerOpen(false)}
                      />
                    </Layout>
                  </Layout>
                  <Layout className="home__footer--map-layer--content">
                    <Text size="s">Объектов пока нет</Text>
                  </Layout>
                </Layout>
              )}
            </Layout>
          </Layout>
        </Layout>
        <Layout
          direction='column'
          className="home__table" style={{ display: `${!sideBarOpen ? 'none' : ''}` }}>
          <Layout className="home__table--table-header">
            <Text size="s" weight="semibold">Список районов</Text>
            <Layout>
              <Button
                size="xs"
                label="fullscreen"
                view="clear"
                iconLeft={IconExpand}
                onlyIcon
                onClick={() => {
                  setSidebarHeight(windowHeight - 100 - 48)
                  setSideBarFullHeight(true)
                  setIsOpen(false)
                }}
              />
              <Button
                size="xs"
                label="resize"
                view="clear"
                iconLeft={IconPanelBottom}
                onlyIcon
                onClick={() => {
                  setSidebarHeight((windowHeight / 2) - 40)
                  setSideBarFullHeight(false)
                }}
              />
              <Button
                size="xs"
                label="toggle"
                view="clear"
                iconLeft={IconArrowDown}
                onlyIcon
                onClick={() => {
                  setSidebarHeight(0)
                  setSideBarFullHeight(false)
                }}
              />
            </Layout>
          </Layout>
          <Layout className="home__table--table-content" style={{ height: `${sidebarHeight}px` }}>
            <Table
              stickyHeader={true}
              verticalAlign="top"
              size="m"
              headerVerticalAlign="center"
              isResizable
              columns={ListOfDistrictsColumns}
              rows={ListOfDistrictsRows}
              filters={ListOfDistrictsFilter}
              borderBetweenRows
              className="home__table--table-content--table"
            />
          </Layout>
        </Layout>
      </Layout >
    </>
  )
}
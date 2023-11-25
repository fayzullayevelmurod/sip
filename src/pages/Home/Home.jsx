// React
import { useEffect, useRef, useState } from 'react';

// Consta/uikit components
import { Layout } from '@consta/uikit/Layout';
import { Switch } from '@consta/uikit/Switch'

// Components
import Table from './components/Table'
import ContentHeader from './components/ContentHeader';
import ContentHeaderMobile from './components/ContentHeaderMobile';
import ContentMiddle from './components/ContentMiddle';
import Footer from './components/Footer';

// Mock data
import {
  calculationItems,
  dataItems,
  contextMenuItems,
  sameMenuItems,
  objectMenuItems
} from './mock'

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

  const ref = useRef(null);

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

  // Render Switch in Context Menu (right side)
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

  // Get state switched Item
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
          style={
            { height: `calc(100dvh - (100px - ${!sideBarOpen ? '40px' : '0px'} + ${sidebarHeight}px))` }
          }
        >
          <img src="/assets/svg/bg-map.svg" />

          <Layout direction='column' className='home__content'>
            {windowWidth >= 640 ? (
              <ContentHeader
                sideBarFullHeight={sideBarFullHeight}
                toggleLeftSideModalCalc={toggleLeftSideModalCalc}
                leftSideActiveModal={leftSideActiveModal}
                windowWidth={windowWidth}
                toggleLeftSideModalData={toggleLeftSideModalData}
                RightSideActiveModal={RightSideActiveModal}
                toggleRightSideModalObject={toggleRightSideModalObject}
                isOpen={isOpen}
                ref={ref}
                toggleContextMenu={toggleContextMenu}
                items={items}
                renderRightSide={renderRightSide}
                onChange={onChange}
              />
            ) : (
              <ContentHeaderMobile
                sideBarFullHeight={sideBarFullHeight}
                toggleLeftSideModalCalc={toggleLeftSideModalCalc}
                leftSideActiveModal={leftSideActiveModal}
                windowWidth={windowWidth}
                toggleLeftSideModalData={toggleLeftSideModalData}
                RightSideActiveModal={RightSideActiveModal}
                toggleRightSideModalObject={toggleRightSideModalObject}
                isOpen={isOpen}
                toggleContextMenu={toggleContextMenu}
                items={items}
                ref={ref}
                renderRightSide={renderRightSide}
                onChange={onChange}
                setLeftSideActiveModal={setLeftSideActiveModal}
                setSideBarOpen={setSideBarOpen}
                setSidebarHeight={setSidebarHeight}
                setSideBarFullHeight={setSideBarFullHeight}
                sideBarOpen
              />
            )}
            <ContentMiddle
              leftSideActiveModal={leftSideActiveModal}
              setLeftSideActiveModal={setLeftSideActiveModal}
              calculationItems={calculationItems}
              calculationItemChecked={calculationItemChecked}
              setCalculationItemChecked={setCalculationItemChecked}
              dataItems={dataItems}
              dataItemChecked={dataItemChecked}
              setDataItemChecked={setDataItemChecked}
              RightSideActiveModal={RightSideActiveModal}
              setRightSideActiveModal={setRightSideActiveModal}
              objectMenuItems={objectMenuItems}
              objectItemChecked={objectItemChecked}
              setObjectItemChecked={setObjectItemChecked}
              sameMenuItems={sameMenuItems}
              sameItemChecked={sameItemChecked}
              setSameItemChecked={setSameItemChecked}
              ref={ref}
            />

            <Footer
              setSideBarOpen={setSideBarOpen}
              sideBarOpen={sideBarOpen}
              setIsMapLayerOpen={setIsMapLayerOpen}
              isMapLayerOpen={isMapLayerOpen}
              windowWidth={windowWidth}
              calculateMapLayerPopupWidth={calculateMapLayerPopupWidth}
            />
          </Layout>
        </Layout>
        <Table
          sideBarOpen={sideBarOpen}
          setSidebarHeight={setSidebarHeight}
          setSideBarFullHeight={setSideBarFullHeight}
          setIsOpen={setIsOpen}
          windowHeight={windowHeight}
          sidebarHeight={sidebarHeight}
        />
      </Layout >
    </>
  )
}
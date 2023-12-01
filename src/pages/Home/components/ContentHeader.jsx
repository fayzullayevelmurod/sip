import { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'

import { Layout } from "@consta/uikit/Layout"
import { Button } from "@consta/uikit/Button"
import { ContextMenu } from "@consta/uikit/ContextMenu"
import { Select } from '@consta/uikit/Select';

// Icons
import { IconCursorMouse } from "@consta/icons/IconCursorMouse"
import { IconFolderOpen } from "@consta/icons/IconFolderOpen"
import { IconHand } from "@consta/icons/IconHand"
import { IconShape } from "@consta/icons/IconShape"
import { IconNodeStep } from "@consta/icons/IconNodeStep"
import { IconTree } from "@consta/icons/IconTree"
import { IconWindow } from "@consta/icons/IconWindow"
import { IconHamburger } from "@consta/uikit/IconHamburger"

const trimItemsMock = [
  {
    label: 'Слой 1',
    id: 1,
  },
  {
    label: 'Слой 2',
    id: 2,
  },
  {
    label: 'Слой 3',
    id: 3,
  },
];

const ContentHeader = forwardRef((props, ref) => {
  const {
    tableFullHeight,
    toggleLeftSideModalCalc,
    leftSideActiveModal,
    windowWidth,
    toggleLeftSideModalData,
    RightSideActiveModal,
    toggleRightSideModalObject,
    isOpen,
    toggleContextMenu,
    items,
    renderRightSide,
    onChange
  } = props

  const [trimValue, setTrimValue] = useState({
    label: 'Слой 1',
    id: 1,
  },);
  const [isTrimSettingsOpen, setIsTrimSettigsOpen] = useState(false)

  return (
    <Layout
      className='home__header'
      style={{ backgroundColor: `${tableFullHeight ? 'white' : ''}` }}
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
        {!isTrimSettingsOpen ? (
          <>
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
              onClick={() => setIsTrimSettigsOpen(true)}
            />
          </>
        ) : (
          <>
            <Button
              className='home__header--button'
              label="Trim"
              iconLeft={IconShape}
              size="xs"
              onlyIcon
            />
            <Button
              className='home__header--button'
              label="Trim"
              view="ghost"
              iconLeft={IconNodeStep}
              size="xs"
              onlyIcon
            />
            <Layout>
              <Select
                items={trimItemsMock}
                size="xs"
                value={trimValue}
                onChange={({ value }) => setTrimValue(value)}
                style={{ width: '100px' }}
              />
            </Layout>
            <Button
              className='home__header--button'
              label="Готово"
              size="xs"
              onClick={() => setIsTrimSettigsOpen(false)}
            />
          </>
        )}

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
  )
})

ContentHeader.propTypes = {
  tableFullHeight: PropTypes.bool,
  toggleLeftSideModalCalc: PropTypes.func,
  leftSideActiveModal: PropTypes.number,
  windowWidth: PropTypes.number,
  toggleLeftSideModalData: PropTypes.func,
  RightSideActiveModal: PropTypes.bool,
  toggleRightSideModalObject: PropTypes.func,
  isOpen: PropTypes.bool,
  toggleContextMenu: PropTypes.func,
  items: PropTypes.array,
  renderRightSide: PropTypes.func,
  onChange: PropTypes.func,
}

ContentHeader.displayName = "ContentHeader"
export default ContentHeader
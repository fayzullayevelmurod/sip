import { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { Layout } from "@consta/uikit/Layout"
import { Button } from "@consta/uikit/Button"
import { ContextMenu } from "@consta/uikit/ContextMenu"

// Icons
import { IconCursorMouse } from "@consta/icons/IconCursorMouse"
import { IconFolderOpen } from "@consta/icons/IconFolderOpen"
import { IconHand } from "@consta/icons/IconHand"
import { IconShape } from "@consta/icons/IconShape"
import { IconTree } from "@consta/icons/IconTree"
import { IconWindow } from "@consta/icons/IconWindow"
import { IconHamburger } from "@consta/uikit/IconHamburger"
import { IconTable2 } from '@consta/icons/IconTable2'

const ContentHeaderMobile = forwardRef((props, ref) => {
  const {
    sideBarFullHeight,
    toggleLeftSideModalCalc,
    leftSideActiveModal,
    windowWidth,
    toggleLeftSideModalData,
    isOpen,
    toggleContextMenu,
    items,
    renderRightSide,
    onChange,
    setLeftSideActiveModal,
    setSideBarOpen,
    setSidebarHeight,
    setSideBarFullHeight,
    sideBarOpen,
    setIsOpen
  } = props

  return (
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
            setIsOpen(false)
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
  )
})

ContentHeaderMobile.propTypes = {
  sideBarFullHeight: PropTypes.bool,
  toggleLeftSideModalCalc: PropTypes.func,
  leftSideActiveModal: PropTypes.number,
  windowWidth: PropTypes.number,
  toggleLeftSideModalData: PropTypes.func,
  isOpen: PropTypes.bool,
  toggleContextMenu: PropTypes.func,
  items: PropTypes.array,
  renderRightSide: PropTypes.func,
  onChange: PropTypes.func,
  setLeftSideActiveModal: PropTypes.func,
  setSideBarOpen: PropTypes.func,
  setSidebarHeight: PropTypes.func,
  setSideBarFullHeight: PropTypes.func,
  sideBarOpen: PropTypes.bool,
  setIsOpen: PropTypes.func
}

ContentHeaderMobile.displayName = "ContentHeaderMobile"
export default ContentHeaderMobile
import PropTypes from 'prop-types'

// Consta/uikit components
import { Table as ConstaTable } from "@consta/uikit/Table"
import { Button } from "@consta/uikit/Button"
import { Layout } from "@consta/uikit/Layout"
import { Text } from "@consta/uikit/Text"

// Icons
import { IconExpand } from "@consta/icons/IconExpand"
import { IconPanelBottom } from "@consta/icons/IconPanelBottom"
import { IconArrowDown } from "@consta/icons/IconArrowDown"

// Mock data
import {
  ListOfDistrictsColumns,
  ListOfDistrictsFilter,
  ListOfDistrictsRows
} from "../mock"

export default function Table(props) {
  const {
    sideBarOpen,
    setSidebarHeight,
    setSideBarFullHeight,
    setIsOpen,
    windowHeight,
    sidebarHeight,
  } = props

  return (
    <Layout
      direction='column'
      className="home__table" style={{ display: `${!sideBarOpen ? 'none' : ''}` }}>

      {/* Table Header */}
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

      {/* Table Content */}
      <Layout className="home__table--table-content" style={{ height: `${sidebarHeight}px` }}>
        <ConstaTable
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
  )
}

Table.propTypes = {
  sideBarOpen: PropTypes.bool,
  setSidebarHeight: PropTypes.func,
  setSideBarFullHeight: PropTypes.func,
  setIsOpen: PropTypes.func,
  windowHeight: PropTypes.number,
  sidebarHeight: PropTypes.number,
}
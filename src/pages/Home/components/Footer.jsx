import PropTypes from 'prop-types'

import { Button } from '@consta/uikit/Button'
import { Layout } from '@consta/uikit/Layout'
import { Tag } from '@consta/uikit/Tag'
import { Text } from '@consta/uikit/Text'

import { IconMapStroked } from '@consta/icons/IconMapStroked'
import { IconArrowDown } from '@consta/icons/IconArrowDown'

export default function Footer(props) {
  const {
    setTableOpen,
    tableOpen,
    setIsMapLayerOpen,
    isMapLayerOpen,
    windowWidth,
    calculateMapLayerPopupWidth
  } = props

  return (
    <Layout className="home__footer">
      <Layout className="home__footer--tag">
        <Tag size="xs" mode="link" label="1:200" />
      </Layout>
      <Layout className="home__footer--table-tag">
        <Tag
          onClick={() => setTableOpen(prev => !prev)}
          size="xs"
          mode="link"
          label="Название региона, meta info"
          style={{ backgroundColor: `${tableOpen ? 'white' : ''}` }}
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
  )
}

Footer.propTypes = {
  setTableOpen: PropTypes.func,
  tableOpen: PropTypes.bool,
  setIsMapLayerOpen: PropTypes.func,
  isMapLayerOpen: PropTypes.bool,
  windowWidth: PropTypes.number,
  calculateMapLayerPopupWidth: PropTypes.string
}
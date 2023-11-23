import { useState } from 'react';

import { List } from '@consta/uikit/ListCanary';
import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';

import { IconHamburger } from '@consta/uikit/IconHamburger'
import { IconTree } from '@consta/icons/IconTree'
import { IconCursorMouse } from '@consta/icons/IconCursorMouse'
import { IconHand } from '@consta/icons/IconHand'
import { IconShape } from '@consta/icons/IconShape'
import { IconFolderOpen } from '@consta/icons/IconFolderOpen'
import { IconWindow } from '@consta/icons/IconWindow'
import { IconDinosaur } from '@consta/icons/IconDinosaur'

import Modal from '@components/common/Modal/';
import './Home.style.scss'

const calculationItems = [
  {
    id: 1,
    label: 'Расчет региона №1',
    leftIcon: IconDinosaur,
    date: '20.10.23'
  },
  {
    id: 2,
    leftIcon: IconDinosaur,
    label: 'Расчет №2'
  },
  {
    id: 2,
    leftIcon: IconDinosaur,
    label: 'Расчет №2'
  },
  {
    id: 1,
    label: 'Расчет региона №1',
    leftIcon: IconDinosaur,
    date: '20.10.23'
  },
  {
    id: 2,
    leftIcon: IconDinosaur,
    label: 'Расчет №2'
  },
  {
    id: 2,
    leftIcon: IconDinosaur,
    label: 'Расчет №2'
  },
  {
    id: 1,
    label: 'Расчет региона №1',
    leftIcon: IconDinosaur,
    date: '20.10.23'
  },
  {
    id: 2,
    leftIcon: IconDinosaur,
    label: 'Расчет №2'
  },
  {
    id: 2,
    leftIcon: IconDinosaur,
    label: 'Расчет №2'
  },
  {
    id: 1,
    label: 'Расчет региона №1',
    leftIcon: IconDinosaur,
    date: '20.10.23'
  },
  {
    id: 2,
    leftIcon: IconDinosaur,
    label: 'Расчет №2'
  },
  {
    id: 2,
    leftIcon: IconDinosaur,
    label: 'Расчет №2'
  },
  {
    id: 1,
    label: 'Расчет региона №1',
    leftIcon: IconDinosaur,
    date: '20.10.23'
  },
  {
    id: 2,
    leftIcon: IconDinosaur,
    label: 'Расчет №2'
  },
  {
    id: 2,
    leftIcon: IconDinosaur,
    label: 'Расчет №2'
  },
]

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeModal, setActiveModal] = useState(0)
  const [calculationItemChecked, setCalculationItemChecked] = useState(calculationItems[0]);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev)
  }

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
                  onClick={toggleModal}
                  className='home__header--button truncate-btn'
                  label="Расчет региона №1 Зеленая роща"
                  iconLeft={IconHamburger}
                  view="ghost"
                  size="xs"
                />
                <Button
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
                />
                <Layout className="home__header-right--border"></Layout>
                <Button
                  className='home__header--button'
                  label="Вид"
                  iconLeft={IconWindow}
                  view="ghost"
                  size="xs"
                />
              </Layout>
            </Layout>
            <Layout className="home__middle">
              {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
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
                </Modal>
              )}
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}
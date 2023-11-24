import { IconDinosaur } from '@consta/icons/IconDinosaur'

export const calculationItems = [
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
    id: 3,
    leftIcon: IconDinosaur,
    label: 'Расчет №2'
  },
]

export const dataItems = [
  {
    id: 1,
    label: 'Москва',
    leftIcon: IconDinosaur,
  },
  {
    id: 2,
    leftIcon: IconDinosaur,
    label: 'Казань'
  },
  {
    id: 3,
    leftIcon: IconDinosaur,
    label: 'Новосибирск'
  },
]

export const contextMenuItems = [
  {
    label: 'Таблица',
    switch: false,
  },
  {
    label: 'Линейка',
    switch: false,
  },
  {
    label: 'Легенда',
    switch: false,
  },
];

export const sameMenuItems = [
  {
    id: 1,
    label: 'Завод 1',
    leftIcon: IconDinosaur,
  },
  {
    id: 2,
    leftIcon: IconDinosaur,
    label: 'Завод 2'
  },
  {
    id: 3,
    leftIcon: IconDinosaur,
    label: 'Завод 3'
  },
]

export const objectMenuItems = [
  {
    id: 1,
    label: 'Фабрика 1',
    leftIcon: IconDinosaur,
  },
  {
    id: 2,
    leftIcon: IconDinosaur,
    label: 'Фабрика 2'
  },
  {
    id: 3,
    leftIcon: IconDinosaur,
    label: 'Фабрика 3'
  },
  {
    id: 4,
    leftIcon: IconDinosaur,
    label: 'Фабрика 4'
  },
  {
    id: 5,
    leftIcon: IconDinosaur,
    label: 'Фабрика 5'
  },
]

export const ListOfDistrictsRows = [
  {
    id: '1',
    location: 'Северное',
    year: 1982,
    type: 'Открытое',
    population: 5000,
  }
]

export const ListOfDistrictsColumns = [
  {
    title: '№',
    accessor: 'id',
    align: 'center',
    width: 100,
    sortable: true,
  },
  {
    title: 'Имя',
    accessor: 'location',
    sortable: true,
  },
];
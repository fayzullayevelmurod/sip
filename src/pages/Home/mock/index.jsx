import { IconDinosaur } from '@consta/icons/IconDinosaur'
import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';

import { IconEdit } from '@consta/icons/IconEdit'
import { IconTrash } from '@consta/icons/IconTrash'

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
    text: "Москва́ — столица России, город федерального значения, административный центр"
  },
  {
    id: 2,
    leftIcon: IconDinosaur,
    label: 'Казань',
    text: "Казань — lorem ipsum"
  },
  {
    id: 3,
    leftIcon: IconDinosaur,
    label: 'Новосибирск',
    text: "Новосибирск — lorem ipsum, lorem ipsum"
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
    id: "1",
    location: "Северное",
    year: "1982",
    type: "Открытое",
    population: "5000",
  },
  {
    id: "2",
    location: "Северное",
    year: "1982",
    type: "Открытое",
    population: "5000",
  },
  {
    id: "3",
    location: "Северное",
    year: "1982",
    type: "Открытое",
    population: "5000",
  },
  {
    id: "4",
    location: "Северное",
    year: "1982",
    type: "Открытое",
    population: "5000",
  },
  {
    id: "5",
    location: "Северное",
    year: "1982",
    type: "Открытое",
    population: "5000",
  },
  {
    id: "6",
    location: "Северное",
    year: "1982",
    type: "Открытое",
    population: "5000",
  },
  {
    id: "7",
    location: "Северное",
    year: "1982",
    type: "Открытое",
    population: "5000",
  },
  {
    id: "8",
    location: "Северное",
    year: "1982",
    type: "Открытое",
    population: "5000",
  },
  {
    id: "9",
    location: "Северное",
    year: "1982",
    type: "Открытое",
    population: "5000",
  },
];

export const ListOfDistrictsColumns = [
  {
    title: "Местоположение",
    accessor: "location",
  },
  {
    title: "Год открытия",
    accessor: "year",
  },
  {
    title: "Тип",
    accessor: "type",
  },
  {
    title: "население, МЛН.Т",
    align: 'right',
    accessor: "population",
  },
  {
    title: "Действия",
    align: 'right',
    renderCell: () => (
      <Layout style={{ gap: 5 }}>
        <Button label="Редактировать" iconLeft={IconEdit} size="xs" view="ghost" />
        <Button label="Удалить" iconLeft={IconTrash} onlyIcon size="xs" view="ghost" />
      </Layout>
    ),
  }
];

export const ListOfDistrictsFilter = [
  {
    id: 'location-filter',
    name: 'Все',
    field: 'location',
    filterer: (value) => (value),
  }
]
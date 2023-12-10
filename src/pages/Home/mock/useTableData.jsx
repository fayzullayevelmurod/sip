// Custom table design with inline styles and mock data
import { useRef, useState } from "react";

import { Button } from "@consta/uikit/Button";
import { Layout } from "@consta/uikit/Layout";
import { ContextMenu } from "@consta/uikit/ContextMenu";
import { Badge } from "@consta/uikit/Badge";
import { Tag } from "@consta/uikit/Tag";
import { Switch } from "@consta/uikit/Switch";

import { IconFlagFilled } from "@consta/icons/IconFlagFilled";
import { IconFolderClosed } from "@consta/icons/IconFolderClosed";
import { IconStorage } from "@consta/icons/IconStorage";
import { IconHome } from "@consta/icons/IconHome";
import { IconEye } from "@consta/icons/IconEye";
import { IconEyeClose } from "@consta/icons/IconEyeClose";
import { IconKebab } from "@consta/icons/IconKebab";
import { IconAlert } from "@consta/icons/IconAlert";
import { IconPlay } from "@consta/icons/IconPlay";
import { IconAllDone } from "@consta/icons/IconAllDone";
import { IconArrowRight } from "@consta/icons/IconArrowRight";
import { IconSelect } from "@consta/icons/IconSelect";

import Input from "../components/Input";

const contextItems = [
  {
    label: "Запустить расчет",
  },
  {
    label: "Параметры",
  },
  {
    label: "Удалить",
  },
];

const switchContextItems = [
  {
    label: "Тип 1",
    switch: true,
  },
  {
    label: "Тип 2",
    switch: false,
  },
];

export default function useTableData() {
  // table left side
  const [isContextOpen_1, setIsContextOpen_1] = useState(false);
  const [isContextOpen_2, setIsContextOpen_2] = useState(false);
  const [isContextOpen_3, setIsContextOpen_3] = useState(false);
  const [isContextOpen_4, setIsContextOpen_4] = useState(false);
  const [isContextOpen_5, setIsContextOpen_5] = useState(false);
  const [isContextOpen_6, setIsContextOpen_6] = useState(false);
  const [isContextOpen_7, setIsContextOpen_7] = useState(false);
  const [isContextOpen_8, setIsContextOpen_8] = useState(false);

  // table left side
  const contextRef1 = useRef(null);
  const contextRef2 = useRef(null);
  const contextRef3 = useRef(null);
  const contextRef4 = useRef(null);
  const contextRef5 = useRef(null);
  const contextRef6 = useRef(null);
  const contextRef7 = useRef(null);
  const contextRef8 = useRef(null);

  // switch context
  const [isSwitchContextOpen_1, setIsSwitchContextOpen_1] = useState(false);

  // switch context
  const switchContextRef1 = useRef(null);

  // input values
  const [inputValue, setInputValue] = useState({
    input1: "-",
    input2: "1",
  });

  const [switchItems, setSwitchItems] = useState(switchContextItems);

  // Render Switch in Context Menu (right side)
  function renderSwitch(item, onChange) {
    const nodeArray = [];

    if (item.switch !== undefined) {
      nodeArray.push(
        <Switch
          size="s"
          checked={item.switch}
          onChange={() => onChange(item)}
          key="Switch"
        />
      );
    }

    return nodeArray;
  }

  // Get state switched Item
  const onChangeSwitch = (switchItem) => {
    const newItems = switchItems.map((item, index) => {
      if (switchItem.label === item.label) {
        return { ...switchItems[index], switch: !switchItems[index].switch };
      }
      return item;
    });

    setSwitchItems(newItems);
  };

  // All table data
  return {
    cols: [
      {
        title: "Обьекты",
        accessor: "field",
        width: 441,
        columns: [
          {
            title: "Название",
            accessor: "field",
            width: 441,
            renderCell: (row) => (
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "5px",
                }}
              >
                <Layout style={{ alignItems: "center", gap: "8px" }}>
                  {row.leftIcon}
                  <span>
                    {row.field} <i style={{ color: "gray" }}>{row.km}</i>
                  </span>
                </Layout>
                <Layout style={{ gap: "4px", marginLeft: "20px" }}>
                  {row.rightIcon1}
                  {row.rightIcon2}
                </Layout>
              </Layout>
            ),
          },
        ],
      },
      {
        title: "Группа 1",
        accessor: "group1",
        width: 200,
        control: () => (
          <Button
            size="xs"
            iconSize="s"
            view="clear"
            onlyIcon
            iconLeft={IconArrowRight}
          />
        ),
        columns: [
          {
            title: "Статус",
            accessor: "status",
            width: 200,
            renderCell: (row) => <> {row.status}</>,
          },
        ],
      },
      {
        title: "Группа 2",
        accessor: "group2",
        width: 360,
        control: () => (
          <Button
            size="xs"
            iconSize="s"
            view="clear"
            onlyIcon
            iconLeft={IconArrowRight}
          />
        ),
        columns: [
          {
            title: "Название, м",
            accessor: "type",
            width: 160,
          },
          {
            title: "Название, м",
            accessor: "type2",
            width: 100,
          },
          {
            title: "Название, м",
            accessor: "type3",
            width: 100,
          },
        ],
      },
      {
        title: "Группа 3",
        accessor: "group3",
        width: 400,
        columns: [
          {
            title: "Название, м",
            accessor: "group3.1",
            width: 100,
          },
          {
            title: "Название, м",
            accessor: "type5",
            width: 100,
          },
          {
            title: "Название, м",
            accessor: "group3.3",
            width: 100,
          },
          {
            title: "Название, м",
            accessor: "group3.3",
            width: 100,
          },
        ],
      },
      {
        title: "Группа 4",
        accessor: "group4",
        width: 360,
        columns: [
          {
            title: "Название, м",
            accessor: "group4.1",
            width: 160,
          },
          {
            title: "Название, м",
            accessor: "group4.2",
            width: 100,
          },
          {
            title: "Название, м",
            accessor: "group4.3",
            width: 100,
          },
        ],
      },
    ],
    rows: [
      {
        id: "row1",
        field: "Страна",
        leftIcon: <IconFolderClosed size="xs" view="secondary" />,
        status: (
          <Layout
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              padding: "4px 8px",
            }}
          >
            <Badge
              size="xs"
              view="stroked"
              iconLeft={IconAlert}
              status="system"
              label="Черновик"
            />
            <Button iconLeft={IconPlay} onlyIcon size="xs" view="ghost" />
          </Layout>
        ),
        type: (
          <Layout
            className="active-cell"
            style={{ gap: "4px", height: "100%", padding: "4px 8px" }}
          >
            <Tag size="xs" mode="check" label="Тип 1" group={8} />
            <Tag size="xs" mode="check" label="Тип 1" group={5} />
          </Layout>
        ),
        type2: (
          <Layout
            style={{
              justifyContent: "end",
              height: "100%",
            }}
            className="active-cell"
          >
            <Input
              type="text"
              value={inputValue.input1}
              onChange={(e) =>
                setInputValue((prev) => ({ ...prev, input1: e.target.value }))
              }
            />
          </Layout>
        ),
        type3: (
          <Layout
            style={{
              justifyContent: "end",
              height: "100%",
            }}
            className="active-cell"
          >
            <Input
              type="text"
              value={inputValue.input2}
              onChange={(e) =>
                setInputValue((prev) => ({ ...prev, input2: e.target.value }))
              }
            />
          </Layout>
        ),
        type5: (
          <Layout
            className={`active-cell ${
              isSwitchContextOpen_1 ? "focus-cell" : ""
            }`}
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              gap: "2px",
              height: "100%",
              padding: "4px 4px",
            }}
            ref={switchContextRef1}
            onClick={() => setIsSwitchContextOpen_1((prev) => !prev)}
          >
            {switchItems.map(
              (item) =>
                item.switch && (
                  <Layout key={item.label}>
                    <Tag size="xs" mode="check" label={item.label} />
                  </Layout>
                )
            )}
            {!switchItems.some((item) => item.switch) && <span>-</span>}
            <IconSelect size="xs" />
            <ContextMenu
              size="xs"
              isOpen={isSwitchContextOpen_1}
              items={switchItems}
              anchorRef={switchContextRef1}
              getItemRightSide={(item) => renderSwitch(item, onChangeSwitch)}
              direction="downStartLeft"
              style={{ width: "100px" }}
            />
          </Layout>
        ),
        rows: [
          {
            id: "row1.1",
            field: "Граница 1",
            km: "200 км",
            status: (
              <Layout style={{ alignItems: "center", gap: "20px" }}>
                <Badge
                  size="xs"
                  view="stroked"
                  iconLeft={IconAllDone}
                  status="success"
                  label="Готово"
                />
                <Button iconLeft={IconPlay} onlyIcon size="xs" view="ghost" />
              </Layout>
            ),
            leftIcon: <IconFlagFilled size="xs" view="secondary" />,
            rightIcon1: (
              <Button size="xs" view="clear" onlyIcon iconLeft={IconEye} />
            ),
            rightIcon2: (
              <>
                <Button
                  ref={contextRef1}
                  size="xs"
                  view="clear"
                  onlyIcon
                  iconLeft={IconKebab}
                  onClick={() => setIsContextOpen_1((p) => !p)}
                />
                <ContextMenu
                  size="xs"
                  isOpen={isContextOpen_1}
                  items={contextItems}
                  anchorRef={contextRef1}
                  direction="downStartRight"
                  className="table-context"
                />
              </>
            ),
            rows: [
              {
                id: "row1.1.1",
                field: "Район 1",
                leftIcon: <IconStorage size="xs" view="secondary" />,
                rightIcon1: (
                  <Button size="xs" view="clear" onlyIcon iconLeft={IconEye} />
                ),
                rightIcon2: (
                  <>
                    <Button
                      ref={contextRef2}
                      size="xs"
                      view="clear"
                      onlyIcon
                      iconLeft={IconKebab}
                      onClick={() => setIsContextOpen_2((p) => !p)}
                    />
                    <ContextMenu
                      size="xs"
                      isOpen={isContextOpen_2}
                      items={contextItems}
                      anchorRef={contextRef2}
                      direction="downStartRight"
                      className="table-context"
                    />
                  </>
                ),
                status: (
                  <Layout style={{ alignItems: "center", gap: "20px" }}>
                    <Badge
                      size="xs"
                      view="stroked"
                      iconLeft={IconAllDone}
                      status="success"
                      label="Готово"
                    />
                    <Button
                      iconLeft={IconPlay}
                      onlyIcon
                      size="xs"
                      view="ghost"
                    />
                  </Layout>
                ),
                type: (
                  <Layout className="active-cell" style={{ gap: "4px" }}>
                    <Tag size="xs" mode="check" label="Тип 1" group={8} />
                    <Tag size="xs" mode="check" label="Тип 1" group={5} />
                  </Layout>
                ),
                type2: (
                  <Layout
                    style={{ justifyContent: "end" }}
                    className="active-cell"
                  >
                    <span>-</span>
                  </Layout>
                ),
                type3: (
                  <Layout
                    style={{ justifyContent: "end" }}
                    className="active-cell"
                  >
                    <span>1</span>
                  </Layout>
                ),
                rows: [
                  {
                    id: "row1.1.1.1",
                    field: "Город 1",
                    leftIcon: <IconHome size="xs" view="secondary" />,
                    rightIcon1: (
                      <Button
                        size="xs"
                        view="clear"
                        onlyIcon
                        iconLeft={IconEye}
                      />
                    ),
                    rightIcon2: (
                      <>
                        <Button
                          ref={contextRef3}
                          size="xs"
                          view="clear"
                          onlyIcon
                          iconLeft={IconKebab}
                          onClick={() => setIsContextOpen_3((p) => !p)}
                        />
                        <ContextMenu
                          size="xs"
                          isOpen={isContextOpen_3}
                          items={contextItems}
                          anchorRef={contextRef3}
                          direction="downStartRight"
                          className="table-context"
                        />
                      </>
                    ),
                    status: (
                      <Layout style={{ alignItems: "center", gap: "20px" }}>
                        <Badge
                          size="xs"
                          view="stroked"
                          iconLeft={IconAlert}
                          status="warning"
                          label="Изменено"
                        />
                        <Button
                          iconLeft={IconPlay}
                          onlyIcon
                          size="xs"
                          view="ghost"
                        />
                      </Layout>
                    ),
                    type: (
                      <Layout className="active-cell" style={{ gap: "4px" }}>
                        <Tag size="xs" mode="check" label="Тип 1" group={8} />
                        <Tag size="xs" mode="check" label="Тип 1" group={5} />
                      </Layout>
                    ),
                  },
                  {
                    id: "row1.1.1.2",
                    field: "Город 2",
                    leftIcon: <IconHome size="xs" view="secondary" />,
                    rightIcon1: (
                      <Button
                        size="xs"
                        view="clear"
                        onlyIcon
                        iconLeft={IconEyeClose}
                      />
                    ),
                    rightIcon2: (
                      <>
                        <Button
                          ref={contextRef4}
                          size="xs"
                          view="clear"
                          onlyIcon
                          iconLeft={IconKebab}
                          onClick={() => setIsContextOpen_4((p) => !p)}
                        />
                        <ContextMenu
                          size="xs"
                          isOpen={isContextOpen_4}
                          items={contextItems}
                          anchorRef={contextRef4}
                          direction="downStartRight"
                          className="table-context"
                        />
                      </>
                    ),
                    status: (
                      <Layout style={{ alignItems: "center", gap: "20px" }}>
                        <Badge
                          size="xs"
                          view="stroked"
                          iconLeft={IconAlert}
                          status="system"
                          label="Черновик"
                        />
                        <Button
                          iconLeft={IconPlay}
                          onlyIcon
                          size="xs"
                          view="ghost"
                        />
                      </Layout>
                    ),
                    type: (
                      <Layout className="active-cell" style={{ gap: "4px" }}>
                        <Tag size="xs" mode="check" label="Тип 1" group={8} />
                        <Tag size="xs" mode="check" label="Тип 1" group={5} />
                      </Layout>
                    ),
                    type2: (
                      <Layout
                        style={{ justifyContent: "end" }}
                        className="active-cell"
                      >
                        <span>-</span>
                      </Layout>
                    ),
                    type3: (
                      <Layout
                        style={{ justifyContent: "end" }}
                        className="active-cell"
                      >
                        <span>1</span>
                      </Layout>
                    ),
                  },
                ],
              },
              {
                id: "row1.2.1",
                field: "Граница 2",
                km: "300 км",
                leftIcon: <IconFlagFilled size="xs" view="secondary" />,
                rightIcon1: (
                  <Button size="xs" view="clear" onlyIcon iconLeft={IconEye} />
                ),
                rightIcon2: (
                  <>
                    <Button
                      ref={contextRef5}
                      size="xs"
                      view="clear"
                      onlyIcon
                      iconLeft={IconKebab}
                      onClick={() => setIsContextOpen_5((p) => !p)}
                    />
                    <ContextMenu
                      size="xs"
                      isOpen={isContextOpen_5}
                      items={contextItems}
                      anchorRef={contextRef5}
                      direction="downStartRight"
                      className="table-context"
                    />
                  </>
                ),
                status: (
                  <Layout style={{ alignItems: "center", gap: "20px" }}>
                    <Badge
                      size="xs"
                      view="stroked"
                      iconLeft={IconAlert}
                      status="system"
                      label="Черновик"
                    />
                    <Button
                      iconLeft={IconPlay}
                      onlyIcon
                      size="xs"
                      view="ghost"
                    />
                  </Layout>
                ),
                rows: [
                  {
                    id: "row1.2.1.1",
                    field: "Район 2",
                    leftIcon: <IconStorage size="xs" view="secondary" />,
                    rightIcon1: (
                      <Button
                        size="xs"
                        view="clear"
                        onlyIcon
                        iconLeft={IconEye}
                      />
                    ),
                    rightIcon2: (
                      <>
                        <Button
                          ref={contextRef6}
                          size="xs"
                          view="clear"
                          onlyIcon
                          iconLeft={IconKebab}
                          onClick={() => setIsContextOpen_6((p) => !p)}
                        />
                        <ContextMenu
                          size="xs"
                          isOpen={isContextOpen_6}
                          items={contextItems}
                          anchorRef={contextRef6}
                          direction="downStartRight"
                          className="table-context"
                        />
                      </>
                    ),
                    status: (
                      <Layout style={{ alignItems: "center", gap: "20px" }}>
                        <Badge
                          size="xs"
                          view="stroked"
                          iconLeft={IconAlert}
                          status="system"
                          label="Черновик"
                        />
                        <Button
                          iconLeft={IconPlay}
                          onlyIcon
                          size="xs"
                          view="ghost"
                        />
                      </Layout>
                    ),
                    type: (
                      <Layout className="active-cell" style={{ gap: "4px" }}>
                        <Tag size="xs" mode="check" label="Тип 1" group={8} />
                        <Tag size="xs" mode="check" label="Тип 1" group={5} />
                      </Layout>
                    ),
                    type2: (
                      <Layout
                        style={{ justifyContent: "end" }}
                        className="active-cell"
                      >
                        <span>-</span>
                      </Layout>
                    ),
                    type3: (
                      <Layout
                        style={{ justifyContent: "end" }}
                        className="active-cell"
                      >
                        <span>1</span>
                      </Layout>
                    ),
                    rows: [
                      {
                        id: "row1.2.1.2",
                        field: "Город 3",
                        leftIcon: <IconHome size="xs" view="secondary" />,
                        rightIcon1: (
                          <Button
                            size="xs"
                            view="clear"
                            onlyIcon
                            iconLeft={IconEye}
                          />
                        ),
                        rightIcon2: (
                          <>
                            <Button
                              ref={contextRef7}
                              size="xs"
                              view="clear"
                              onlyIcon
                              iconLeft={IconKebab}
                              onClick={() => setIsContextOpen_7((p) => !p)}
                            />
                            <ContextMenu
                              size="xs"
                              isOpen={isContextOpen_7}
                              items={contextItems}
                              anchorRef={contextRef7}
                              direction="downStartRight"
                              className="table-context"
                            />
                          </>
                        ),
                        status: (
                          <Layout style={{ alignItems: "center", gap: "20px" }}>
                            <Badge
                              size="xs"
                              view="stroked"
                              iconLeft={IconAllDone}
                              status="success"
                              label="Готово"
                            />
                            <Button
                              iconLeft={IconPlay}
                              onlyIcon
                              size="xs"
                              view="ghost"
                            />
                          </Layout>
                        ),
                        type: (
                          <Layout
                            className="active-cell"
                            style={{ gap: "4px" }}
                          >
                            <Tag
                              size="xs"
                              mode="check"
                              label="Тип 1"
                              group={8}
                            />
                            <Tag
                              size="xs"
                              mode="check"
                              label="Тип 1"
                              group={5}
                            />
                          </Layout>
                        ),
                        type2: (
                          <Layout
                            style={{ justifyContent: "end" }}
                            className="active-cell"
                          >
                            <span>-</span>
                          </Layout>
                        ),
                        type3: (
                          <Layout
                            style={{ justifyContent: "end" }}
                            className="active-cell"
                          >
                            <span>1</span>
                          </Layout>
                        ),
                      },
                      {
                        id: "row1.2.1.3",
                        field: "Город 4",
                        leftIcon: <IconHome size="xs" view="secondary" />,
                        rightIcon1: (
                          <Button
                            size="xs"
                            view="clear"
                            onlyIcon
                            iconLeft={IconEyeClose}
                          />
                        ),
                        rightIcon2: (
                          <>
                            <Button
                              ref={contextRef8}
                              size="xs"
                              view="clear"
                              onlyIcon
                              iconLeft={IconKebab}
                              onClick={() => setIsContextOpen_8((p) => !p)}
                            />
                            <ContextMenu
                              size="xs"
                              isOpen={isContextOpen_8}
                              items={contextItems}
                              anchorRef={contextRef8}
                              direction="downStartRight"
                              className="table-context"
                            />
                          </>
                        ),
                        status: (
                          <Layout style={{ alignItems: "center", gap: "20px" }}>
                            <Badge
                              size="xs"
                              view="stroked"
                              iconLeft={IconAlert}
                              status="system"
                              label="Черновик"
                            />
                            <Button
                              iconLeft={IconPlay}
                              onlyIcon
                              size="xs"
                              view="ghost"
                            />
                          </Layout>
                        ),
                        type: (
                          <Layout
                            className="active-cell"
                            style={{ gap: "4px" }}
                          >
                            <Tag
                              size="xs"
                              mode="check"
                              label="Тип 1"
                              group={8}
                            />
                            <Tag
                              size="xs"
                              mode="check"
                              label="Тип 1"
                              group={5}
                            />
                          </Layout>
                        ),
                        type2: (
                          <Layout
                            style={{ justifyContent: "end" }}
                            className="active-cell"
                          >
                            <span>-</span>
                          </Layout>
                        ),
                        type3: (
                          <Layout
                            style={{ justifyContent: "end" }}
                            className="active-cell"
                          >
                            <span>1</span>
                          </Layout>
                        ),
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
}

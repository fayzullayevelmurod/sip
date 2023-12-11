// Warning: Custom table design with inline styles and mock data
import { useRef, useState } from "react";

import { Button } from "@consta/uikit/Button";
import { Layout } from "@consta/uikit/Layout";
import { ContextMenu } from "@consta/uikit/ContextMenu";
import { Badge } from "@consta/uikit/Badge";
import { Tag } from "@consta/uikit/Tag";
import SwitchComponent from "../components/ui/SwitchComponent";

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
import { IconArrowLeft } from "@consta/icons/IconArrowLeft";

import Input from "../components/ui/Input";

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
  const [isSwitchContextOpen_2, setIsSwitchContextOpen_2] = useState(false);
  const [isSwitchContextOpen_3, setIsSwitchContextOpen_3] = useState(false);
  const [isSwitchContextOpen_4, setIsSwitchContextOpen_4] = useState(false);

  const [switchItems, setSwitchItems] = useState({
    switch1: switchContextItems,
    switch2: switchContextItems,
    switch3: switchContextItems,
    switch4: switchContextItems,
  });

  // input values
  const [inputValue, setInputValue] = useState({
    input1: "-",
    input2: "1",
    input3: "2",
    input4: "-",
    input5: "1",
    input6: "-",
    input7: "1",
    input8: "-",
    input9: "1",
    input10: "-",
    input11: "1",
    input12: "2",
    input13: "-",
    input14: "1",
    input15: "2",
    input16: "-",
    input17: "1",
    input18: "2",
    input19: "-",
    input20: "1",
  });

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
                  paddingTop: "6px",
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
            iconLeft={IconArrowLeft}
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
        control: () => (
          <Button
            size="xs"
            iconSize="s"
            view="clear"
            onlyIcon
            iconLeft={IconArrowLeft}
          />
        ),
        columns: [
          {
            title: "Название, м",
            accessor: "type4",
            width: 100,
          },
          {
            title: "Название, м",
            accessor: "type5",
            width: 100,
          },
          {
            title: "Название, м",
            accessor: "type6",
            width: 100,
          },
          {
            title: "Название, м",
            accessor: "type7",
            width: 100,
          },
        ],
      },
      {
        title: "Группа 4",
        accessor: "group4",
        width: 360,
        control: () => (
          <Button
            size="xs"
            iconSize="s"
            view="clear"
            onlyIcon
            iconLeft={IconArrowLeft}
          />
        ),
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
            style={{
              gap: "4px",
              height: "100%",
              padding: "4px 8px",
              alignItems: "center",
            }}
          >
            <Tag size="xs" mode="check" label="Тип 1" group={8} />
            <Tag size="xs" mode="check" label="Тип 2" group={5} />
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
        type4: (
          <Layout
            style={{
              justifyContent: "end",
              height: "100%",
            }}
            className="active-cell"
          >
            <Input
              type="text"
              value={inputValue.input3}
              onChange={(e) =>
                setInputValue((prev) => ({ ...prev, input3: e.target.value }))
              }
            />
          </Layout>
        ),
        type5: (
          <SwitchComponent
            items={switchItems.switch1}
            setItems={(items) =>
              setSwitchItems((prev) => ({ ...prev, switch1: items }))
            }
            isOpen={isSwitchContextOpen_1}
            setIsOpen={setIsSwitchContextOpen_1}
          />
        ),
        type6: (
          <Layout
            style={{
              justifyContent: "end",
              height: "100%",
            }}
            className="active-cell"
          >
            <Input
              type="text"
              value={inputValue.input4}
              onChange={(e) =>
                setInputValue((prev) => ({ ...prev, input4: e.target.value }))
              }
            />
          </Layout>
        ),
        type7: (
          <Layout
            style={{
              justifyContent: "end",
              height: "100%",
            }}
            className="active-cell"
          >
            <Input
              type="text"
              value={inputValue.input5}
              onChange={(e) =>
                setInputValue((prev) => ({ ...prev, input5: e.target.value }))
              }
            />
          </Layout>
        ),
        rows: [
          {
            id: "row1.1",
            field: "Граница 1",
            km: "200 км",
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
                    style={{
                      gap: "4px",
                      height: "100%",
                      padding: "4px 8px",
                      alignItems: "center",
                    }}
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
                      value={inputValue.input6}
                      onChange={(e) =>
                        setInputValue((prev) => ({
                          ...prev,
                          input6: e.target.value,
                        }))
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
                      value={inputValue.input7}
                      onChange={(e) =>
                        setInputValue((prev) => ({
                          ...prev,
                          input7: e.target.value,
                        }))
                      }
                    />
                  </Layout>
                ),
                type4: (
                  <Layout
                    style={{
                      justifyContent: "end",
                      height: "100%",
                    }}
                    className="active-cell"
                  >
                    <Input
                      type="text"
                      value={inputValue.input12}
                      onChange={(e) =>
                        setInputValue((prev) => ({
                          ...prev,
                          input12: e.target.value,
                        }))
                      }
                    />
                  </Layout>
                ),
                type5: (
                  <SwitchComponent
                    items={switchItems.switch2}
                    setItems={(items) =>
                      setSwitchItems((prev) => ({ ...prev, switch2: items }))
                    }
                    isOpen={isSwitchContextOpen_2}
                    setIsOpen={setIsSwitchContextOpen_2}
                  />
                ),
                type6: (
                  <Layout
                    style={{
                      justifyContent: "end",
                      height: "100%",
                    }}
                    className="active-cell"
                  >
                    <Input
                      type="text"
                      value={inputValue.input13}
                      onChange={(e) =>
                        setInputValue((prev) => ({
                          ...prev,
                          input13: e.target.value,
                        }))
                      }
                    />
                  </Layout>
                ),
                type7: (
                  <Layout
                    style={{
                      justifyContent: "end",
                      height: "100%",
                    }}
                    className="active-cell"
                  >
                    <Input
                      type="text"
                      value={inputValue.input14}
                      onChange={(e) =>
                        setInputValue((prev) => ({
                          ...prev,
                          input14: e.target.value,
                        }))
                      }
                    />
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
                      <Layout
                        className="active-cell"
                        style={{
                          gap: "4px",
                          height: "100%",
                          padding: "4px 8px",
                          alignItems: "center",
                        }}
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
                          value={inputValue.input8}
                          onChange={(e) =>
                            setInputValue((prev) => ({
                              ...prev,
                              input8: e.target.value,
                            }))
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
                          value={inputValue.input9}
                          onChange={(e) =>
                            setInputValue((prev) => ({
                              ...prev,
                              input9: e.target.value,
                            }))
                          }
                        />
                      </Layout>
                    ),
                    type4: (
                      <Layout
                        style={{
                          justifyContent: "end",
                          height: "100%",
                        }}
                        className="active-cell"
                      >
                        <Input
                          type="text"
                          value={inputValue.input15}
                          onChange={(e) =>
                            setInputValue((prev) => ({
                              ...prev,
                              input15: e.target.value,
                            }))
                          }
                        />
                      </Layout>
                    ),
                    type5: (
                      <SwitchComponent
                        items={switchItems.switch3}
                        setItems={(items) =>
                          setSwitchItems((prev) => ({
                            ...prev,
                            switch3: items,
                          }))
                        }
                        isOpen={isSwitchContextOpen_3}
                        setIsOpen={setIsSwitchContextOpen_3}
                      />
                    ),
                    type6: (
                      <Layout
                        style={{
                          justifyContent: "end",
                          height: "100%",
                        }}
                        className="active-cell"
                      >
                        <Input
                          type="text"
                          value={inputValue.input16}
                          onChange={(e) =>
                            setInputValue((prev) => ({
                              ...prev,
                              input16: e.target.value,
                            }))
                          }
                        />
                      </Layout>
                    ),
                    type7: (
                      <Layout
                        style={{
                          justifyContent: "end",
                          height: "100%",
                        }}
                        className="active-cell"
                      >
                        <Input
                          type="text"
                          value={inputValue.input17}
                          onChange={(e) =>
                            setInputValue((prev) => ({
                              ...prev,
                              input17: e.target.value,
                            }))
                          }
                        />
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
                        style={{
                          gap: "4px",
                          height: "100%",
                          padding: "4px 8px",
                          alignItems: "center",
                        }}
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
                          value={inputValue.input10}
                          onChange={(e) =>
                            setInputValue((prev) => ({
                              ...prev,
                              input10: e.target.value,
                            }))
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
                          value={inputValue.input11}
                          onChange={(e) =>
                            setInputValue((prev) => ({
                              ...prev,
                              input11: e.target.value,
                            }))
                          }
                        />
                      </Layout>
                    ),
                    type4: (
                      <Layout
                        style={{
                          justifyContent: "end",
                          height: "100%",
                        }}
                        className="active-cell"
                      >
                        <Input
                          type="text"
                          value={inputValue.input18}
                          onChange={(e) =>
                            setInputValue((prev) => ({
                              ...prev,
                              input18: e.target.value,
                            }))
                          }
                        />
                      </Layout>
                    ),
                    type5: (
                      <SwitchComponent
                        items={switchItems.switch4}
                        setItems={(items) =>
                          setSwitchItems((prev) => ({
                            ...prev,
                            switch4: items,
                          }))
                        }
                        isOpen={isSwitchContextOpen_4}
                        setIsOpen={setIsSwitchContextOpen_4}
                      />
                    ),
                    type6: (
                      <Layout
                        style={{
                          justifyContent: "end",
                          height: "100%",
                        }}
                        className="active-cell"
                      >
                        <Input
                          type="text"
                          value={inputValue.input19}
                          onChange={(e) =>
                            setInputValue((prev) => ({
                              ...prev,
                              input19: e.target.value,
                            }))
                          }
                        />
                      </Layout>
                    ),
                    type7: (
                      <Layout
                        style={{
                          justifyContent: "end",
                          height: "100%",
                        }}
                        className="active-cell"
                      >
                        <Input
                          type="text"
                          value={inputValue.input20}
                          onChange={(e) =>
                            setInputValue((prev) => ({
                              ...prev,
                              input20: e.target.value,
                            }))
                          }
                        />
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
                        style={{
                          gap: "4px",
                          height: "100%",
                          padding: "4px 8px",
                          alignItems: "center",
                        }}
                      >
                        <Tag size="xs" mode="check" label="Тип 1" group={8} />
                        <Tag size="xs" mode="check" label="Тип 1" group={5} />
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
                            style={{
                              gap: "4px",
                              height: "100%",
                              padding: "4px 8px",
                              alignItems: "center",
                            }}
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
                            style={{
                              gap: "4px",
                              height: "100%",
                              padding: "4px 8px",
                              alignItems: "center",
                            }}
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

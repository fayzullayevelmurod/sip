import { useRef, useState } from "react";

import { Button } from "@consta/uikit/Button";
import { Layout } from "@consta/uikit/Layout";
import { ContextMenu } from "@consta/uikit/ContextMenu";

import { IconFlagFilled } from "@consta/icons/IconFlagFilled";
import { IconFolderClosed } from "@consta/icons/IconFolderClosed";
import { IconStorage } from "@consta/icons/IconStorage";
import { IconHome } from "@consta/icons/IconHome";
import { IconEye } from "@consta/icons/IconEye";
import { IconEyeClose } from "@consta/icons/IconEyeClose";
import { IconKebab } from "@consta/icons/IconKebab";

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

export default function useTableData() {
  const [isContextOpen_1, setIsContextOpen_1] = useState(false);
  const [isContextOpen_2, setIsContextOpen_2] = useState(false);
  const [isContextOpen_3, setIsContextOpen_3] = useState(false);
  const [isContextOpen_4, setIsContextOpen_4] = useState(false);
  const [isContextOpen_5, setIsContextOpen_5] = useState(false);
  const [isContextOpen_6, setIsContextOpen_6] = useState(false);
  const [isContextOpen_7, setIsContextOpen_7] = useState(false);
  const [isContextOpen_8, setIsContextOpen_8] = useState(false);

  const contextRef1 = useRef(null);
  const contextRef2 = useRef(null);
  const contextRef3 = useRef(null);
  const contextRef4 = useRef(null);
  const contextRef5 = useRef(null);
  const contextRef6 = useRef(null);
  const contextRef7 = useRef(null);
  const contextRef8 = useRef(null);

  return {
    cols: [
      {
        title: "Обьекты",
        accessor: "field",
        renderCell: (row) => (
          <Layout
            style={{
              justifyContent: "space-between",
              alignItems: "center",
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
      {
        title: "Группа 1",
        accessor: "group_1",
      },
      {
        title: "Группа 2",
        accessor: "group_2",
      },
      {
        title: "Группа 3",
        accessor: "group_3",
      },
      {
        title: "Группа 4",
        accessor: "group_4",
      },
    ],
    rows: [
      {
        id: "row1",
        field: "Страна",
        leftIcon: <IconFolderClosed size="xs" view="secondary" />,
        rows: [
          {
            id: "row1.1",
            field: "Граница 1",
            km: "200 км",
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

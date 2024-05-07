import React from 'react'
import { useTranslate } from '@refinedev/core'
import { PrimaryTableCol } from 'tdesign-react/esm'
import { PageTable, CreateButtonModal, EditLinkModal, DeleteLink } from '@duxweb/dux-refine'

const List = () => {
  const translate = useTranslate()

  const columns = React.useMemo<PrimaryTableCol[]>(
    () => [
      {
        colKey: 'id',
        sorter: true,
        sortType: 'all',
        title: 'ID',
        width: 150,
      },
      {
        colKey: 'name',
        title: translate('tools.magicSource.fields.name'),
        ellipsis: true,
      },
      {
        colKey: 'type',
        title: translate('tools.magicSource.fields.type'),
        ellipsis: true,
        cell: ({ row }) => {
          return row.type
            ? translate('tools.magicSource.fields.async')
            : translate('tools.magicSource.fields.data')
        },
      },
      {
        colKey: 'link',
        title: translate('table.actions'),
        fixed: 'right',
        align: 'center',
        width: 160,
        cell: ({ row }) => {
          return (
            <div className='flex justify-center gap-4'>
              <EditLinkModal rowId={row.id} component={() => import('./save')} />
              <DeleteLink rowId={row.id} />
            </div>
          )
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [translate],
  )

  return (
    <PageTable
      columns={columns}
      table={{
        rowKey: 'id',
      }}
      actionRender={() => <CreateButtonModal component={() => import('./save')} />}
    />
  )
}

export default List

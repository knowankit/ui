import React from 'react'
import { storiesOf } from '@storybook/react'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import excludeNode from '../global-prop-table-excludes'
import generateProps from './index.docgen'
import Doc from './index.md'
import Upload from '../../src/admin/upload'
import Button from '../../src/admin/button'
import Icon from '../../src/admin/icon'

const { Dragger } = Upload

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text'
  },
  onChange (info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      console.info(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      console.error(`${info.file.name} file upload failed.`)
    }
  }
}

generateProps(Upload)

storiesOf('Upload', module)
  .addDecorator(withSmartKnobs)
  .addParameters({
    info: {
      text: Doc,
      propTables: [Upload],
      propTablesExclude: [Button, ...excludeNode]
    }
  })
  .add('default', () => {
    return (
      <Upload {...props}>
        <Button>
          <Icon type='upload' /> Click to Upload
        </Button>
      </Upload>
    )
  })
  .add('drag and drop', () => {
    return (
      <Dragger {...props}>
        <p className='ant-upload-drag-icon'>
          <Icon type='inbox' />
        </p>
        <p className='ant-upload-text'>Click or drag file to this area to upload</p>
        <p className='ant-upload-hint'>
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
      </Dragger>
    )
  })

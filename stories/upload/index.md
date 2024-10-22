# Usage

## Upload Component

```jsx
  import Upload from 'ui/dist/admin/upload'
  import Button from 'ui/dist/admin/button'
  
  const custom_props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

  <Upload
    {...custom_props}
    name={...props | optional}
    listType={...props | optional}
    className={...props | optional}
    showUploadList={...props | optional}
    action={...props | optional}
    beforeUpload={...props | optional}
    onChange={this.handleChange}
    onPreview={this.handlePreview}
    onRemove={this.handleRemove}
    transformFile={this.transformFile}>
      <Button>Click me to Upload</Button>
  </Upload>
```
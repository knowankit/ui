# Usage

## Modal Component

```jsx
  import Modal from 'ui/dist/admin/modal'

  <Modal 
    title={...props | optional}
    visible={...props | optional}
    bodyStyle={...props | optional}
    cancelText={...props | optional}
    centered={...props | optional}
    closable={...props | optional}
    confirmLoading={...props | optional}
    destroyOnClose={...props | optional}
    footer={...props | optional}
    forceRender={...props | optional}
    mask={...props | optional}
    maskClosable={...props | optional}
    maskStyle={...props | optional}
    okText={...props | optional}
    okType={...props | optional}
    width={...props | optional}
    onOk={this.handleOk}
    onCancel={this.handleCancel}
    afterClose={this.handleAfterClose}>
    <p>
      This is a long text. A very long text.
    </p>
  </Modal>
```
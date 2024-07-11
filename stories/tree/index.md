# Usage

## Tree Component

```jsx
  import Tree from 'ui/dist/admin/tree'
  
  const { TreeNode } = Tree;

  <Tree 
    autoExpandParent={...props | optional}
    blockNode={...props | optional}
    checkedKeys={...props | optional}
    checkStrictly={...props | optional}
    checkable={...props | optional}
    defaultExpandAll={...props | optional}
    defaultExpandedKeys={...props | optional}
    defaultSelectedKeys={...props | optional}
    defaultCheckedKeys={...props | optional}
    defaultExpandParent={...props | optional}
    disabled={...props | optional}
    draggable={...props | optional}
    expandedKeys={...props | optional}
    loadedKeys={...props | optional}
    multiple={...props | optional}
    selectable={...props | optional}
    selectedKeys={...props | optional}
    showIcon={...props | optional}
    showLine={...props | optional}
    onDragEnd={this.onDragEnd}
    onDragEnter={this.onDragEnter}
    onDragLeave={this.onDragLeave}
    onDragOver={this.onDragOver}
    onDragStart={this.onDragStart}
    onDrop={this.onDrop}
    onExpand={this.onExpand}
    onLoad={this.onLoad}
    onRightClick={this.onRightClick}
    onSelect={this.onSelect}
    onCheck={this.onCheck}>

    <TreeNode 
      icon={<Icon type='smile-o' />} 
      title={...props} 
      key={...props}>
      <TreeNode 
        icon={<Icon type='smile-o' />} 
        title={...props} 
        key={...props} />
      <TreeNode 
        icon={<Icon type='smile-o' />} 
        title={...props} 
        key={...props} />
    </TreeNode>
    <TreeNode 
        icon={<Icon type='smile-o' />} 
        title={...props} 
        key={...props}>
        <TreeNode 
          icon={<Icon type='smile-o' />} 
          title={...props} 
          key={...props} />
        <TreeNode 
          icon={<Icon type='smile-o' />} 
          title={...props} 
          key={...props} />
          <TreeNode 
            icon={<Icon type='smile-o' />} 
            title={...props} 
            key={...props} />
          <TreeNode 
            icon={<Icon type='smile-o' />} 
            title={...props} 
            key={...props} />
    </TreeNode>
  </Tree>
```
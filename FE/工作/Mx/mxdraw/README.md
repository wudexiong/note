# mxdraw库 相关笔记

## 层级顺序 levelInterface

应该实现 LevelInterface用于约束层次应该使用的方法和属性。

LevelInterface 应该实现以下功能特新:

* renderOrder 属性是唯一确定渲染层级的属性 数值越大 权重越高 但是 renderOrder的比较一定是相对同容器下的比较, 不同容器有不同容器的renderOrder

* parent 父级与 children 是决定renderOrder属性的作用域范围

* 可以通过定义一个updateChildrenRenderOrder方法 children 循环的坐标表示renderOrder属性, 它的renderOrder比较范围应该仅限于其parent.children

* setRenderOrder 设置它的层级 要先从其parent.children中找到自身, 删除它，然后添加到对应的位置， 并重新updateChildrenRenderOrder, 保证其他元素renderOrder的正确性

* setTopRenderOrder 设置它的层级在parent下的最顶层。可以先把parent.children下的它删掉, 再重新将它添加到children列表中。

### 设置层级可以通过这样的代码来实现

```ts
    // 要设置的层级
    const zIndex = 2
    const children = this.parent.children
    const index = children.indexOf(this)
    this.parent.children.splice(index, 1);
    this.parent.children.splice(zIndex, 0, this);
    this.parent.updateChildrenRenderOrder()
```

**属性**
1.datas:一个数组,数组每一项是一个对象,对应一个多选框
    1.对象具有value和text属性
    2.value:多选框的值
    3.text:多选框显示的文本
例如
```js
data = [
    {value:"football",text:"足球"},
    {value:"basketball",text:"篮球"},
    {value:"paiball",text:"排球"},
]
```
2.name:每一个多选框的name属性
3.onChange:当选中项发生改变的时候发生的事件
4.value:当前选中的值
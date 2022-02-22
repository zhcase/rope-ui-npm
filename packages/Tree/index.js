/*
 * @Author: zeHua
 * @Date: 2021-09-17 09:39:18
 * @LastEditors: zeHua
 * @LastEditTime: 2021-09-17 14:52:22
 * @FilePath: /yd-admin/src/components/Tree/index.js
 */
import TreeSelect from './components/TreeSelect.vue'
TreeSelect.install = function (Vue) {
    Vue.component('TreeSelect', TreeSelect)
}
TreeSelect.name='TreeSelect'

export { TreeSelect }
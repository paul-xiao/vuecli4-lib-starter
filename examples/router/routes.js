//routes.js
//递归获取src文件夹下的所有.vue文件
const files = require.context('@/views', true, /.vue/)
let pages = {}
//生成路由规则
let generator = []
files.keys().forEach(key => {
  pages[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
})
/**
 * 如果当前文件夹包含index则视为嵌套, 默认嵌套下层文件夹内的组件，平级组件不视为嵌套
 * @param route Object
 * @param depth Number
 *
 */
const getNestRoute = (generator, depth = 1, parent = '') => {
  for (let [key, val] of Object.entries(pages)) {
    const isNested = key.includes('index')
    const isParentNested = parent.includes('index')
    const curDepth = key.split('/').length
    const rowKey = key.replace(/(index)$/, '').replace(/\/$/, '') || ''
    const isParent = key.includes(parent.replace(/(index)$/, ''))
    const path = rowKey.replace(`${parent}/`, '')
    const name = key.split('/').join('_')
    let item = {
      path: curDepth === 1 ? `/${path}` : path,
      name: name,
      component: val
    }
    if (curDepth === depth && isParent) {
      if (isParentNested || isNested) {
        item.children = []
        generator.push(item)
        getNestRoute(item.children, depth + 1, rowKey)
      } else {
        generator.push(item)
      }
    }
  }
  return generator
}

getNestRoute(generator)
//生成所有路由，并去除一级文件夹名称
// Object.keys(pages).forEach(item => {
//   let Rpath = item.replace('/index', '') || '/components'
//   if (item !== 'App') {
//     generator.push({
//       path: Rpath === 'index' ? '/' : `/${Rpath}`,
//       name: Rpath.replace(/^\//g, '').replace(/\//g, '_'),
//       meta: {
//         title: Rpath
//       },
//       component: pages[item]
//     })
//   }
// })
//将生成路由导入合并
// const routes = [
//   {
//     path: '/',
//     name: '/',
//     component: () => import(/* webpackChunkName: "home" */ '@/views/index.vue'),
//     children: [
//       {
//         path: 'components',
//         name: 'components',
//         redirect: 'components/button',
//         component: () => import(/* webpackChunkName: "components" */ '@/views/components/index.vue'),
//         children: [
//           {
//             path: 'button',
//             name: 'button',
//             component: () => import(/* webpackChunkName: "button" */ '@/views/components/button/index.vue'),
//             children: [
//               {
//                 path: 'test/test',
//                 name: 'button_test_test',
//                 component: () => import(/* webpackChunkName: "button" */ '@/views/components/button/test/test.vue')
//               }
//             ]
//           },
//           {
//             path: 'editor',
//             name: 'editor',
//             component: () => import(/* webpackChunkName: "editor" */ '@/views/components/editor/index.vue')
//           },
//           {
//             path: 'button/test',
//             name: 'button_test',
//             component: () => import(/* webpackChunkName: "test1" */ '@/views/components/button/test1.vue')
//           }
//         ]
//       },
//       {
//         path: 'error/404',
//         name: '404',
//         component: () => import(/* webpackChunkName: "test1" */ '@/views/error/404.vue')
//       }
//     ]
//   }
// ]
export default [...generator]

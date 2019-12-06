import Header from '@/components/common/Header'

function plugin (Vue) {
  if (plugin.installed) {
    return
  }
  Vue.component('Header', Header)
}

export default plugin

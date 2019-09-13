/**
 * 公共指令：v-loading
 * 功能：实现加载状态
 * 示例：v-loading="loading"，loading为布尔值
 */
export const loading = {
  bind: function (el, binding, vnode) {
    const indicator = document.createElement('div')
    indicator.className = 'indicator'
    indicator.id = 'x-indicator'
    indicator.innerHTML = `<div class="inner"><svg viewBox="0 0 64 64"><g><defs><linearGradient id="sGD" gradientUnits="userSpaceOnUse" x1="55" y1="46" x2="2" y2="46"><stop offset="0.1" style="stop-opacity: 0; stop-color: #5daeff;"></stop><stop offset="1" style="stop-color: #5daeff;"></stop></linearGradient></defs><g stroke-width="4" stroke-linecap="round" fill="none" transform="rotate(240.043 32 32)"><path stroke="url(#sGD)" d="M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"></path><path d="M60,32 C60,16,47.464,4,32,4S4,16,4,32"></path><animateTransform values="0,32,32;360,32,32" attributeName="transform" type="rotate" repeatCount="indefinite" dur="750ms"></animateTransform></g></g></svg></div>`
    if (binding.value) {
      el.classList.add('loading')
      el.appendChild(indicator)
    }
  },
  update: function(el, binding, vnode, old_vnode) {
    const indicator = document.createElement('div')
    indicator.className = 'indicator'
    indicator.id = 'x-indicator'
    indicator.innerHTML = `<div class="inner"><svg viewBox="0 0 64 64"><g><defs><linearGradient id="sGD" gradientUnits="userSpaceOnUse" x1="55" y1="46" x2="2" y2="46"><stop offset="0.1" style="stop-opacity: 0; stop-color: #5daeff;"></stop><stop offset="1" style="stop-color: #5daeff;"></stop></linearGradient></defs><g stroke-width="4" stroke-linecap="round" fill="none" transform="rotate(240.043 32 32)"><path stroke="url(#sGD)" d="M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"></path><path d="M60,32 C60,16,47.464,4,32,4S4,16,4,32"></path><animateTransform values="0,32,32;360,32,32" attributeName="transform" type="rotate" repeatCount="indefinite" dur="750ms"></animateTransform></g></g></svg></div>`
    if (binding.value) {
      el.classList.add('loading')
      el.appendChild(indicator)
    } else {
      el.classList.remove('loading')
      el.removeChild(document.getElementById('x-indicator'))
    }
  }
}
/* if="Storage.animateList.size > 0 || Storage.plugList.has('animate')" */
/**
 * 赋予节点动画效果
 * @param  {string} name 动画效果名称
 * @param  {dom} dom 节点
 */
owo.animate = function (name, dom, delay) {
  // 都使用IE了效果还重要吗
  if (_owo.isIE) return
  dom.classList.add(name)
  dom.classList.add('owo-animated')
  if (delay) {
    dom.style.animationDelay = delay + 'ms'
  }
  dom.addEventListener('animationend', animateEnd)
  function animateEnd () {
    dom.classList.remove(name)
    dom.classList.remove('owo-animated')
    if (delay) {
      dom.style.animationDelay = ''
    }
  }
}
/* end="Storage.animateList.size > 0 || Storage.plugList.has('animate')" */
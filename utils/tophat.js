module.exports = function tophat(sectionId) {
  const bodyRect = document.body.getBoundingClientRect(),
  elemRect = sectionId.getBoundingClientRect(),
  offset   = elemRect.top - bodyRect.top;
  // console.log('tophat fired')
  window.scrollTo(0, offset - 4);
}

module.exports = function navigator(sectionId, sectionObj) {
  const bodyRect = document.body.getBoundingClientRect(),
  elemRect = sectionId.getBoundingClientRect(),
  offset   = elemRect.top - bodyRect.top;

  // console.log(sectionObj)

  if ( sectionObj.collapse == false) {
      sectionId.classList.add('showtime')

      // console.log('navigator fired')
      // window.scrollTo(0, offset - 4);
  }
  else if ( sectionObj.collapse == true) {
    sectionId.classList.remove('showtime')
  }
}

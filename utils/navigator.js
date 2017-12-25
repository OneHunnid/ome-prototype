module.exports = function navigator(sectionId, sectionObj) {
  console.log('Navigator Activated!', sectionId, sectionObj)
  const bodyRect = document.body.getBoundingClientRect(),
  elemRect = sectionId.getBoundingClientRect(),
  offset   = elemRect.top - bodyRect.top;

  if ( sectionObj.collapse == false) {
      sectionId.classList.add('showtime')
      window.scrollTo(0, offset - 4);
  }
  else if ( sectionObj.collapse == true) {
    sectionId.classList.remove('showtime')
  }
}

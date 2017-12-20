
const handleClickCloseHelpPanel = () => {
  const body = document.body;
  body.classList.remove('showtime-help-screen');
}

const HelpPanel = () => (
  <div id="helpScreen" className="help-wrapper">
    <div className="help-scrim"></div>
    <div className="help-panel">
      <div className="help-panel__top">
        <div className="help-panel__top__title">Support Center</div>
        <div className="help-panel__top__exit" onClick={handleClickCloseHelpPanel}>
          <svg width="55px" height="55px" viewBox="0 0 55 55" version="1.1">
            <defs>
                <filter x="-2.6%" y="-2.9%" width="105.1%" height="106.2%" filterUnits="objectBoundingBox" id="filter-1">
                    <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                    <feGaussianBlur stdDeviation="12" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.12 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                    <feMerge>
                        <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                </filter>
            </defs>
            <g id="Mockups" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <g id="app--section_membership--writer" transform="translate(-1378.000000, -16.000000)" stroke="#FFFFFF" strokeWidth="2">
                    <g id="panel" filter="url(#filter-1)">
                        <g id="header" transform="translate(1018.000000, 12.000000)">
                            <g id="x" transform="translate(383.000000, 25.000000)">
                                <path d="M9,0 L0,9" id="Shape"></path>
                                <path d="M0,0 L9,9" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="help-panel__main-content">
        <div className="help-panel__main-content__wrapper">
        </div>
      </div>
    </div>
  </div>
)

export default HelpPanel;

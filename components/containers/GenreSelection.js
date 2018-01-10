import React from 'react'

class GenreSelection extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="form-group">
        <div className="form-group__label">Genre</div>
        <div className="form-group__description">Select the genre that most accurately represents your music composition.</div>
        <div className="row">
          <select className="col col-6">
            <option>Select genre...</option>
            <option>Christian</option>
            <option>Concert</option>
            <option>Country</option>
            <option>Dance</option>
            <option>Film</option>
            <option>Hip-Hop</option>
            <option>Jazz</option>
            <option>Latin</option>
            <option>Pop</option>
            <option>Rhythem/Soul</option>
            <option>Rock</option>
            <option>Theatre</option>
          </select>
        </div>
      </div>
    )
  }
}

export default GenreSelection

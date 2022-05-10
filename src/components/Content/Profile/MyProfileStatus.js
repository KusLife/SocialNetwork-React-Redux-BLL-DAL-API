import React from 'react';

class MyProfileStatus extends React.Component {
  state = {
    'this': this,
    editMode: false,
    status: this.props.status,
  }
  activeMode = () => {
    this.setState({
      editMode: true,
    })
  }
  diactiveMode = () => {
    this.setState({
      editMode:false
    })
    this.props.updateStatusThunk(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
       this.setState({
         status: this.props.status
       })
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode && 
          <div>
            <span onDoubleClick={this.activeMode}>{this.props.status || '---'}</span>
          </div>}
        {this.state.editMode && 
          <div>
          <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.diactiveMode} type="text" value={this.state.status} />
          </div>}
      </div>
    );
  }
}

export default MyProfileStatus;

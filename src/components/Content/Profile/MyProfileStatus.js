import React from 'react';

class MyProfileStatus extends React.Component {
  state = {
    editMode: false 
  }
  
  activeMode = () => {
    // debugger
    this.setState({
      editMode:true
    })
    // this.state.editMode = true
    // this.forceUpdate()
  }
  diactiveMode = () => {
    this.setState({
      editMode:false
    })
  }

  render() {

    return (
      <div>
        {!this.state.editMode && 
          <div>
            <span onDoubleClick={this.activeMode.bind(this)}>{this.props.status}</span>
          </div>}
        {this.state.editMode && 
          <div>
          <input autoFocus={true} onBlur={this.diactiveMode.bind(this)} type="text" value={this.props.status} />
          </div>}
      </div>
    );
  }
}

export default MyProfileStatus;

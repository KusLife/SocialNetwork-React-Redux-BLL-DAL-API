import React, { useEffect, useState } from 'react';

const MyProfileStatusHooks = (props) => {
 
 
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(()=> {
    setStatus(props.status)
  }, [props.status])

  const activeMode = () => {
      setEditMode(true)
  }

  const diactiveMode = () => {
    setEditMode(false)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
    props.updateStatusThunk(status)
  }

 
    return (
      <div>
        {!editMode && 
          <div>
            <span onDoubleClick={activeMode}>{props.status || '---'}</span>
          </div>}
        {editMode && 
          <div>
          <input onChange={onStatusChange} onBlur={diactiveMode} autoFocus={true} value={status}  type="text" />
          </div>}
      </div>
    );
  
}

export default MyProfileStatusHooks;

import React from 'react'

// Semantic UI
import { Loader } from 'semantic-ui-react'

function dispatchReturnContent (props) {
  const { children, isFetching, hasFetched } = props
  if (isFetching) return <Loader active />
  if (!hasFetched) {
    return <p>「最寄駅から探す」をクリックして駅を探しましょう</p>
  }
  return children
}

const StationMapRow = props => {
  const content = dispatchReturnContent(props)
  return <div style={{ height: '500px' }}>{content}</div>
}

export default StationMapRow

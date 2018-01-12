import React from 'react'

// Semantic UI
import { Loader } from 'semantic-ui-react'

function dispatchReturnContent (props) {
  const { children, isFetching, hasFetched, errorMessage } = props
  if (isFetching) return <Loader active />
  if (!hasFetched) {
    return <p>「最寄駅から探す」をクリックして駅を探しましょう</p>
  } else if (errorMessage) {
    switch (errorMessage) {
      case 'User denied Geolocation':
        return <p>位置情報機能が許可されていません。</p>
      case 'station not found':
        return (
          <p>
            近くに駅が見当たりませんでした。場所を変えて再度お試しください。
          </p>
        )
      default:
        return <p>{errorMessage}</p>
    }
  }
  return children
}

const StationMapRow = props => {
  const content = dispatchReturnContent(props)
  return <div style={{ height: '500px' }}>{content}</div>
}

export default StationMapRow

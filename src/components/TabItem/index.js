import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickOnTabItem = () => {
    updateActiveTabId(tabId)
  }
  const btnX = isActive ? 'active-tab-btn' : ' '
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        onClick={onClickOnTabItem}
        className={`tab-btn ${btnX}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

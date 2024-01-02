interface Props {
  currentState: string;
}

const StateIndicator = ({currentState}:Props) => {
  return (
    <div className={`state-indicators state-indicators--${currentState}`}>
      <div className={`state-indicator state-indicator--loading${currentState === 'loading' ? ' active' : ''}`}></div>
      <div className={`state-indicator state-indicator--no-results${currentState === 'no-results' ? ' active' : ''}`}></div>
      <div className={`state-indicator state-indicator--results${currentState === 'results' ? ' active' : ''}`}></div>
      <div className={`state-indicator state-indicator--details${currentState === 'details' ? ' active' : ''}`}></div>
    </div>
  )
}

export default StateIndicator
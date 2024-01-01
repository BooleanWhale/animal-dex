interface Props {
  currentState: string;
}

const StateIndicator = ({currentState}:Props) => {
  return (
    <div>{currentState}</div>
  )
}

export default StateIndicator
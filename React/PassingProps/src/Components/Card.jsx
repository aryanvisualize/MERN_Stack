

const card = ({children}) => {
    // In props we can pass any data type like string, number, array, object, function, and also JSX.
    // In this case we are passing JSX as children to the card component.
  return (
    <div>
      {children}
    </div>
  )
}

export default card

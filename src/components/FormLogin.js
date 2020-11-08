export default function FormLogin(props) {
  const { children, onSubmit } = props

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      {children}
    </form>
  )
}

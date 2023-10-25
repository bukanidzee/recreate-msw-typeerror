import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../store/appApi'

export default function Login() {
  const { register, handleSubmit } = useForm()

  const [login] = useLoginMutation()

  const onSubmit = async (data) => {
    await login(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label for="name-field">Name</label>
      <input id="name-field" {...register('name', { required: true })} />
      <label for="password-field">Password</label>
      <input
        id="password-field"
        {...register('password', { required: true })}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

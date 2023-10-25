import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../store/appApi'

export default function Login() {
  const { register, handleSubmit } = useForm()

  const [login, { data, error }] = useLoginMutation()

  console.log({ data, error })

  const onSubmit = async (data) => {
    await login(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name-field">Name</label>
      <input id="name-field" {...register('name', { required: true })} />
      <label htmlFor="password-field">Password</label>
      <input
        id="password-field"
        {...register('password', { required: true })}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

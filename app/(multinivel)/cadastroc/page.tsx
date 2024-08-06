import AuthForm from '@/components/AuthForm'

const SignUp = async () => {
  return (
    <div className="flex-1">
      <AuthForm type="sign-up" userType="client" />
    </div>
  )
}

export default SignUp

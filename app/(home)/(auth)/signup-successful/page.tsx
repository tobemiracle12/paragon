import SignupSuccessful from '@/components/Public/SignupSuccessful'
import { generateMetadata } from '@/lib/seo'

import { useRouter } from 'next/navigation'

export const metadata = generateMetadata({
  title: 'Sign Up Successful | Paragon Farms Ltd',
  description: 'Congratulations, your account has been created successfully.',
  twitter: {
    card: 'summary',
    site: '@paragon',
  },
})

export default function SignInClient() {
  const router = useRouter()

  return (
    <>
      <SignupSuccessful />
    </>
  )
}

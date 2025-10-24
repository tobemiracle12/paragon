import SignupSuccessful from '@/components/Public/SignupSuccessful'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Sign Up Successful | Paragon Farms Ltd',
  description: 'Congratulations, your account has been created successfully.',
  twitter: {
    card: 'summary',
    site: '@paragon',
  },
})

export default function Congratulations() {
  return (
    <>
      <SignupSuccessful />
    </>
  )
}

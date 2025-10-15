'use client'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import _debounce from 'lodash/debounce'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { validateInputs, ValidationResult } from '@/lib/validateInputs'
import apiRequest from '@/lib/axios'
import { useAuthStore } from '@/src/authStore'
import { ApiResponse } from '@/src/interface'
import { MessageStore } from '@/src/appInfoStore'
import { getUserDeviceInfo, validateUsername } from '@/lib/helpers'

export default function SignUpClient() {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<ValidationResult | null>(null)
  const [generalError, setGeneralError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const { userIp, setMessage } = MessageStore()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleUsernameSearch = _debounce(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.trim()
      const validation = validateUsername(value)
      if (!validation.valid) {
        setMessage(validation.message, false)
        setLoading(false)
        return
      }
      try {
        setLoading(true)

        const response = await apiRequest<ApiResponse>(
          `/users/username/${value}`
        )

        const results = response?.data
        if (results) {
          setMessage('Sorry! This username is already taken', false)
          setFormData((prev) => ({
            ...prev,
            username: '',
          }))
        } else {
          setMessage('Great! The username is available', true)
          setFormData((prev) => ({
            ...prev,
            username: value,
          }))
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    },
    1000
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    const { password, username, email, confirmPassword } = formData
    const validation = validateInputs(
      password,
      confirmPassword,
      username,
      email
    )
    if (!validation.valid) {
      setError(validation)
      return
    }

    if (!isChecked) {
      setGeneralError('Please accept the terms and conditions to continue.')
      return
    }

    setLoading(true)

    const form = new FormData()
    form.append('email', formData.email.trim().toLocaleLowerCase())
    form.append('username', formData.username.trim())
    form.append('password', formData.password.trim())
    form.append('device', getUserDeviceInfo().device)
    form.append('operatingSystem', getUserDeviceInfo().os)
    form.append('signupIp', String(userIp))

    try {
      setLoading(true)
      const response = await apiRequest<ApiResponse>('/users', {
        method: 'POST',
        body: form,
      })

      if (response.status === 200) {
        const { user, token } = response.data
        useAuthStore.getState().login(user, token)
        router.replace('/signup-successful')
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setGeneralError(error.response?.data?.message || 'Login failed')
      } else {
        setGeneralError('Unexpected error occurred')
      }
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <div className="flex items-end mb-10">
        <Image
          style={{ height: 'auto', width: 40 }}
          src="/images/logos/ArchinationIcon.png"
          loading="lazy"
          sizes="100vw"
          className="my-auto mr-2"
          width={0}
          height={0}
          alt="Archination Logo"
        />
        <h2 className="text-2xl uppercase mb-[-6px] font-semibold text-[var(--custom-text-color)]">
          Archi Nation
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="homeInputLabel">Username</label>
          <div className="relative">
            <input
              type="text"
              className="customHomeInput pl-2"
              name="username"
              value={formData.username}
              onChange={(e) => {
                handleUsernameSearch(e)
                setFormData({ ...formData, username: e.target.value })
              }}
              placeholder="Enter username"
            />
            {loading && (
              <i className="bi bi-opencollective absolute top-1 right-1 loading text-[var(--customTextColor)]"></i>
            )}
          </div>
          {error?.usernameMessage && (
            <div className="text-red-500 text-sm">{error.usernameMessage}</div>
          )}
        </div>
        <div>
          <label className="homeInputLabel">Email</label>
          <input
            type="text"
            className="customHomeInput pl-2"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Enter Email"
          />
          {error?.emailMessage && (
            <div className="text-red-500 text-sm">{error.emailMessage}</div>
          )}
        </div>
        <div>
          <label className="homeInputLabel">Password</label>

          <div className="relative">
            <i className="bi bi-shield-lock absolute top-3 left-2 text-lg"></i>
            <input
              className="customHomeInput pl-7"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              type={`${showPassword ? 'text' : 'password'}`}
            />
            <i
              onClick={togglePasswordVisibility}
              className={`bi ${
                showPassword ? 'bi-eye' : 'bi-eye-slash'
              }  cursor-pointer text-lg absolute right-2 top-3`}
            ></i>
          </div>
          {error?.passwordMessage && (
            <div className="text-red-500 text-sm">{error.passwordMessage}</div>
          )}
        </div>
        <div>
          <label className="homeInputLabel">Confirm Password</label>

          <div className="relative">
            <i className="bi bi-shield-lock absolute top-3 left-2 text-lg"></i>
            <input
              className="customHomeInput pl-7"
              placeholder="Confirm password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              type={`${showPassword ? 'text' : 'password'}`}
            />
            <i
              onClick={togglePasswordVisibility}
              className={`bi ${
                showPassword ? 'bi-eye' : 'bi-eye-slash'
              }  cursor-pointer text-lg absolute right-2 top-3`}
            ></i>
          </div>
          {error?.confirmPasswordMessage && (
            <div className="text-red-500 text-sm">
              {error.confirmPasswordMessage}
            </div>
          )}
        </div>
        <div className="text-sm block">
          {`Already have an account? `}
          <Link
            href={`/sign-in`}
            className="text-[var(--custom-text-color)] hover:underline"
          >
            Click Here.
          </Link>
        </div>
        <div className="mb-2">
          {isChecked ? (
            <i
              onClick={() => setIsChecked(false)}
              className="bi bi-check-square mr-2 text-[var(--custom-color)] cursor-pointer"
            ></i>
          ) : (
            <i
              onClick={() => setIsChecked(true)}
              className="bi bi-square mr-2 cursor-pointer"
            ></i>
          )}
          By signing up, in you have agreed to our
          <Link
            href="/terms-conditions"
            className="text-[var(--custom-color)]"
            style={{ display: 'inline-block', marginLeft: '3px' }}
          >
            terms and conditions
          </Link>
          <div className="f-response-msg auth"></div>
        </div>
        <button type="submit" className="homeButton">
          {loading ? 'Processing...' : 'Sign Up'}
        </button>
        {generalError && (
          <div className="text-red-500 text-center text-sm">{generalError}</div>
        )}
      </form>
    </>
  )
}

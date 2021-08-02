import React from 'react'
import { useCallback } from 'react'
import { RegistrationOnboard } from '../components/RegistrationOnboard/RegistrationOnboard'
import { /*useAppSelector,*/ useAppDispatch } from '../redux/hooks'
import { useSelector } from 'react-redux'
import { fetchRegisterUser, userSelector } from '../redux/slices/userSlice'
import { useState } from 'react'
import { AppDispatch } from '../redux/store'

export default function OnboardingRegistration() {
  const [accountRegistration, setAccountRegistration] = useState({
    username: '',
    emailAddress: '',
    password: '',
  })
  const dispatch: AppDispatch = useAppDispatch()
  const user = useSelector(userSelector)
  const { username, password, emailAddress } = accountRegistration

  const handleRegister = useCallback(() => {
    dispatch(
      fetchRegisterUser({
        username,
        password,
        email: emailAddress,
        confirmPassword: password,
        role: 'seller',
      })
    )
  }, [username, password, emailAddress])

  // TODO:
  // create confirm password pass it to fetchRegisterUser
  // Extracting role - adding role selection component to this page.

  return (
    <RegistrationOnboard
      backLink='/'
      backLabel='Back'
      accountRegistration={accountRegistration}
      termsAndConditionLink='/'
      isChecked={true}
      onChangeCheckbox={() => null}
      onChangeUserName={({ target }) =>
        setAccountRegistration({
          ...accountRegistration,
          username: target.value,
        })
      }
      onChangeEmail={({ target }) =>
        setAccountRegistration({
          ...accountRegistration,
          emailAddress: target.value,
        })
      }
      onChangePassword={({ target }) =>
        setAccountRegistration({
          ...accountRegistration,
          password: target.value,
        })
      }
      onClickRegister={() => null}
      onSubmit={handleRegister}
    />
  )
}

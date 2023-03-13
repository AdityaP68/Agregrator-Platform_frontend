import React from 'react'
import styles from './RegisterForm.module.scss'
import Input from '../../UI/Input'

function RegisterForm() {
  return (
    <form className={styles.form}>
        <Input label= {"Email"} fieldType={"email"} placeholder={"Enter your email..."} required={"true"} />

    </form>
  )
}

export default RegisterForm
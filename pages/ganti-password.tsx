import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import GantiPassword from '../components/UI/template/GantiPassword'

const GantiPasswordPage : NextPage = () => {
  const Router = useRouter()

  return (
    <GantiPassword query={Router.query}/>
  )
}

export default GantiPasswordPage
import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {

    const error = useRouteError()
    console.log(error)

  return (
    <div>
      <h1>Ops!!</h1>
      <p>Desculpe, ocorreu um erro.</p>
      <p><i>{error.statusText || error.message}</i></p>
    </div>
  )
}

export default ErrorPage

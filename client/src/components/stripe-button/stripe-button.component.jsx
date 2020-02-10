import React from 'react'
import axios from 'axios'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
  const priceCents = price * 100
  const stripeApiKey = 'pk_test_G4EMS0i0XOgt3LC6UU7S8JMk00XW9hg1zV'

  const onToken = token => {
    console.log(token)
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceCents,
        token
      }
    }).then(response => {
      console.log(response)
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error))
      alert('There was a problem with your payment. Please ensure you use the supplied Credit Card info')
    })
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Clothing'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your price is $${price}`}
      amount={priceCents}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={stripeApiKey}
    />
  )

}

export default StripeCheckoutButton

import React from "react";
import "./stripe-button.style.scss";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Q5qG3076KEqStUAL48Imr49JkfVbfV0ZT6abwa7avDTybB0P7JE33pH05IXeIyiAMMyrUNaVSYLWeg7jLtAH3vj00qGbFHiud";
  const onToken = (token) => {
    console.log(token);
    alert("payement successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="%PUBLIC_URL%/favicon.ico"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      stripeKey={publishableKey}
      token={onToken}
    />
  );
};

export default StripeButton;

<template>
  <div>
    <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
      <div class="px-4 pt-8">
        <CheckoutOrderSummary />

        <!--        <CheckoutShipping />-->
      </div>
      <CheckoutPaymentDetails />
    </div>
  </div>
</template>

<script>
import CheckoutOrderSummary from "../components/CheckoutOrderSummary.vue";
import CheckoutShipping from "../components/CheckoutShipping.vue";
import CheckoutPaymentDetails from "../components/CheckoutPaymentDetails.vue";

export default {
  name: "CheckoutPayment",
  components: { CheckoutPaymentDetails, CheckoutShipping, CheckoutOrderSummary }
};
</script>


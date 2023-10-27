<template>
  <div>
    <!-- You can add a loading spinner or some message here --> Welcome!
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { userManager } from '@/auth.config';

export default {
  name: 'AuthCallback',
  setup() {
    onMounted(async () => {
      await userManager.signinRedirectCallback();
      // After a successful login, you can redirect the user to another route or do other actions.
    });

    return {};
  },
};
</script>

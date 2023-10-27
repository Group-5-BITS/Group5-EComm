<template>
  <div>
    <!-- You can add a loading spinner or some message here --> Welcome!
  </div>
</template>

<script setup>
import { userManager } from '@/auth.config';

await userManager.signinRedirectCallback();
// After a successful login, you can redirect the user to another route or do other actions.
</script>

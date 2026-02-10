<script setup lang="ts">
import { useSettings } from '@/composables/useSettings';
import { useNotifications } from '@/composables/useNotifications';
const { notifications } = useSettings();
const { addNotification } = useNotifications();

const save = () => {
  addNotification(`Settings saved successfully!`);
};
</script>

<template>
  <div>
    <h2 class="text-2xl mb-4">Notifications</h2>
    <form @submit.prevent="save" class="space-y-2">
      <div class="flex items-center gap-2">
        <input type="checkbox" v-model="notifications.email" />
        <label>Email notifications</label>
      </div>
      <div class="flex items-center gap-2">
        <input type="checkbox" v-model="notifications.sms" />
        <label>SMS notifications</label>
      </div>

      <button type="submit" class="btn-primary">Save</button>
    </form>
  </div>
</template>

import { ref } from 'vue';

interface IGeneralSettings {
  username: string;
  email: string;
  about: string;
  gender: string;
  country: string;
}

const general = ref<IGeneralSettings>({
  username: '',
  email: '',
  about: '',
  gender: 'male',
  country: 'USA',
});

interface INotificationsSettings {
  email: boolean;
  sms: boolean;
}

const notifications = ref<INotificationsSettings>({
  email: false,
  sms: false,
});

interface IPrivacySettings {
  visibility: string;
  searchEngineIndexing: boolean;
}

type Visibility = 'public' | 'private' | 'unlisted';

const privacy = ref<IPrivacySettings>({
  visibility: 'public',
  searchEngineIndexing: false,
});

export function useSettings() {
  return {
    general,
    notifications,
    privacy,
  };
}

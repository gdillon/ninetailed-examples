import { ProfileState } from "@ninetailed/experience.js";
import { useNinetailed } from "./useNinetailed";

export const useProfile = () => {
  if (process.client) {
    const { $ninetailed } = useNuxtApp();
    const ninetailed = useNinetailed();

    const profile = ref(ninetailed.value.profileState);

    $ninetailed.onProfileChange((profileState) => {
      profile.value = profileState;
    });

    return useState(() => profile);
  }
};

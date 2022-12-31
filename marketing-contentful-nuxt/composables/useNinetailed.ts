export const useNinetailed = () => {
  const { $ninetailed } = useNuxtApp();
  return useState(() => $ninetailed);
};

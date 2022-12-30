import { ref, watch } from "vue";

export const useTest = () => {
  return () => useState("test", () => "this is a test");
};

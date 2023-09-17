import { defineStore } from "pinia";

export const useCursor = defineStore("cursor", () => {
  const formCursor = ref("");
  const textCusor = ref("Bienvenue");

  function handleChangeFormTextCursor(f, t) {
    formCursor.value = f;
    textCusor.value = t;
  }

  return {
    formCursor,
    textCusor,
    handleChangeFormTextCursor,
  };
});

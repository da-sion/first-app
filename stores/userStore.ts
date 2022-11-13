export const useUserStore = defineStore('userStore', {
    state: () => ({ 
      angka: 0, 
      nama: '', 
      imageUrl: '',
    }),
    getters: {
      doubleCount: (state) => state.angka * 2,
    },
    actions: {
      increment() {
        this.angka++
      },
    },
  })
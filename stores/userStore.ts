export const useUserStore = defineStore('userStore', {
    state: () => ({ 
      angka: 0, 
      nama: '', 
      imageUrl: '',
      img1:'',
      img2:'',
      img3:'',
      img4:'',
      img5:'',
      addImg: [''],
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
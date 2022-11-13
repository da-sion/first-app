<template>
    <div>
        ini adalah home
        <NuxtLink to="/about" class="btn btn-info">about</NuxtLink>
        <div class="row">
            <div class="col-md-4">
                nama: {{nama}}
            </div>
            <div class="col-md-4">
                <div class="input-group mb-3">
  <input v-model="nama" type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
    </div>          
</div>
            <div class="col">          
                <div class="input-group mb-3">
  <button @click="kurang" class="btn btn-outline-secondary" type="button" id="button-kurang">kurang</button>
  <input v-model="angka" type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
  <button @click="tambah" class="btn btn-outline-secondary" type="button" id="button-tambah">tambah</button>
</div>
            </div>
        </div>
<img :src="imageUrl" alt="">
<input v-model="imageUrl" type="text">
<input v-model="imageUrl" type="text" class="form-control">
</div>
</template>
<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useUserStore} from  "~~/stores/userStore";
const {nama, angka, imageUrl } = storeToRefs( useUserStore());
const kurang =()=>{
    angka.value--;
}
const tambah =()=>{
    angka.value++
}
</script>
<template>
  <div>
    <title>Home Page</title> 
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <NuxtLink to="/" class="navbar-brand">First App</NuxtLink>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link active">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/about" class="nav-link">About</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/cardList" class="nav-link">cardList</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
     
    ini adalah home
    <br>
    <div class="container-lg">
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
    </div>
    <img :src="imageUrl" alt="">
    <input v-model="imageUrl" type="text" class="form-control">
    <input v-model="addImg" type="text" class="form-control" placeholder="tambah gambar" name="" id="">
    <br>
    <div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="true">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="img1" class="rounded mx-auto d-block w-50" alt="...">
        </div>
        <div class="carousel-item">
          <img :src="img2" class="rounded mx-auto d-block w-50" alt="...">
        </div>
        <div class="carousel-item">
          <img :src="img3" class="rounded mx-auto d-block w-50" alt="...">
        </div>
        <div class="carousel-item">
          <img :src="img4" class="rounded mx-auto d-block w-50" alt="...">
        </div>
        <div class="carousel-item">
          <img :src="img5" class="rounded mx-auto d-block w-50" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <br>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <input v-model="img1" placeholder="masukkan gambar 1" class="form-control" type="text" name="" id="">
        </div>
        <div class="col">
          <input v-model="img2" placeholder="masukkan gambar 2" class="form-control" type="text" name="" id="">
        </div>
        <div class="col">
          <input v-model="img3" placeholder="masukkan gambar 3" class="form-control" type="text" name="" id="">
        </div>
        <div class="col">
          <input v-model="img4" placeholder="masukkan gambar 4" class="form-control" type="text" name="" id="">
        </div>
        <div class="col">
          <input v-model="img5" placeholder="masukkan gambar 5" class="form-control" type="text" name="" id="">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {storeToRefs} from "pinia";
import useBootstrapClient from "~~/plugins/useBootstrap.client";
  import {useUserStore} from  "~~/stores/userStore";
  const {nama, angka, imageUrl, addImg, img1, img2, img3, img4, img5 } = storeToRefs( useUserStore());
  const kurang =()=>{
      angka.value--;
  }
  const tambah =()=>{
      angka.value++
  }
</script>
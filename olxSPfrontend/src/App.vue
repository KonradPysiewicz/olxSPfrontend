<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/icons/Footer.vue";
import HomeView from "@/views/HomeView.vue";
import HomePagePreFooter from "@/components/HomePagePreFooter.vue";
import RegisterView from "@/views/RegisterView.vue";

</script>

<template>

  <Navbar></Navbar>
  <router-view/>

  <Footer></Footer>>
</template>



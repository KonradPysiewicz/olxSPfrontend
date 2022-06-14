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
<!--  <header>-->
<!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

<!--    <div class="wrapper">-->
<!--      <HelloWorld msg="You did it!" />-->

<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->

<!--  <RouterView />-->
  <Footer></Footer>>
</template>



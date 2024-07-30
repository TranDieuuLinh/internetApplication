<script setup>
import { useRouter } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';

const router = useRouter();
function goToProfile() {
  router.push('/my-profile');
}

</script>

<template>
 
  <header>
    
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <div >
        <button class = "profileButton" @click="goToProfile">My Profile</button>
      <RouterView/>
      </div>
     
    </div>
    
    
  </header>

  <main>
   
    <TheWelcome />

  </main>
  
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.profileButton{
  text-align: center;
  font-size: 1.2rem;
  background-color: rgb(115, 114, 110);
  color: white;
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  margin-top: 0.7cm;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

</style>


<template lang="">
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container px-4">
      <a class="navbar-brand" href="#"><img src="../assets/logo.png" alt="logo de suricata" /></a>
      <button class="navbar-toggler navbar-dark border-light" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <router-link class="nav-link active" aria-current="page" to="/" style="color: black;">Home</router-link>
          <router-link class="nav-link" :to="{name: 'productos'}" style="color: black;" >Productos</router-link>
          <router-link class="nav-link" :to="{name: 'contacto'}" style="color: black;">Contacto</router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  
}
</script>


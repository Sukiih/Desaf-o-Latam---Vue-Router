<template lang="">
    <h1>
    Contáctanos
    </h1>
<div class="props">
    <h4 class="prop-contacto">{{email}}</h4>
    <h4 class="prop-contacto">{{telefono}}</h4>
</div>
    <router-link to='/' class="link-inicio">↩ Volver al inicio</router-link>
</template>

<script>
export default {
    props: {
        email: {
            type: String,
            required: true
        },
        telefono: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
.link-inicio {
    margin-left: 10%;
    padding-bottom: 8px;
    top: 10px;
    right: 10px;
    color: rgb(8, 2, 43);
    font-size: larger;
}

h1{
    padding-top: 100px;
    text-align: center;
}

.prop-contacto{
    font-weight: bold;
    margin-left: 150px;
}
.props{
    margin-top: 100px;
    margin-bottom: 50px;
}
</style>

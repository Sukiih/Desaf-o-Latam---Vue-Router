<template lang="">
    <div class="container my-5">
        <h1 class="text-center py-5">Listado de productos</h1>

        <div class="row row-cols-1 row-cols-md-3 g-5">
            <div class="col">
                <div class="card border-secondary h-100">
                    <img src="../assets/img/desayunos.jpg" class="card-img-top" alt="desayunos" />
                    <div class="card-body">
                        <h5 class="card-title fw-bold">{{ producto1 }}</h5>
                        <p class="card-text">{{ descripcion1 }}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{{ precio1 }}</li>
                        <li class="list-group-item">{{ cantidad1 }}</li>
                    </ul>
                    <div class="card-footer">
                        <a href="#" class="card-link">Ver más</a>
                        <a href="#" class="card-link">Comprar</a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card border-secondary h-100">
                    <img src="https://www.somosmamas.com.ar/wp-content/uploads/2020/11/almuerzos-caseros-faciles-pasta.jpg" class="card-img-top" alt="almuerzos" />
                    <div class="card-body">
                        <h5 class="card-title fw-bold">{{ producto2 }}</h5>
                        <p class="card-text">{{ descripcion2 }}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{{ precio2 }}</li>
                        <li class="list-group-item">{{ cantidad2 }}</li>
                    </ul>
                    <div class="card-footer">
                        <a href="#" class="card-link">Ver más</a>
                        <a href="#" class="card-link">Comprar</a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card border-secondary h-100">
                    <img src="../assets/img/empanadas.jpg" class="card-img-top" alt="empanadas" />
                    <div class="card-body">
                        <h5 class="card-title fw-bold">{{ producto3 }}</h5>
                        <p class="card-text">{{ descripcion3 }}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{{ precio3 }}</li>
                        <li class="list-group-item">{{ cantidad3 }}</li>
                    </ul>
                    <div class="card-footer">
                        <a href="#" class="card-link">Ver más</a>
                        <a href="#" class="card-link">Comprar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <router-link to='/'  class="link-inicio"> ↩ Volver al inicio</router-link>
</template>

<script>
export default {
    props: {
        producto1: {
            type: String,
            required: true
        },
        descripcion1: {
            type: String,
            required: true
        },
        precio1: {
            type: String,
            required: true
        },
        cantidad1: {
            type: String,
            required: true
        },
        producto2: {
            type: String,
            required: true
        },
        descripcion2: {
            type: String,
            required: true
        },
        precio2: {
            type: String,
            required: true
        },
        cantidad2: {
            type: String,
            required: true
        },
        producto3: {
            type: String,
            required: true
        },
        descripcion3: {
            type: String,
            required: true
        },
        precio3: {
            type: String,
            required: true
        },
        cantidad3: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
.link-inicio {
    margin-left: 10%;
    padding-bottom: 10px;
    top: 10px;
    right: 10px;
    color: rgb(104, 6, 83);
    text-decoration: underline;
}

</style>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Siigo Distributions</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link class="me-3 nav-link active col-12 col-md-5 col-ms-5" aria-current="page" :to="loginRoute">Ingresar</router-link>
                    <router-link class="nav-link active col-md-5 col-12 col-ms-5" aria-current="page" :to="signUp">Registrarse</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
const loginRoute = {
    name: 'login',
};

const signUp = {
    name: 'signup'
}

</script>
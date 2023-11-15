<template>
    <div class="container mt-5 p-3">
        <div class="row">
            <h1 class="text-center my-3">Registrarse</h1>
            <form @submit.prevent="" class=" form mx-lg-auto d-flex flex-column gap-3 col-lg-7 col-md-12 col-ms-12">
                <div class="form-floating">
                    <input type="text" class="form-control" id="name" placeholder="">
                    <label for="name" class="form-label">Escriba su nombre</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="email" placeholder="">
                    <label for="email" class="form-label">Escriba su correo electronico</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="password" placeholder="">
                    <label for="password" class="form-label">Escriba su contraseña</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="password-repeat" placeholder="">
                    <label for="password-repeat" class="form-label">Repita su contraseña</label>
                </div>
                <div class="text-end">
                    <button class="btn btn-success" type="submit">Registrarse</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>

</script>
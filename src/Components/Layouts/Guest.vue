<template>
    <div class="main">
        <div class="navi">
            <button> <router-link to="/" >Home</router-link> </button>
            <button> <router-link to="/about" >About</router-link> </button>
            <button> <router-link to="/products" >Products</router-link> </button>
            <button> <router-link to="/login" >Login</router-link> </button>
        </div>
        <h1>Layout - Guest</h1>
        <slot />
    </div>
</template>
<style scoped>
.main {
    height: calc(100vh - 20px);
    width: calc(100vw - 20px);
    background-color: rgba(164, 229, 147, 0.5);
    padding: 10px;
    margin: 0;
}
</style>

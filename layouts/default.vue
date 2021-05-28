<template>
  <div class="container-fluid" id="content">
    <header class='row justify-content-center text-center'>
      <h1 class="col-12">Adam Sirkis</h1>
      <h2 class="col-12">Secure Web Application Engineer</h2>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <nuxt-link class="nav-link" to="/">Home</nuxt-link>
              <nuxt-link class="nav-link" to="/nuxt">Websites (NuxtJS)</nuxt-link>
              <nuxt-link class="nav-link" to="/cpp">C++</nuxt-link>
              <nuxt-link class="nav-link" to="/python">Python</nuxt-link>
              <nuxt-link class="nav-link" to="/asp">Websites (ASP.NET)</nuxt-link>
              <nuxt-link class="nav-link" to="/unity">Video Games (Unity/C#)</nuxt-link>
              <nuxt-link class="nav-link" to="/java">Java</nuxt-link>
              <nuxt-link class="nav-link" to="/e68">Assembly (Easy68)</nuxt-link>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <Nuxt />
    </main>
    <footer class="container-fluid">
      <div class="row justify-content-center text-center">
        <p>© Adam Sirkis, 2021</p>
      </div>
    </footer>
  </div>
</template>

<style>
html, body{
  width: 100%;
  margin: 0;
  padding: 0;
	height: 100%;
	min-height: 100%;
	overflow:overlay;
	overflow-x: hidden;
  background-color: navy;
}
#content{
	display: flex;
	flex-direction: column;
  margin: 0;
  padding:0;
  min-height: 100%;
}
#__nuxt, #__layout{
  height: 100%;
}
footer{
	margin-top: auto;
	background-color: black;
	width: inherit;
	padding: 0;
  color: white;
}
main{
  height: 100%;
  padding: 2.5% 20%;
  background-color: navy;
  color: white;
}
header{
  background-color: goldenrod;
}
</style>
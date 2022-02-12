  <template>
  <div>
    <nav class="navbar navbar-expand-xl navbar-dark bg-primary">
      <Nuxt-link to="/" class="navbar-brand">Nuxt</Nuxt-link>
      <div id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <nuxt-link to="/doctorregister" class="text-white"
              >doctorregister</nuxt-link
            >
            <nuxt-link to="/doctorVerify" class="text-white"
              >doctorVerify</nuxt-link
            >
            <nuxt-link to="/doctorClinic" class="text-white"
              >doctorClinic</nuxt-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style >
</style>
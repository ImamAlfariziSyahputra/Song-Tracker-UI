<template>
  <div>
    <b-navbar class="mb-5" toggleable="lg" type="dark" variant="info">
      <!-- <div class="container"> -->
        <b-navbar-brand href="#" class="mr-5">Song Tracker</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Browse</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form class="mr-4">
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-navbar-nav>
              <b-nav-item>
                <router-link to="register" class="text-decoration-none text-white p-2">
                  SIGN UP
                </router-link>
                <router-link to="login" class="text-decoration-none text-white p-2">
                  LOGIN
                </router-link>
              </b-nav-item>
            </b-navbar-nav>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      <!-- </div> -->
    </b-navbar>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
</style>
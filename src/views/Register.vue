<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-mb-6 offset-mb-3 col-xs-12">
          <h1 class="text-xs-center">Sing Up</h1>
          <p class="text-xs-center">
            <router-link :to="{name: 'login'}">Need on account?</router-link>
          </p>
          VALLIDATION ERRORS
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form control-lg"
                placeholder="Username"
              />
            </fieldset>

            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form control-lg"
                placeholder="Email"
              />
            </fieldset>

            <fieldset class="form-group">
              <input
                type="password"
                class="form-control form control-lg"
                placeholder="Password"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              :disabled="isSubmitting"
            >
              Sing Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'McvRegister',
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting
    },
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch('register', {
          email: 'hgfskjirjk@kjgkgtegjskg.com',
          username: 'jjkjafirjakjgegegthkjfgiq',
          password: 'gjksfg94858729',
        })
        .then((user) => {
          console.log('successfully register user', user)
        })
    },
  },
}
</script>

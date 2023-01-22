<template>
  <div>
    <button
        v-if="deferredPrompt"
        ref="addBtn"
        class="add-button btn btn-dark"
        @click="clickCallback"
    >
      Zum Startbildschirm hinzufügen
    </button>
  </div>
</template>

<script>
// https://dev.to/bhaskarnair2/how-to-add-an-add-to-homescreen-button-in-your-pwa-na

export default {
  name: 'AddToHomeScreen',
  data: () => ({
    deferredPrompt: null,
  }),
  mounted() {
    this.captureEvent()
    console.log( this.deferredPrompt)
  },
  methods: {
    captureEvent() {
      window.addEventListener('beforeinstallprompt', (e) => {
        // ! Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault()
        // Stash the event so it can be triggered later.
        this.deferredPrompt = e
      })
    },
    clickCallback() {
      // Show the prompt
      this.deferredPrompt.prompt()
      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          // Call another function?
        }
        this.deferredPrompt = null
      })
    },
  },
}
</script>
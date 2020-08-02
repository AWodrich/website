<template>
    <div class="row">
      <div class="col-6">
        Hey,
        JUST A FEW INFORMATIONS ABOUT
        Who am I
        My experience
        Recognitions
      </div>
    </div>

</template>

<script>
import { ref, computed } from "@vue/composition-api";

export default {
  name: 'Main',
  setup() {

    // Data
    const options = ref([])
    const headline = ref('')
    const themes = ref({})

    // Methods
    const findCursorPosition = () => {

    }


    // Getters
    const getCursorPosition = computed( () => "")

    return { options, headline, themes, findCursorPosition, getCursorPosition }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

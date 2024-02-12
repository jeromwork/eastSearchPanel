
<script setup>
import {ref, onMounted, defineAsyncComponent, reactive, computed} from 'vue'

import { useStorage } from '@vueuse/core'

defineProps({
    msg: String,
})
console.log(window)
const stateDoctorsList = (window.__eastDoctorsList) ? computed(() => window.__eastDoctorsList):reactive({});
const childComponent = ref({});
const isWindow = ref(false);
// Use onMounted to access the window object after the component is mounted
onMounted(() => {
    // Bind storedValue to the window object
    if (window.__eastDoctorsList) {
        isWindow.value=true;
        //stateDoctorsList = computed(() => window.__eastDoctorsList);
        //stateDoctorsList.value = window.__eastDoctorsList; // Update ref value
    }
    childComponent.value = defineAsyncComponent(() => import('./child2.vue'));
});

</script>

<template>
    {{stateDoctorsList}}

    <component :is="childComponent" msg="chiiiild!"></component>
    <div class="card">
        <button type="button" @click="stateDoctorsList.count++">Increment count in app2: {{ stateDoctorsList.count }}</button>
    </div>
</template>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>

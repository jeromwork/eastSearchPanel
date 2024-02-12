<script setup>
import {ref, defineProps} from "vue";

const props = defineProps({msg:String})


</script>
<template>
{{msg}}
</template>
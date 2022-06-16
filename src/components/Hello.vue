<template>
    <div id="main">
        <DxButtonNormal :text="name" />
    </div>
</template>
<script lang="ts" setup>
import DxButtonNormal from "devextreme-vue/button"


defineProps({ name: String })

</script>

<template>
    <span>
       {{ dateRange(startDate, endDate) }}
    </span>
</template>

<script setup lang="ts">
import { dateRange } from "@lib/utils";

const props = defineProps({
    startDate: {
        type: [Date, String],
        required: true,
    },
    endDate: {
        type: [Date, String],
        required: true,
    },
});
</script>

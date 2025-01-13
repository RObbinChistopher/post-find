<template>
    <div>
        <Slider />
        <Categories />
        <div class="flex-between">
            <span class="header3">Mobile Phones</span>
            <div class="flex-gap">
                <p class="text2 m-0 color">View more</p>
                <i class="fas fa-chevron-right color" style="font-size: 10px;"></i>
            </div>
        </div>
        <Card />
        <div class="flex-between">
            <span class="header3">Cars</span>
            <div class="flex-gap">
                <p class="text2 m-0 color">View more</p>
                <i class="fas fa-chevron-right color" style="font-size: 10px;"></i>
            </div>
        </div>
        <Card />
        <div class="flex-between">
            <span class="header3">Bikes & Motorcycles</span>
            <div class="flex-gap">
                <p class="text2 m-0 color">View more</p>
                <i class="fas fa-chevron-right color" style="font-size: 10px;"></i>
            </div>
        </div>
        <Card />
    </div>
</template>

<script setup>

import Categories from '../components/category/show.vue'
import Slider from '../components/includes/slider.vue'
import Card from '../components/card/show.vue'
</script>


<style scoped>
.color{
    color: #517472 !important;
    font-weight: 800;
}
</style>
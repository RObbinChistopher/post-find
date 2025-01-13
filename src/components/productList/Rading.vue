<template>
    <div class="rating py-1 mr-1">
        <span v-for="index in 5" :key="index">
            <span :class="{'star rating-icon-star': index <= filledStars, 'star': index > filledStars}">
                &#9733;
            </span>
        </span>
    </div>
</template>

<script>
export default {
    name: "Rating",
    props: {
        rating: {
            type: Number,
            required: true
        }
    },
    computed: {
        filledStars() {
            // Round the rating to the nearest integer
            const roundedRating = Math.round(this.rating);
            // Limit the number of filled stars to a maximum of 5
            return Math.min(roundedRating, 5);
        }
    }
}
</script>

<style scoped>
.star {
    color: #ccc;
    background: rgb(255 255 255);
    margin: 1px;
    text-align: center;
    border-radius: 2px;
    padding: 2px;
    display: inline-block;
    line-height: 24px;
    border: 1px solid;
    font-size: 20px;
}

.rating-icon-star {
    color: rgb(255 255 255);
    background: #517472;
    border: 1px solid #517472;
    margin: 1px;
    text-align: center;
    border-radius: 2px;
    padding: 2px;
    display: inline-block;
    line-height: 24px;
    font-size: 20px;
}

.rating {
    display: inline-block;
}
</style>

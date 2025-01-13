<template>
    <div style="margin-top: 3.5rem;">
        <span class="header3">All categories</span>

        <div class="categories-container">
            <!-- Category 1 -->
            <router-link to="/product-list" class="items-link">
                <div class="category">
                    <img src="https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png"
                        class="categoies-images" alt="">
                    <div class="text">Mobiles</div>
                </div>
            </router-link>
            <!-- Category 2 -->
            <div class="category">
                <img src="https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png"
                    class="categoies-images" alt="">
                <div class="text">Vehicles</div>
            </div>
            <!-- Category 3 -->
            <div class="category">
                <img src="https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png"
                    class="categoies-images" alt="">
                <div class="text">Property for Sale</div>
            </div>
            <!-- Category 4 -->
            <div class="category">
                <img src="https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png"
                    class="categoies-images" alt="">
                <div class="text">Property for Rent</div>
            </div>
            <!-- Category 5 -->
            <div class="category">
                <img src="https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png"
                    class="categoies-images" alt="">
                <div class="text">Electronics & Home Appliances</div>
            </div>
            <!-- Category 6 -->
            <div class="category">
                <img src="https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png"
                    class="categoies-images" alt="">
                <div class="text">Bikes</div>
            </div>
            <!-- Category 7 -->
            <div class="category">
                <img src="https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png"
                    class="categoies-images" alt="">
                <div class="text">Business, Industrial & Agriculture</div>
            </div>
            <!-- Category 8 -->
            <div class="category">
                <img src="https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png"
                    class="categoies-images" alt="">
                <div class="text">Services</div>
            </div>
            <!-- Category 9 -->
            <div class="category">
                <img src="https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png"
                    class="categoies-images" alt="">
                <div class="text">Animals</div>
            </div>
            <!-- Category 10 -->
            <div class="category">
                <img src="https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png"
                    class="categoies-images" alt="">
                <div class="text">Furniture & Home Decor</div>
            </div>
            <!-- Category 11 -->
            <div class="category">
                <img src="https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png"
                    class="categoies-images" alt="">
                <div class="text">Fashion & Beauty</div>
            </div>
            <!-- Category 12 -->
            <div class="category">
                <img src="https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png"
                    class="categoies-images" alt="">
                <div class="text">Books, Sports & Hobbies</div>
            </div>
            <div class="category">
                <img src="https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png"
                    class="categoies-images" alt="">
                <div class="text">Kids</div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.categoies-images {
    width: 80%;
}

.categories-container {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 20px;
    padding: 20px 0;
}

.category {
    padding: 10px;
    text-align: center;
    height: 170px;
}

.category i {
    font-size: 40px;
    color: #007bff;
}

.category-name {
    margin-top: 10px;
    font-weight: bold;
    font-size: 16px;
    color: #333;
}

@media (max-width: 768px) {
    .categories-container {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (max-width: 480px) {
    .categories-container {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
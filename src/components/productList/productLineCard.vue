<template>
    <div class="">
        <div class="mt-3 p-2 gobal-border">
            <div class="row">
                <div class="col-md-3">
                    <img src="https://images.olx.com.pk/thumbnails/509207573-800x600.webp" class="w-100" alt="">
                </div>
                <div class="col-md-9 productLineDetail">
                    <div class="flex-between mt-3">
                        <p class="header3 mb-0">Rs 2,000</p>
                        <i class="fa-regular fa-heart icon-size"></i>
                    </div>
                    <p class="text">CRICKET ACCESSORIES\BATS\BALLS\KITS\ONE STOP SHOP...</p>
                    <!-- Corrected Rating Component -->
                    <Rating :rating="3.5" /><span class="text2">&nbsp;&nbsp;5 (100 reviews)</span>
                    <p class="text2 mb-0 mt-3"><i class="fa-solid fa-location-dot"></i>&nbsp;Allama Iqbal Town, Lahore,
                        1 week ago</p>
                    <div class="d-flex gap-2 mt-3 btn-chat-phone">
                        <button type="submit" class="btn btn-primary gobal-btn main-btn-hover2">
                            <i class="fa-solid fa-phone"></i>&nbsp;&nbsp;call
                        </button>
                        <button type="submit" class="btn btn-primary gobal-btn-border">
                            <i class="fa-solid fa-message"></i>&nbsp;&nbsp;Chat
                        </button>
                        <button type="submit" class="btn btn-primary gobal-btn-border">
                            <i class="fa-brands fa-whatsapp"></i>&nbsp;&nbsp;Whatapp
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-3 p-2 gobal-border">
            <div class="row">
                <div class="col-md-3">
                    <img src="https://images.olx.com.pk/thumbnails/509207573-800x600.webp" class="w-100" alt="">
                </div>
                <div class="col-md-9 productLineDetail">
                    <div class="flex-between mt-3">
                        <p class="header3 mb-0">Rs 2,000</p>
                        <i class="fa-regular fa-heart icon-size"></i>
                    </div>
                    <p class="text">CRICKET ACCESSORIES\BATS\BALLS\KITS\ONE STOP SHOP...</p>
                    <!-- Corrected Rating Component -->
                    <Rating :rating="3.5" /><span class="text2">&nbsp;&nbsp;5 (100 reviews)</span>
                    <p class="text2 mb-0 mt-3"><i class="fa-solid fa-location-dot"></i>&nbsp;Allama Iqbal Town, Lahore,
                        1 week ago</p>
                    <div class="d-flex gap-2 mt-3 btn-chat-phone">
                        <button type="submit" class="btn btn-primary gobal-btn main-btn-hover2">
                            <i class="fa-solid fa-phone"></i>&nbsp;&nbsp;call
                        </button>
                        <button type="submit" class="btn btn-primary gobal-btn-border">
                            <i class="fa-solid fa-message"></i>&nbsp;&nbsp;Chat
                        </button>
                        <button type="submit" class="btn btn-primary gobal-btn-border">
                            <i class="fa-brands fa-whatsapp"></i>&nbsp;&nbsp;Whatapp
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-3 p-2 gobal-border">
            <div class="row">
                <div class="col-md-3">
                    <img src="https://images.olx.com.pk/thumbnails/509207573-800x600.webp" class="w-100" alt="">
                </div>
                <div class="col-md-9 productLineDetail">
                    <div class="flex-between mt-3">
                        <p class="header3 mb-0">Rs 2,000</p>
                        <i class="fa-regular fa-heart icon-size"></i>
                    </div>
                    <p class="text">CRICKET ACCESSORIES\BATS\BALLS\KITS\ONE STOP SHOP...</p>
                    <!-- Corrected Rating Component -->
                    <Rating :rating="3.5" /><span class="text2">&nbsp;&nbsp;5 (100 reviews)</span>
                    <p class="text2 mb-0 mt-3"><i class="fa-solid fa-location-dot"></i>&nbsp;Allama Iqbal Town, Lahore,
                        1 week ago</p>
                    <div class="d-flex gap-2 mt-3 btn-chat-phone">
                        <button type="submit" class="btn btn-primary gobal-btn main-btn-hover2">
                            <i class="fa-solid fa-phone"></i>&nbsp;&nbsp;call
                        </button>
                        <button type="submit" class="btn btn-primary gobal-btn-border">
                            <i class="fa-solid fa-message"></i>&nbsp;&nbsp;Chat
                        </button>
                        <button type="submit" class="btn btn-primary gobal-btn-border">
                            <i class="fa-brands fa-whatsapp"></i>&nbsp;&nbsp;Whatapp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Rating from './Rading.vue';
export default {
    components: {
        Rating,
    },
    name: "ProductLineDetail",
};
</script>



<style scoped>
.btn-chat-phone{
    width: 60%;
}
.productLineDetail {
    padding-left: 0;
}
@media screen and (max-width: 768px) {
    .productLineDetail{
        padding: 0 12px;
    }
    .btn-chat-phone{
        width: 100%;
    }
}
</style>
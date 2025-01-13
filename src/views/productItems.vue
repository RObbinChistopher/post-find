<template>
    <div class="row mt-3">
        <div class="col-md-4 col-12 mb-3">
            <div class="p-3 gobal-border">
                <p class="header3 mb-3">Listed by private user</p>
                <div class="row">
                    <div class="col-md-3 col-3" style="padding-right: 0;">
                        <img src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
                            style="width: 80%;" alt="">
                    </div>
                    <div class="col-md-9 col-9 p-0">
                        <div class="flex-column">
                            <p class="text m-0">Christopher</p>
                            <p class="f-400 m-0">Member since May 2018</p>
                            <div class="flex-gap">
                                <p class="text">See profile</p>
                                <i class="fas fa-chevron-right" style="font-size: small;"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary gobal-btn  main-btn-hover2"><i
                                class="fa-solid fa-phone"></i>&nbsp;&nbsp;Show phone number</button>
                        <button type="submit" class="btn btn-primary gobal-btn-border mt-2"><i
                                class="fa-solid fa-message"></i>&nbsp;&nbsp;Chat</button>
                    </div>

                </div>
            </div>
            <div class="mt-3 p-3 gobal-border">
                <p class="header3 m-0">Location</p>
                <div class="flex-gap">
                    <p class="m-0"><i class="fa-solid fa-location-dot"></i></p>
                    <p class="text m-0">Mid City, Faisalabad</p>
                </div>
            </div>
        </div>
        <div class="col-md-8 col-12">
            <div id="carouselExampleControls" class="carousel slide gobal-border" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" @click="toggleProductGalley">
                        <img src="https://images.olx.com.pk/thumbnails/509748773-800x600.webp" class="d-block w-100"
                            alt="...">
                    </div>
                    <div class="carousel-item" @click="toggleProductGalley">
                        <img src="https://images.olx.com.pk/thumbnails/510896361-800x600.webp" class="d-block w-100"
                            alt="...">
                    </div>
                    <div class="carousel-item" @click="toggleProductGalley">
                        <img src="https://images.olx.com.pk/thumbnails/500590569-600x450.webp" class="d-block w-100"
                            alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span> -->
                    <i class="fa fa-chevron-left carousel-icons-lr"></i>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> -->
                    <i class="fa fa-chevron-right carousel-icons-lr"></i>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div class="mt-3 p-3 gobal-border">
                <div class="flex-between">
                    <h1 style="font-weight: 700;">Rs 6,800,000</h1>
                    <div class="d-flex gap-3">
                        <i class="fa-solid fa-share-nodes icon-size"></i>
                        <i class="fa-regular fa-heart icon-size"></i>
                    </div>
                </div>
                <p class="header2 mb-1">Honda Civic VTi Oriel 2021 model</p>
                <div class="flex-between">
                    <div class="text2"><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;GT Road, Mingaora</div>
                    <p class="text2">6 days ago</p>
                </div>

            </div>
            <div class="mt-3 p-3 gobal-border">
                <p class="header3">Details</p>
                <div class="row">
                    <div v-for="(item, index) in data" :key="index" class="col-md-6">
                        <div class="feature-product flex-between mb-2"
                            :class="{ 'bg-color': Math.floor(index / 2) % 2 === 0 }">
                            <p style="font-weight: 400;">{{ item.label }}</p>
                            <p class="text adjustwidth">{{ item.value }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-3 p-3 gobal-border">
                <p class="header3">Features</p>
                <div class="row">
                    <div v-for="(item, index) in data" :key="index" class="col-md-6">
                        <div class="feature-product flex-between mb-2"
                            :class="{ 'bg-color': Math.floor(index / 2) % 2 === 0 }">
                            <p style="font-weight: 400;">{{ item.label }}</p>
                            <p class="text adjustwidth">{{ item.value }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-3 p-3 gobal-border">
                <p class="header3 mb-3">Description</p>
                <p style="font-weight: 400;">It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                    a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                    making it look like readable English. Many desktop publishing packages and web page editors now use
                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
                    still in their infancy. Various versions have evolved over the years, sometimes by accident,
                    sometimes on purpose (injected humour and the like).</p>
            </div>
            <hr>
            <p class="header3">Similar cars</p>
            <Card />
        </div>

        <!-- product gallery -->


        <div v-if="isopenGalley" class="login-modal-overlay">
            <div class="pop-body p-3">
                <div class="flex-between w-100" style="align-items: baseline;">
                    <div class="modal-body">
                        <p class="header3 mb-0">Product&nbsp;Gallery </p>
                        <div class="d-flex gap-1">
                            <i><i class="fa-solid fa-camera"></i></i>
                            <p class="text">Photos (13)</p>
                        </div>
                    </div>
                    <button @click="toggleProductGalley" class="close-btn2">&times;</button>
                </div>

                <div class="image-gallery">
                    <div class="image-item"><img src="https://images.olx.com.pk/thumbnails/511276161-600x450.webp" alt="Image 1"></div>
                    <div class="image-item"><img src="https://images.olx.com.pk/thumbnails/511276162-600x450.webp" alt="Image 2"></div>
                    <div class="image-item"><img src="https://images.olx.com.pk/thumbnails/511276163-600x450.webp" alt="Image 3"></div>
                    <div class="image-item"><img src="https://images.olx.com.pk/thumbnails/511276164-600x450.webp" alt="Image 4"></div>
                    <div class="image-item"><img src="https://images.olx.com.pk/thumbnails/511276164-600x450.webp" alt="Image 4"></div>
                    <div class="image-item"><img src="https://images.olx.com.pk/thumbnails/511276164-600x450.webp" alt="Image 4"></div>
                    <div class="image-item"><img src="https://images.olx.com.pk/thumbnails/510847012-800x600.webp" alt="Image 4"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../components/card/show.vue'
export default {
    components: {
        Card
    },
    data() {
        return {
            data: [
                { label: "Make", value: "Honda" },
                { label: "Model", value: "BR-V" },
                { label: "Body Type", value: "MPV" },
                { label: "Color", value: "White" },
                { label: "Number of Owners", value: "2" },
                { label: "Registration city", value: "Lahore" },
                { label: "Car documents", value: "Original" },
                { label: "Assembly", value: "Local" }
            ],
            isopenGalley: false,
        };
    },
    mounted() {
        this.adjustCarouselDimensions();
        window.addEventListener('resize', this.adjustCarouselDimensions);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.adjustCarouselDimensions);
    },
    methods: {
        toggleProductGalley() {
            this.isopenGalley = !this.isopenGalley;
        },
        adjustCarouselDimensions() {
            const carousel = document.querySelector('#carouselExampleControls');
            const maxHeight = parseFloat(getComputedStyle(carousel).maxHeight);

            const images = carousel.querySelectorAll('.carousel-item img');
            images.forEach((img) => {
                img.style.height = `${maxHeight}px`;
                img.style.objectFit = 'contain';
                img.style.objectPosition = 'center';
            });
        },
    },
};
</script>

<style scoped>
.product-gallery-footer{
    border: 1px solid red;
    margin-top: 37px;
    height: 40px;
}
.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(30% - .8rem), 1fr));
  gap: .8rem;
  max-height: 500px; /* Max height for gallery */
  overflow-y: auto; /* Enable vertical scrolling */
  padding-right: 10px; /* Prevent scroll from covering images */
}

.image-item {
  position: relative;
  width: 100%;
  height: 450px; /* Fixed height for all images */
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}  
.pop-body {
    background: #fff;
    border-radius: 8px;
    width: 86%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    height: 90%;
    border-radius: 20px;
}

.close-btn2 {
    background: none;
    border: none;
    font-size: 1.8rem;
    display: flex;
    justify-content: end;
}

.carousel-icons-lr {
    background: #595959 !important;
    width: 30px !important;
    height: 30px !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    border-radius: 50% !important;
    font-size: 20px !important;
}

.carousel-item img {
    height: 27rem;
    /* Matches the max-height of the carousel */
    object-fit: contain;
    /* Center the image without cropping */
    object-position: center;
    /* Center the image vertically and horizontally */
    background: #f0f0f0;
    /* Add a light background to match the appearance */
}



.feature-product {
    padding: 16px 10px 0;
    height: 40px;
    border-radius: 3px;
}

.bg-color {
    background-color: #ebebeb;
}

.adjustwidth {
    width: 50%;
} 
</style>

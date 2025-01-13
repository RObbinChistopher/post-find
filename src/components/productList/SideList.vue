<template>
    <div class="mt-3">
        <div class="row mt-3">
            <div class="col-md-3">
                <div class="flex-gap">
                    <p class="header3">House in Pakistan</p>
                    <p class="product-count">4,236 ads</p>
                </div>
                <div class=" p-2 gobal-border">
                    <p class="header2 mb-2">Categories</p>
                    <p class="text2 mb-2">All categories</p>
                    <p class="text2 mb-1">&nbsp;&nbsp;&nbsp;Mobiles</p>
                    <p class="text2 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mobile Phones&nbsp;&nbsp;(4236)</p>
                    <p class="text2 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Accessories&nbsp;&nbsp;(351)</p>
                    <p class="text2 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Smart Watches&nbsp;&nbsp;(160)</p>
                    <p class="text2 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tablets&nbsp;&nbsp;(96)</p>
                    <div class="flex-gap mt-3" style="cursor: pointer;">
                        <p class="text2 m-0 color">See all</p>
                        <i class="fas fa-chevron-down text2 color" style="font-size: 10px;"></i>
                    </div>
                </div>
                <div class="mt-3 p-2 gobal-border">
                    <div class="remain-header mb-3">
                        <div class="dropdown">
                            <button class="dropdown-btn" @click="toggleDropdown">
                                <div>
                                    <i class="fa-solid fa-location-dot location-icon"></i>
                                    <span>Location</span>
                                </div>
                                <i class="fas fa-chevron-down arrow-icon" :class="{ 'open': isOpen }"></i>
                            </button>
                            <div v-show="isOpen" class="dropdown-content">
                                <div>
                                    <i class="fa-solid fa-location-dot location-icon"></i>
                                    <span>See all ads in Pakistan</span>
                                </div>
                                <hr>
                                <div class="area mt-2">CHOOSE REGION</div>
                                <div class="mt-3">
                                    <i class="fa-solid fa-location-crosshairs location-icon"></i>
                                    <span>Lahore</span>
                                </div>
                                <div class="mt-3">
                                    <i class="fa-solid fa-location-crosshairs location-icon"></i>
                                    <span>Azad Kashmir, Pakistan</span>
                                </div>
                                <div class="mt-3">
                                    <i class="fa-solid fa-location-crosshairs location-icon"></i>
                                    <span>Balochistan, Pakistan</span>
                                </div>
                                <div class="mt-3">
                                    <i class="fa-solid fa-location-crosshairs location-icon"></i>
                                    <span>Islamabad Capital Territory, Pakistan</span>
                                </div>
                                <div class="mt-3">
                                    <i class="fa-solid fa-location-crosshairs location-icon"></i>
                                    <span>Northern Areas, Pakistan</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <p class="header2 m-0">Pakistan</p>
                    <p class="text2 mb-1">&nbsp;&nbsp;&nbsp;Punjab&nbsp;(70)</p>
                    <p class="text2 mb-1">&nbsp;&nbsp;&nbsp;Islamabad Capital Territory&nbsp;(12)</p>
                    <p class="text2 mb-1">&nbsp;&nbsp;&nbsp;Sindh&nbsp;(10)</p>
                    <p class="text2 mb-1">&nbsp;&nbsp;&nbsp;Balochistan&nbsp;(2)</p>
                    <p class="text2 mb-1">&nbsp;&nbsp;&nbsp;Khyber Pakhtunkhwa&nbsp;(2)</p>
                    <div class="flex-gap mt-3" style="cursor: pointer;">
                        <p class="text2 m-0 color">See all</p>
                        <i class="fas fa-chevron-down text2 color" style="font-size: 10px;"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-9 product0line">
                <div class="d-flex gap-3">
                    <select class="form-select form-select-md text" style="box-shadow: none;"
                        aria-label="Small select example">
                        <option value="1" class="text">Newly listed</option>
                        <option value="2" class="text" selected>Most relevant</option>
                        <option value="3" class="text">Lowest price</option>
                        <option value="3" class="text">Highest price</option>
                    </select>
                    <div class="dropdown">
                        <button class="dropdown-btn" @click="toggleDropdownCat">
                            <div>
                                <span>Brand</span>
                            </div>
                            <i class="fas fa-chevron-down arrow-icon" :class="{ 'open': isOpenCAt }"></i>
                        </button>
                        <div v-show="isOpenCAt" class="dropdown-content">
                            <div class="area mt-2">CHOOSE BRAND</div>
                            <div class="mt-3">
                                <i class="fa-solid fa-location-crosshairs location-icon"></i>
                                <span>Bonanza satrangi</span>
                            </div>
                            <div class="mt-3">
                                <i class="fa-solid fa-location-crosshairs location-icon"></i>
                                <span>Maria B</span>
                            </div>
                            <div class="mt-3">
                                <i class="fa-solid fa-location-crosshairs location-icon"></i>
                                <span>Alkaram studio</span>
                            </div>
                            <div class="mt-3">
                                <i class="fa-solid fa-location-crosshairs location-icon"></i>
                                <span>Khaadi</span>
                            </div>
                            <div class="mt-3">
                                <i class="fa-solid fa-location-crosshairs location-icon"></i>
                                <span>POST/FIND</span>
                            </div>
                        </div>

                    </div>
                </div>
                <ProductLineCard /> 
            </div>
        </div>
    </div>

</template>
<script>
import ProductLineCard from './productLineCard.vue';
export default
    {
        components: {
            ProductLineCard
        },
        data() {
            return {
                isOpen: false,
                isOpenCAt: false,
                showLoginModal: false, // Control login modal visibility
                showCreateAccount: false // Tracks if the "Create an account" view is shown
            };
        },
        methods: {
            toggleDropdown() {
                this.isOpen = !this.isOpen;
            },
            toggleDropdownCat() {
                this.isOpenCAt = !this.isOpenCAt;
            },
            toggleLoginModal() {
                this.showLoginModal = !this.showLoginModal;
            }
        }
    };
</script>

<style scoped>
.product-count {
    background: #517472;
    color: white;
    padding: 0 6px;
    border-radius: 3px;
}

.color {
    color: #517472 !important;
    font-weight: 800;
}

.dropdown-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
}

/* Location icon on the left */
.location-icon {
    margin-right: 10px;
}

.area {
    font-size: 11px;
    color: #b8b5b5;
}

/* Arrow icon */
.arrow-icon {
    font-size: 16px;
    transition: transform 0.3s ease;
}

/* When dropdown is open, rotate the arrow */
.arrow-icon.open {
    transform: rotate(180deg);
    /* Rotates the down arrow to point upwards */
}

.dropdown {
    position: relative;
    /* Allow absolute positioning for the dropdown content */
    display: inline-block;
    /* Make it inline to prevent it from taking full width */
    width: 100%;
}

.dropdown-content {
    position: absolute;
    left: 0;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
    max-height: 320px;
    overflow-y: auto;
    z-index: 999;
    /* Ensure it is on top of other elements */
    margin-top: 10px;
}


.bell-message-login {
    display: flex;
    align-items: baseline;
    justify-content: flex-end;
    gap: 25px;
}

.main-btn-login {
    color: black;
    font-size: 17px;
    font-weight: 600;
    text-decoration: none;
    border: 2px solid #517472;
    padding: 3px 14px;
    border-radius: 20px;
}

.main-btn-login-sell {
    color: black;
    font-size: 17px;
    font-weight: 600;
    text-decoration: none;
    border: 2px solid #517472;
    padding: 3px 14px;
    border-radius: 20px;
}

.product0line {
    margin-top: 3rem;
}
</style>
<template>
    <div class="post-main-container">
        <div class="header3 text-center mb-3">
            Post your ad
        </div>
        <div class="row mt-3" style="margin-top: 3rem !important;">
            <div class="col-md-8 p-1">
                <div class="gobal-border p-3 mb-3">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <p class="text">Category</p>
                        </div>
                        <div class="col-md-8 mb-3">
                            <div class="flex-between">
                                <div class="flex-gap" style="align-items: center;">
                                    <div style="width: 19%;">
                                        <img src="https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png"
                                            style="width: 100%;" alt="">
                                    </div>
                                    <div class="flex-column">
                                        <p class="text mb-1">Mobiles</p>
                                        <p class="text2">Accessories / Converters</p>
                                    </div>
                                </div>
                                <router-link to="/my-ads" class="items-link text2"
                                    style="color: blue;">Change</router-link>
                            </div>
                        </div>
                        <hr>
                        <div class="col-md-4 mb-3">
                            <p class="text">Upload Images</p>
                        </div>
                        <div class="col-md-8 mb-3">
                            <div class="d-flex gap-3 mb-2">
                                <div class="image-upload gobal-border image-upload-bg"><i
                                        class="fa-solid fa-plus" style="font-size: 17px !important;"></i></div>
                                <div class="image-upload gobal-border"><img
                                        src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"
                                        class="icon-size" alt=""></div>
                                <div class="image-upload gobal-border"><img
                                        src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"
                                        class="icon-size" alt=""></div>
                                <div class="image-upload gobal-border"><img
                                        src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"
                                        class="icon-size" alt=""></div>
                                <div class="image-upload gobal-border"><img
                                        src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"
                                        class="icon-size" alt=""></div>
                                <div class="image-upload gobal-border"><img
                                        src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"
                                        class="icon-size" alt=""></div>
                                <div class="image-upload gobal-border"><img
                                        src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"
                                        class="icon-size" alt=""></div>
                                <br>
                            </div>
                            <div class="d-flex gap-3">
                                <div class="image-upload gobal-border"><img
                                        src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"
                                        class="icon-size" alt=""></div>
                                <div class="image-upload gobal-border"><img
                                        src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"
                                        class="icon-size" alt=""></div>
                                <div class="image-upload gobal-border"><img
                                        src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"
                                        class="icon-size" alt=""></div>
                                <div class="image-upload gobal-border"><img
                                        src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"
                                        class="icon-size" alt=""></div>
                                <div class="image-upload gobal-border"><img
                                        src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"
                                        class="icon-size" alt=""></div>
                                <div class="image-upload gobal-border"><img
                                        src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"
                                        class="icon-size" alt=""></div>
                                <div class="image-upload gobal-border"><img
                                        src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"
                                        class="icon-size" alt=""></div>
                                <br>
                            </div>
                            <p class="text2 mb-0 mt-2">For the cover picture we recommend using the landscape mode.</p>
                        </div>
                        <hr class="mt-2">
                        <div class="col-md-4 mb-3">
                            <p class="text">Make*</p>
                        </div>
                        <div class="col-md-8 mb-3">
                            <div class="select-container">
                                <select class="form-select select-height" aria-label="Default select example">
                                    <option class="text">Popular Make</option>
                                    <option value="1" class="text2">Honda</option>
                                    <option value="2" class="text2">Hyundai</option>
                                    <option value="3" class="text2">Ford</option>
                                    <option value="3" class="text2">Nissan</option>
                                    <option value="3" class="text2">Chevrolet</option>
                                </select>
                            </div>
                        </div>
                        <hr class="mt-2">
                        <div class="col-md-4 mb-3">
                            <p class="text">Ad title*</p>
                        </div>
                        <div class="col-md-8 mb-3">
                            <div class="select-container">
                                <select class="form-select select-height" aria-label="Default select example">
                                    <option class="text">Popular Make</option>
                                    <option value="1" class="text2">Honda</option>
                                    <option value="2" class="text2">Hyundai</option>
                                    <option value="3" class="text2">Ford</option>
                                    <option value="3" class="text2">Nissan</option>
                                    <option value="3" class="text2">Chevrolet</option>
                                </select>
                            </div>
                            <div class="flex-between mt-2">
                                <p class="text2">Mention the key features of your item (e.g. brand, model, age, type)
                                </p>
                                <p class="text2">1/70</p>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <p class="text">Description*</p>
                        </div>
                        <div class="col-md-8 mb-3">
                            <div class="select-container">
                                <div class="form-floating">
                                    <textarea class="form-control text2" placeholder="Leave a comment here"
                                        id="floatingTextarea" rows="7" style="height: 10rem;"></textarea>
                                    <label for="floatingTextarea" class="text2">Describe the item you’re selling</label>
                                </div>
                            </div>
                            <div class="flex-between mt-2">
                                <p class="text2">Description should contain at least 10 alphanumeric characters. Please
                                    edit the field
                                </p>
                                <p class="text2">1/4096</p>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <p class="text">Location*</p>
                        </div>
                        <div class="col-md-8 mb-3">
                            <div class="select-container">
                                <select class="form-select select-height" aria-label="Default select example">
                                    <option class="text">Select Location</option>
                                    <option value="1" class="text2">Honda</option>
                                    <option value="2" class="text2">Hyundai</option>
                                    <option value="3" class="text2">Ford</option>
                                    <option value="3" class="text2">Nissan</option>
                                    <option value="3" class="text2">Chevrolet</option>
                                </select>
                            </div>
                            <div class="flex-between mt-2">
                                <p class="text2">Description should contain at least 10 alphanumeric characters. Please
                                    edit the field
                                </p>
                                <p class="text2">1/4096</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gobal-border p-3 mt-3">
                    <div class="row">
                        <div class="col-md-4">
                            <p class="text">Down payment*</p>
                        </div>
                        <div class="col-md-8">
                            <div class="input-group mb-3">
                                <span class="input-group-text header-sreach-input input-height"
                                    id="basic-addon1">Rs</span>
                                <input type="text" class="form-control" placeholder="Enter Down Payment"
                                    aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gobal-border p-3 mt-3">
                    <div class="row">
                        <div class="col-md-4">
                            <p class="text">Name*</p>
                            <div style="margin-top: 2.4rem !important;">
                                <p class="text2">Your phone number</p>
                            </div>
                            <div style="margin-top: 2rem !important;">
                                <p class="text">Show my phone number in ads</p>
                            </div>

                        </div>
                        <div class="col-md-8">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control input-height" placeholder="Name"
                                    aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                            <div style="text-align: end;">
                                <p class="text2">+923364583024</p>
                            </div>
                            <div class="form-check form-switch toogle-btn-main" style="text-align: end;">
                                <input class="form-check-input toogle-btn" type="checkbox" id="flexSwitchCheckChecked"
                                    checked>
                            </div>
                        </div>

                        <hr>
                        <div style="text-align: end;">
                            <button type="submit" class="btn btn-primary gobal-btn main-btn-hover2"
                                style="width: 14%;">&nbsp;&nbsp;Post now </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 p-1">
                <div class="gobal-border p-3">
                    <div class="p-1">
                        <p class="header2 mb-1">
                            Need help getting started?
                        </p>
                        <p class="text2">
                            Review these resource to learn how to create a great ad and increase your selling chances
                        </p>
                        <li class="text text-underline">
                            Tips for improving your ads and your chances of selling
                        </li>
                        <li class="text mt-2 mb-3" style="text-decoration: underline;">
                            All you need to know about Posting Ads
                        </li>
                        <p class="text2">You can always come back to change your ad</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.post-main-container {
    margin-bottom: 1rem;
}

.image-upload {
    height: 3.4rem;
    width: 4.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-upload-bg {
    background-color: #ebf1ff;
}

.icon-size {
    width: 38%;
    font-size: 17px !important;
}

.select-container {
    position: relative;
    width: 100%;
}

.select-height {
    height: 51px;
}

.toogle-btn {
    padding: 12px;
    width: 50px;
}

.toogle-btn-main {
    display: flex;
    justify-content: end;
    margin-top: 28px;
}

.input-height {
    height: 50px;
}

.text-underline {
    text-decoration: underline;
    padding-left: 1.5em;
    text-indent: -1.5em;
}

.text-underline::before {
    content: "•";
    /* Custom bullet symbol */
    position: absolute;
    left: 0;
    /* Align the bullet to the left margin */
}
</style>
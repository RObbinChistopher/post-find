<template>
    <div class="container">
        <div class="mian-container">
            <div class="gobal-border p-3 mb-3">
                <p class="header3">Edit profile</p>
                <hr>
                <div class="flex-gap" style="align-items: center; gap: 10px;">
                    <div class="flex-column profile-width">
                        <p class="header2 mb-0">Profile Photo</p>
                        <img src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
                            style="width: 70%;" alt="">
                    </div>
                    <div class="flex-column">
                        <div class="flex-gap mb-2">
                            <button class="btn btn-primary gobal-btn main-btn-hover2">Upload Photo</button>
                            <button class="btn btn-primary gobal-btn-border">Remove&nbsp;Photo</button>
                        </div>
                        <p class="text2">JPG, JPEG, PNG Min: 400px, Max: 1024px</p>
                    </div>
                </div>
                <hr>

                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="text mb-1">Name</label>
                            <input type="email" class="form-control header-sreach-input" id="exampleFormControlInput1"
                                placeholder="Enter your name">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="text mb-1">Phone number</label>
                            <div class="d-flex gap-2">
                                <input type="number" class="form-control header-sreach-input" id="dateInput"
                                    placeholder="Enter your number">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="text mb-1">Date of birth</label>
                            <div class="d-flex gap-2">
                                <input type="date" class="form-control header-sreach-input" id="dateInput"
                                    placeholder="Select a date">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="text mb-1">Email</label>
                            <input type="email" class="form-control header-sreach-input" id="exampleFormControlInput1"
                                placeholder="Enter your email">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="text mb-1">City</label>
                            <div class="d-flex gap-2">
                                <input type="text" class="form-control header-sreach-input" id="dateInput"
                                    placeholder="Enter your city">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="text mb-1">Gender</label>
                            <select class="form-select form-control" aria-label="Default select example"
                                style="height: 44px;">
                                <option selected class="text">Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="not-say">Prefer not to say</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div class="flex-between">
                    <button class="btn btn-primary gobal-btn-border" style="width: 8rem;">Discard</button>
                    <button class="btn btn-primary gobal-btn main-btn-hover2" style="width: 8rem;">Save Changes</button>
                </div>
            </div>
            <div class="gobal-border p-3 mt-3">
                <p class="header3">Delete this account</p>
                <hr>
                <div class="flex-column">
                    <p class="header2">Are you sure you want to delete your account?</p>
                    <button class="btn btn-primary gobal-btn-border mb-3" style="width: 33%">Yes, delete my account</button>
                    <p class="header2 m-0" style="text-decoration: underline;">See more info</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
</script>


<style scoped>
.mian-container {
    margin: 1rem 4rem;
}

.profile-width {
    width: 12%;
}

.but-save-change {
    text-align: end;
}
</style>
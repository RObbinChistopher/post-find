<template>
  <div class="">
    <div class="top-main-header mb-3">
      <router-link to="/" class="items-link"
        ><span class="herader">POST/FIND</span></router-link
      >
      <div class="d-flex header-main-category">
        <div class="header-icon-bg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            class="_5120d4ee"
            alt="OLX Motors"
          >
            <path
              d="M23.75 8.38a1.66 1.66 0 0 0-2.08-1.08l-.92.3-1.59-3.35-.5-.17a24.01 24.01 0 0 0-7.16-1c-2.23-.06-4.44.28-6.54 1.03l-.45.18-1.52 3.5-.64-.2a1.66 1.66 0 1 0-1 3.17l.12.04-.1.18a6.1 6.1 0 0 0-.61 2.26c-.01.37 0 1.11.03 1.83l.01 4v.03c-.02.36.02.73.12 1.08a1.1 1.1 0 0 0 1.11.74H4.4a1.1 1.1 0 0 0 1.1-.74c.1-.35.15-.72.13-1.08v-.44c2.76.25 4.53.37 6.28.37 1.74 0 3.45-.12 6.1-.36v.43c-.02.36.02.73.12 1.08a1.1 1.1 0 0 0 1.11.74h2.37a1.1 1.1 0 0 0 1.11-.74c.1-.35.14-.72.12-1.08l.01-3.96v-.03c.05-.74.1-1.5.1-1.93a5.6 5.6 0 0 0-.64-2.35l-.1-.21.47-.15a1.66 1.66 0 0 0 1.08-2.09zM5.37 5.18h.02c1.96-.69 4.03-1 6.1-.94 2.3-.04 4.6.28 6.8.93l.04.02 1.3 2.74a26.7 26.7 0 0 1-6.42.62h-1.06c-2.69.1-5.37-.05-8.03-.45l1.26-2.92zm-.9 13.92c0 .22-.01.45-.05.66H2a3.25 3.25 0 0 1-.04-.66v-.87c.16.08.33.13.5.15l2.02.18v.54zm17.2-.04v.04c0 .23-.01.45-.05.67h-2.44a3.26 3.26 0 0 1-.03-.67v-.53l1.88-.18c.22-.02.44-.09.63-.2v.87zm.64-9.7l-1.76.57.71 1.43c.3.57.48 1.2.5 1.85.02.37-.03 1.06-.07 1.7h-.01v.2l-.07 1.06c-.01.43-.28 1.05-.7 1.1-4.48.41-6.74.62-9 .62-2.28 0-4.66-.21-9.35-.64-.28-.03-.47-.48-.53-.9-.04-.3-.08-.79-.1-1.3v-.14a25.4 25.4 0 0 1-.02-1.62c.05-.61.21-1.21.48-1.77l.77-1.39-1.47-.46a.5.5 0 0 1 .3-.97l1.63.52.02-.02c2.45.43 4.94.6 7.43.52h2.13a26.8 26.8 0 0 0 6.92-.7l.49-.15L22 8.4a.51.51 0 0 1 .63.33.5.5 0 0 1-.33.64z"
            ></path>
            <path
              d="M4.54 12.08a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zm0 2.46a.65.65 0 1 1 0-1.3.65.65 0 0 1 0 1.3zm14.57-2.46a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zm0 2.46a.65.65 0 1 1 0-1.3.65.65 0 0 1 0 1.3zm-11.71.28h8.96v1.15H7.4v-1.15z"
            ></path>
          </svg>
        </div>
        <span class="header2">Motors</span>
      </div>
      <div class="d-flex header-main-category">
        <div class="header-icon-bg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            class="_5120d4ee"
            alt="OLX Property"
          >
            <path
              d="M22.78 21.81V7.8L15.3 5.3v1.58l5.98 2V21.8H13.8V.7H1.22v21.1h-.6v1.5h22.76v-1.5h-.6zM12.3 4.3v17.5H2.72V2.2h9.58v2.1z"
            ></path>
            <path
              d="M7.98 4.37h2.42v1.21H7.98v-1.2zm-3.63 0h2.42v1.21H4.35v-1.2zM7.98 6.8h2.42V8H7.98V6.8zm-3.63 0h2.42V8H4.35V6.8zm3.63 3.62h2.42v1.21H7.98v-1.2zm-3.63 0h2.42v1.21H4.35v-1.2zm3.63 2.42h2.42v1.21H7.98v-1.2zm-3.63 0h2.42v1.21H4.35v-1.2zm3.63 3.63h2.42v1.21H7.98v-1.2zm-3.63 0h2.42v1.21H4.35v-1.2zm13.31-6.05h1.21v1.21h-1.2v-1.2zm-2.42 0h1.21v1.21h-1.2v-1.2zm2.42 2.42h1.21v1.21h-1.2v-1.2zm-2.42 0h1.21v1.21h-1.2v-1.2zm2.42 3.63h1.21v1.21h-1.2v-1.2zm-2.42 0h1.21v1.21h-1.2v-1.2z"
            ></path>
          </svg>
        </div>
        <span class="header2">Property</span>
      </div>
    </div>
    <sidebar />

    <div class="row">
      <div class="col-md-3 col-12">
        <div class="remain-header mb-3">
          <div class="dropdown">
            <button class="dropdown-btn" @click="toggleDropdown">
              <div>
                <i class="fa-solid fa-location-dot location-icon"></i>
                <span>Location</span>
              </div>
              <i
                class="fas fa-chevron-down arrow-icon"
                :class="{ open: isOpen }"
              ></i>
            </button>
            <div v-show="isOpen" class="dropdown-content">
              <div>
                <i class="fa-solid fa-location-crosshairs location-icon"></i>
                <span>Use Current Location</span>
              </div>
              <hr />
              <div>
                <i class="fa-solid fa-location-dot location-icon"></i>
                <span>See all ads in Pakistan</span>
              </div>
              <hr />
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
      </div>
      <div class="col-md-6 col-12">
        <div class="input-group">
          <input
            type="text"
            class="form-control header-sreach-input"
            aria-label="Dollar amount (with dot and two decimal places)"
            placeholder="Find Car, Mobile Phones and more..."
          />
          <span
            class="input-group-text main-btn-hover"
            style="
              background-color: #517472;
              color: white;
              font-size: 15px;
              box-shadow: none;
            "
            ><i class="fa-solid fa-magnifying-glass" style="font-size: 20px"></i
          ></span>
        </div>
      </div>
      <div
        class="col-md-3 col-12 bell-message-login flex justify-center items-center"
      >
        <div class="bell-message-icon">
          <router-link to="/inbox" class="items-link">
            <div class="message-container">
              <i class="fa-regular fa-message header-common-icon"></i>
              <span
                v-if="hasNotification"
                class="absolute -top-1 -right-1 w-2 h-2 bg-primaryColor rounded-full animate-blink"
              ></span>
            </div>
          </router-link>

          <div
            @click="toggleNotification"
            class="notification-container relative"
          >
            <i
              class="fa-regular fa-bell header-common-icon-message cursor-pointer relative"
            >
              <!-- Notification Dot -->
              <span
                v-if="hasNotification"
                class="absolute -top-1 right-0 w-2 h-2 bg-primaryColor rounded-full animate-blink"
              ></span>
            </i>

            <!-- Notification Dropdown -->
            <div
              v-if="isNotificationOpen"
              class="dropdown-content absolute -left-60 mt-2 z-20 bg-white border border-gray-300 rounded-lg w-64"
            >
              <!-- Notification item -->
              <div
                class="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
              >
                <!-- Image on the left -->
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile Picture"
                  class="w-10 h-10 rounded-full mr-3"
                />

                <!-- Notification details on the right -->
                <div class="flex-1 gap-4">
                  <p class="font-medium text-gray-700">Your Ad is live!</p>
                  <p class="text-xs text-gray-500">1 week ago</p>
                </div>
              </div>
              <!-- Another notification item -->
              <div
                class="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
              >
                <!-- Image on the left -->
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile Picture"
                  class="w-10 h-10 rounded-full mr-3"
                />

                <!-- Notification details on the right -->
                <div class="flex-1 gap-4">
                  <p class="font-medium text-gray-700">Your Ad is live!</p>
                  <p class="text-xs text-gray-500">2 week ago</p>
                </div>
              </div>
              <div
                class="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
              >
                <!-- Image on the left -->
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile Picture"
                  class="w-10 h-10 rounded-full mr-3"
                />

                <!-- Notification details on the right -->
                <div class="flex-1 gap-4">
                  <p class="font-medium text-gray-700">Your Ad is live!</p>
                  <p class="text-xs text-gray-500">3 week ago</p>
                </div>
              </div>
              <div
                class="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
              >
                <!-- Image on the left -->
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile Picture"
                  class="w-10 h-10 rounded-full mr-3"
                />

                <!-- Notification details on the right -->
                <div class="flex-1 gap-4">
                  <p class="font-medium text-gray-700">Your Ad is live!</p>
                  <p class="text-xs text-gray-500">4 week ago</p>
                </div>
              </div>
              <!-- Add more notifications as needed -->
            </div>
          </div>
        </div>
        <div class="sell-login-gap">
          <button
            @click="toggleLoginModal"
            class="hidden main-btn-login main-btn-hover2"
            style="background-color: white"
          >
            Login
          </button>
          <div id="app">
            <!-- Profile Toggle Button -->
            <div
              @click="toggleProfile"
              class="cursor-pointer font-bold text-lg flex items-center"
            >
              <!-- Profile Picture -->
              <img
                src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
                alt="Profile"
                class="w-10 h-10 rounded-full"
              />

              <!-- Toggle Dropdown Arrow -->
              <i
                :class="{
                  'fa-solid fa-chevron-down': !isProfileVisible, // Show down arrow if dropdown is closed
                  'fa-solid fa-chevron-up': isProfileVisible, // Show up arrow if dropdown is open
                }"
              ></i>
            </div>

            <!-- Profile Dropdown Menu -->
            <div
              v-if="isProfileOpen"
              class="absolute right-36 mt-2 z-20 bg-white border border-gray-300 rounded-md w-64"
            >
              <ul class="text-sm text-gray-700">
                <li class="px-4 py-2 cursor-pointer border-b border-gray-300">
                  <div class="flex flex-col gap-3">
                    <div class="flex items-center gap-4">
                      <img 
                        src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
                        alt=""
                        class="w-16"
                      />
                      <div
                        class="flex justify-center items-start flex-col gap-1"
                      >
                        <h1>Hello,</h1>
                        <h1 class="text-xl">Anas Tariq</h1>
                      </div>
                    </div>
                    <div class="flex justify-center items-center mb-2">
                      <router-link to="/edit-profile">
                        <button @click="handleItemClick('View and edit your profile')"
                          class="p-2 border-2 px-4 text-xs border-primaryColor hover:outline hover:border outline-primaryColor rounded-md text-primaryColor"
                        >
                          View and edit your profile
                        </button>
                      </router-link>
                    </div>
                  </div>
                </li>
                <router-link to="/my-ads">
                  <li @click="handleItemClick('My ads')"
                    class="px-4 py-2 hover:text-primaryColor hover:bg-gray-100 cursor-pointer flex items-center"
                  >
                    <i class="fa-solid fa-th-large mr-3"></i>
                    <!-- Icon for My Ads -->
                    My ads
                  </li>
                </router-link>

                <li @click="handleItemClick('Favourites & Saved')"
                  class="px-4 py-2 hover:text-primaryColor hover:bg-gray-100 cursor-pointer flex items-center"
                >
                  <i class="fa-solid fa-heart mr-3"></i>
                  <!-- Icon for Favourites & Saved searches -->
                  Favourites & Saved
                </li>
                <router-link to="/public-profile">
                  <li @click="handleItemClick('Public Profile')"
                    class="px-4 py-2 hover:text-primaryColor hover:bg-gray-100 cursor-pointer flex items-center"
                  >
                    <i class="fa-solid fa-user-circle mr-3"></i>
                    <!-- Icon for Public Profile -->
                    Public Profile
                  </li>
                </router-link>
                <li @click="handleItemClick('Buy Discounted Packages')"
                  class="px-4 py-2 hover:bg-gray-100 hover:text-primaryColor cursor-pointer flex items-center"
                >
                  <i class="fa-solid fa-gift mr-3"></i>
                  <!-- Icon for Buy Discounted Packages -->
                  Buy Discounted Packages
                </li>
                <li @click="handleItemClick('Bought Packages & Billing')"
                  class="px-4 py-2 hover:bg-gray-100 hover:text-primaryColor cursor-pointer border-b border-gray-300 flex items-center"
                >
                  <i class="fa-solid fa-credit-card mr-3"></i>
                  <!-- Icon for Bought Packages & Billing -->
                  Bought Packages & Billing
                </li>
                <li @click="handleItemClick('Help')"
                  class="px-4 py-2 hover:bg-gray-100 hover:text-primaryColor cursor-pointer flex items-center"
                >
                  <i class="fa-solid fa-question-circle mr-3"></i>
                  <!-- Icon for Help -->
                  Help
                </li>
                <router-link to="/profile-setting">
                  <li @click="handleItemClick('Settings')"
                    class="px-4 py-2 hover:bg-gray-100 hover:text-primaryColor cursor-pointer border-b border-gray-300 flex items-center"
                  >
                    <i class="fa-solid fa-cogs mr-3"></i>
                    <!-- Icon for Settings -->
                    Settings
                  </li>
                </router-link>
                <li @click="handleItemClick('LogOut')"
                  class="px-4 py-2 hover:bg-gray-100 hover:text-primaryColor cursor-pointer border-b border-gray-300 flex items-center"
                >
                  <i class="fa-solid fa-sign-out-alt mr-3"></i>
                  <!-- Icon for LogOut -->
                  LogOut
                </li>
              </ul>
            </div>
          </div>
          <router-link
            to="/my-post"
            href="/"
            class="main-btn-login-sell main-btn-hover2 flex justify-center items-center"
            >+&nbsp;Sell</router-link
          >
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 all-category">
        <div class="remain-header2 mb-3">
          <div class="dropdown">
            <button class="dropdown-btn" @click="toggleDropdownCat">
              All categories
              <i
                class="fas fa-chevron-down arrow-icon"
                :class="{ open: isOpenCAt }"
              ></i>
            </button>
            <div v-show="isOpenCAt" class="dropdown-content">
              <div class="area mt-2">CHOOSE REGION</div>
              <div class="mt-3">
                <i class="fa-solid fa-location-crosshairs location-icon"></i>
                <span>Lahore</span>
              </div>
              <div class="mt-3">
                <i class="fa-solid fa-location-crosshairs location-icon"></i>
                <span>Lahore</span>
              </div>
              <div class="mt-3">
                <i class="fa-solid fa-location-crosshairs location-icon"></i>
                <span>Lahore</span>
              </div>
              <div class="mt-3">
                <i class="fa-solid fa-location-crosshairs location-icon"></i>
                <span>Lahore</span>
              </div>
            </div>
          </div>
        </div>
        <div class="text">Mobile Phones</div>
        <div class="text">Cars</div>
        <div class="text">Motorcycles</div>
        <div class="text">Houses</div>
        <div class="text">Video-Audios</div>
        <div class="text">Tablets</div>
        <div class="text">Land & Plots</div>
      </div>
    </div>

    <div v-if="showLoginModal" class="login-modal-overlay">
      <div class="login-modal">
        <div class="left-side">
          <h3 class="header3" style="color: white">Login/SignUp</h3>
          <img src="/src/assets/login2.svg" style="width: 112%" alt="" />
        </div>
        <div class="right-side">
          <button @click="toggleLoginModal" class="close-btn">&times;</button>
          <div class="modal-body">
            <!-- Conditional rendering based on whether it's login or signup -->
            <form v-if="!showCreateAccount">
              <div class="form-group mb-3">
                <label for="email" class="text">Email</label>
                <input
                  type="email"
                  id="email"
                  class="form-control header-sreach-input"
                  placeholder="Enter your email"
                />
              </div>
              <div class="form-group mb-3">
                <label for="password" class="text">Password</label>
                <input
                  type="password"
                  id="password"
                  class="form-control header-sreach-input"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary gobal-btn main-btn-hover2"
              >
                LOGIN
              </button>
              <button
                type="button"
                @click="showCreateAccount = true"
                class="btn btn-primary gobal-btn-border mt-2"
              >
                Create an account
              </button>
            </form>

            <!-- Show "Hello" message when creating an account -->
            <div v-else>
              <div class="form-group mb-3">
                <label for="email" class="text">Name</label>
                <input
                  type="email"
                  id="email"
                  class="form-control header-sreach-input"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form-group mb-3">
                <label for="email" class="text">Email</label>
                <input
                  type="email"
                  id="email"
                  class="form-control header-sreach-input"
                  placeholder="Enter your email"
                />
              </div>
              <div class="form-group mb-3">
                <label for="password" class="text">Password</label>
                <input
                  type="password"
                  id="password"
                  class="form-control header-sreach-input"
                  placeholder="Enter your password"
                />
              </div>
              <div class="form-group mb-3">
                <label for="password" class="text">Confirm Password</label>
                <input
                  type="password"
                  id="password"
                  class="form-control header-sreach-input"
                  placeholder="Enter your confirm password"
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary gobal-btn main-btn-hover2"
              >
                SignUp
              </button>
              <button
                @click="showCreateAccount = false"
                class="btn btn-primary gobal-btn-border mt-2"
              >
                Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "./sidebar.vue";
export default {
  components: {
    sidebar,
  },
  data() {
    return {
      hasNotification: true,
      isNotificationOpen: false,
      isOpen: false,
      isOpenCAt: false,
      showLoginModal: false, // Control login modal visibility
      showCreateAccount: false, // Tracks if the "Create an account" view is shown
      isProfileOpen: false,
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
    },
    toggleProfile() {
      this.isProfileOpen = !this.isProfileOpen; // Toggle visibility of the profile dropdown
    },
    toggleNotification() {
      this.isNotificationOpen = !this.isNotificationOpen; // Toggle dropdown visibility
    },
    handleClickAnywhere(event) {
      this.closeDropdown(event);
    },

   // Close the dropdown by changing the state
   closeDropdown() {
      this.isProfileOpen = false;
    },

    handleItemClick(event) {
        // Handle click on an item inside the dropdown
        // For example, you can close the dropdown and do something with the selected item
        const selectedItem = event.target;

        // Close the dropdown
        this.closeDropdown();

        // You can do something with the selected item here, for example:
        console.log('Item selected:', selectedItem);
    }
  
  },
  mounted() {
    // Add event listener to handle clicks outside the profile dropdown
    document.addEventListener('click', (event) => this.handleClickAnyWhere(event));
  },
  beforeDestroy() {
    // Clean up the event listener when the component is destroyed
    document.removeEventListener('click', this.handleClickAnyWhere.bind(this));
  },
};
</script>

<style scoped>
@media (min-width: 320px) and (max-width: 1200px) {
  .top-main-header {
    display: none;
  }
  .all-category {
    display: none;
  }
  .bell-message-login {
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 1200px) {
}
</style>

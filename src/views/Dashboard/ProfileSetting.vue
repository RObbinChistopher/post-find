<template>
  <div class="grid sm:grid-cols-[150px_1fr] gap-4 mt-4">
    <div>
      <nav>
        <ul>
          <li>
            <button
              @click="showModule('privacy')"
              :class="{
                'font-bold text-primaryColor': currentModule === 'privacy',
                'text-gray-700/40': currentModule !== 'privacy',
              }"
              class="block py-2 px-4 rounded hover:bg-gray-100"
            >
              Privacy
            </button>
          </li>
          <li>
            <button
              @click="showModule('notification')"
              :class="{
                'font-bold text-primaryColor': currentModule === 'notification',
                'text-gray-700/40': currentModule !== 'notification',
              }"
              class="block py-2 px-4 rounded hover:bg-gray-100"
            >
              Notification
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <div>
      <!-- Privacy Module -->
      <div v-if="currentModule === 'privacy'">
        <div class="w-full border-1 border-primaryColor">
          <div class="border-b border-primaryColor p-4">
            <h1 class="text-xl font-bold">My ads settings</h1>
          </div>
          <div class="flex justify-between py-6 px-4">
            <div><h1 class="font-bold">Show my phone number in ads</h1></div>
            <div class="form-check form-switch">
              <input
                class="form-check-input bg-primaryColor border-2 rounded-full transition-all duration-300 ease-in-out focus:outline-none"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center text-start mt-4">
          <form
            class="flex flex-col w-full py-4 bg-white border-1 border-primaryColor"
          >
            <div class="border-b px-6 border-primaryColor">
              <h1 class="text-2xl font-semibold mb-6">Create Password</h1>
            </div>
            <!-- Password Input -->
            <div class="mb-4 px-4 pt-6">
              <input
                type="password"
                class="w-full p-3 border-1 border-primaryColor rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter password"
              />
              <p class="text-sm text-gray-500/70 mt-2">
                Use a minimum of 8 characters with at least 1 number, 1 special
                character, and 1 letter.
              </p>
            </div>

            <!-- Confirm Password Input -->
            <div class="mb-4 px-4">
              <input
                type="password"
                class="w-full p-3 border-1 border-primaryColor rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm password"
              />
            </div>
            <div class="flex justify-start px-4">
              <!-- Submit Button -->
              <button
                type="submit"
                class="py-3 px-3 bg-primaryColor text-white font-semibold rounded-md hover:bg-primaryColor/90 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Create Password
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- Notification Module -->
      <div v-if="currentModule === 'notification'">
        <div class="w-full border-1 border-primaryColor">
          <div class="border-b border-primaryColor p-4">
            <h1 class="text-xl font-bold">Notifications</h1>
          </div>
          <div
            class="flex justify-between py-6 px-4 border-b border-primaryColor"
          >
            <div>
              <h1 class="font-bold">Special communications & offers</h1>
              <span class="text-sm text-primaryColor/50"
                >Receive updates, offers and more</span
              >
            </div>
            <div class="form-check form-switch">
              <input
                class="form-check-input bg-primaryColor border-2 rounded-full transition-all duration-300 ease-in-out focus:outline-none"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
          <div
            class="flex justify-between py-6 px-4 border-b border-primaryColor"
          >
            <div><h1 class="font-bold">Recommendations</h1>
                <span class="text-sm text-primaryColor/50"
                >Receive recommendations based on your activity</span
              ></div>
            <div class="form-check form-switch">
              <input
                class="form-check-input bg-primaryColor border-2 rounded-full transition-all duration-300 ease-in-out focus:outline-none"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
          <div
            class="flex justify-between py-6 px-4 "
          >
            <div><h1 class="font-bold">Chat Safety Tips</h1>
                <span class="text-sm text-primaryColor/50"
                >Receive safety tips based on your chat activity</span
              ></div>
            <div class="form-check form-switch">
              <input
                class="form-check-input bg-primaryColor border-2 rounded-full transition-all duration-300 ease-in-out focus:outline-none"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentModule: "privacy", // Store the current module to display
    };
  },
  methods: {
    showModule(module) {
      this.currentModule = module; // Set the module to display based on user click
    },
  },
};
</script>

<style scoped>
/* Add any custom styling here if needed */
</style>

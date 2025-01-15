<template>
  <div class="grid md:grid-cols-[300px_1fr] gap-4">
    <div class="flex flex-col gap-6 justify-start items-center mt-8">
      <img
        class="w-48"
        src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
        alt="Profile Picture"
      />
      <div>
        <h1 class="underline text-primaryColor">0 published ads</h1>
      </div>
      <div>
        <button
          class="flex items-center space-x-2 p-2 border-2 border-primaryColor text-primaryColor hover:text-white hover:bg-primaryColor rounded-sm"
        >
          <i class="fa fa-share-alt"></i>
          <!-- Share Icon -->
          <span>Share user profile</span>
        </button>
      </div>
    </div>
    <div>
      <div class="p-4">
        <h2 class="text-4xl font-bold text-primaryColor mb-8">Anas Butt</h2>
        <hr />
        <div class="mt-4">
          <div class="text-primaryColor">Filter by:</div>
          <div class="mt-2 relative flex justify-start">
            <!-- Location selector -->
            <div
              @click="toggleDropdown"
              class="cursor-pointer w-72 h-12 justify-start  overflow-hidden flex items-center space-x-2 px-4 py-2 rounded-sm border-2 border-primaryColor"
            >
              <!-- Location Icon -->
              <i class="fas fa-map-marker-alt  text-primaryColor items-baseline"></i>
              <!-- Font Awesome location icon -->
              <span
                >Location: {{ currentLocation || "Select a location" }}</span
              >
            </div>

            <!-- Location dropdown -->
            <div
              v-if="dropdownVisible"
              class="absolute mt-2 w-48 z-20 bg-white border border-gray-300 rounded-lg"
            >
              <ul class="py-2 ">
                <li
                  v-for="location in locationSuggestions"
                  :key="location"
                  @click="selectLocation(location)"
                  class="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {{ location }}
                </li>
              </ul>
              <button
                @click="getCurrentLocation"
                class="w-full px-4 py-2 bg-primaryColor text-white rounded-b-lg hover:bg-primaryColor/90 mt-2"
              >
                Use Current Location
              </button>
            </div>
          </div>
        </div>

        <!-- Conditional Rendering for Ads -->
        <div v-if="ads.length === 0" class="mt-4">
          <!-- No Ads Found -->
          <div class="flex flex-col items-center justify-center mt-12">
            <img
              src="https://www.olx.com.pk/assets/iconNotFound.3acd1674283d45836f4902bb010ff434.webp"
              alt="No ads"
            />
            <p class="text-primaryColor font-bold text-lg">There are no ads.</p>
            <p class="text-gray-600 text-sm">
              When users post ads, they will appear here.
            </p>
          </div>
        </div>
        <div v-else>
          <!-- Show Ads (Cards) -->
          <div v-for="ad in ads" :key="ad.id" class="mt-4">
            <Card :ad="ad" /> <!-- Replace with your Card component -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../../components/card/show.vue";

export default {
  components: { Card },
  name: "PublicProfile",
  data() {
    return {
      currentLocation: null, // Stores the selected location
      dropdownVisible: false, // Controls visibility of dropdown
      locationSuggestions: [
        "Karachi",
        "Lahore",
        "Islamabad",
        "Peshawar",
        "Quetta",
      ], // Suggested locations
      ads: [], // Stores the ads
    };
  },
  methods: {
    // Toggle the visibility of the location dropdown
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },

    // Select a location from the dropdown
    selectLocation(location) {
      this.currentLocation = location;
      this.dropdownVisible = false;
    },

    // Get the current location using the Geolocation API
    getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // For demonstration purposes, we'll show coordinates
            const { latitude, longitude } = position.coords;
            this.getLocationName(latitude, longitude); // Reverse geocoding
            this.dropdownVisible = false;
          },
          (error) => {
            alert("Unable to retrieve your location.");
          }
        );
      } else {
        alert("Geolocation is not supported by your browser.");
      }
    },

    // Reverse geocoding to get location name from coordinates
    async getLocationName(latitude, longitude) {
      const apiKey = "YOUR_GOOGLE_API_KEY"; // Replace with your Google API key
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
        );
        const data = await response.json();
        if (data.status === "OK" && data.results.length > 0) {
          this.currentLocation = data.results[0].formatted_address; // The human-readable address
        } else {
          this.currentLocation = "Location not found";
        }
      } catch (error) {
        console.error("Error fetching location:", error);
        this.currentLocation = "Error fetching location";
      }
    },

    // Simulate fetching ads (replace with your actual API call)
    fetchAds() {
      // Sample ads data (replace with actual data from an API or database)
      this.ads = [
        { id: 1, title: "Ad 1", description: "Description of Ad 1" },
        { id: 2, title: "Ad 2", description: "Description of Ad 2" },
      ];
    },
  },
  created() {
    // Call the fetchAds method when the component is created to simulate fetching ads
    this.fetchAds();
  },
};
</script>

<style scoped>
/* Custom styles can be added here if needed */
</style>

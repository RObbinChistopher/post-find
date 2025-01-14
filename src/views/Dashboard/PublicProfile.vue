<template>
  <div class="grid grid-cols-[300px_1fr] gap-4">
    <div class="flex flex-col gap-6 justify-center items-center">
      <img
        class="w-48"
        src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
        alt=""
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
      <div class="p-4 rounded-lg shadow-md">
        <h2 class="text-xl font-bold">Anas Butt</h2>
        <div class="mt-4">
          <div class="text-gray-700">Filter by:</div>
          <div class="mt-2">Location: Pakistan</div>
        </div>
        <div class="mt-4">
          <p class="text-sm text-gray-500">Showing 0 - 0 out of 0 Ads</p>
          <p class="text-red-500 font-semibold flex items-center justify-center">
            <i class="fas fa-exclamation-circle text-8xl mr-2"></i>
          </p>
          <p class="text-gray-600 mt-2">
            There are no ads. When users post ads, they will appear here.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicProfile",
};
</script>

<style scoped>
/* Custom styles for the profile */
</style>

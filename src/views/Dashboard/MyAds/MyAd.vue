<template>
    <div class="mt-3">
      <div class="flex-between mt-3">
        <p class="header3">Manage and view your Ads</p>
        <div class="search-container">
          <span class="search-icon"
            ><i class="fa-solid fa-magnifying-glass"></i
          ></span>
          <input type="text" placeholder="Search here..." />
        </div>
      </div>
      <div class="flex-column main-top-margin text-center">
        <div class="flex-gap grid grid-cols-2  sm:grid-cols-3 md:grid-cols-7">
          <div class="text2 filttle-view active">View all (1)</div>
          <div class="text2 filttle-view">Active Ads (1)</div>
          <div class="text2 filttle-view">Inactive Ads (0)</div>
          <div class="text2 filttle-view">Pending Ads (0)</div>
          <div class="text2 filttle-view">Moderated Ads (0)</div>
        </div>
        <p class="text2 mt-3 text-start">
          Heavy discount on Packages
          <span class="active"
            >View Packages <i class="fa fa-angle-right"></i
          ></span>
        </p>
      </div>
      <!--  large screens view -->
      <div class="hidden  border mt-3 md:flex flex-col md:flex-row p-2 justify-start items-start text-start">
        <div>
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAtgMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQMEBQYHAgj/xAA5EAACAQMBAwoEBAUFAAAAAAAAAQIDBBEFBhIxBxMhQVFhcYGRsTJSocEUIjNCJIKy0eEXI0NEcv/EABsBAQACAwEBAAAAAAAAAAAAAAABBQMEBgIH/8QAMREBAAEEAAMFBwMFAQAAAAAAAAECAwQRBRIxBiEyQVETImFxgZHBobHhIzNC0fAU/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDkk8NkbgQ3hZbwkSIhOM1mElJdqYNTHV7AAAAAAAAAAAAAAAAQ2l0t4ImYjqKNW7t6a/PWgvM1rmbj2/FXD3FuuekLWpq9pDhJy8EaFzjmHR0nbNGJcla1Negv06Dfe2aF3tLRH9ujfzlmpwZ85WtTXLmXwRhH6mjc7Q5NXhiI/VmpwrcdVvU1G6qfFWku5dBoXOKZlzrXLLTj26fJbSqzeZOcm+PE1Ju3Kp3MyyxTEeTRNt9o7+8VLTHXlGjSzKW7Jp1OzPgdbi37tzHpprlccFwrVMVX9d8z3NWtb27s5KVrc1qMl106jX3MsVTT0ld12rdzurpifmzdntxtJaJKOpTqJdVVKZmpybkebRu8HwrnWjXyZu05VdXpL+Ks7Wv4Nwf3MsZtfnDQudm8arw1TDN2fKzYzaV5ptej2yhNTX2M1ObT5w0LnZm7HfRXEs7Z8oOzdz/AN7mW+qtBxMsZVufNX3OB5tH+G/kz1prOmXqza39tV/81EzLFymektG5i37fjomPovU0+DPbXMrtAkAAAAAMdq+oOyjFQSdSXDJT8W4lOHTEUR70tnHse1nc9GFqareT/wCVx8DlrnGc25/lr5LCnFtU+S2nXq1PjqSl4s0a792546pn6ssUU09IU/Iw6egnQDQE6AaFO4luUJy7EeqY3KJcp1eo62p15PqlhHXWKeW3TDqeH08mNRHrG/us8GXTc2jdI0bRujSdjQNowE7RjsSAvrTWNTsX/Cahc0l2RqPB7i5XHSWC5i2Lvjoifoztlyh7R2rjv3ca8V1VYJ58zLTlXI81fd4HhV9KdfKXX9lNchtBolDUI0+blPMakM53ZLjjuLK1ci5RzOMz8ScTIqtTO9fszBlaYAAAYPaWH6FTxizlu0lv+3c+cLDBq8UMGcrpYBOgGgJ0A0A0gJ0LPVqnNWM5eRnx6d3IhExvucrqfnqTl80m/VnVxGo07GiOWmI9Ij9nnBL1tGAbGgnby0QnZgaNowNG0YGk7MEG3deTW0/DbHWHbVUqrz3suManVqHAcaue0zq/h3fZtRnVQAAAYzaCnv2G98k0/t9yl4/b5sPm9Jj/AF+W1h1au69WtHE6WoToBoBoCdAToBoYTaqtzemyXW0zewKN3oZcejnvUU/FzvB0c9XVbMA2jANmCE7RgGzATtGAbQ0E7RLKjJpcEQmH0fo1orHSLGzXSqFCFPPbiKReURqmIfM8m57W9Xc9ZmV6emEAAALbUYc7ZVoLi4M1M+17XGro9Ylks1ctyJagfPYjuXYNATpANAToBoBoaptrVXNwp54tFvwyj3plu8Op3f36Q0/BcugRgGzdCdo3SDZuhO0YBtGAnZgG1/s/au817TrZfvuIZ8E8v6Jnq3G64a+Xd9nj3K/hP+vy+h1wLp85SAAAAPM0mnF9aweao3Ewb00urHcqTg+MZNHzq5Ry11U+kzC9pndMS8njSdhOjYNGwnRsGkPMppcfQ8zVEJiNtG2rrOrdpdjZe8Mp/pzK04ZT4qvkweCzW0SjA0bMEaTtGBo2jA0naMDRswE7RjuZBts/JpbxuNrrdvpVCnOq+7ox7s2MWN3FXxq5NGFV8dR/32dsXAtHEJAAAAENAanq1PmtRrpcHLe9Vn3ycLxK3yZdcfX7/wDSt8erdqFoaWmYGgJiEIk1FdJEzEdUxG1KdXPw9Bhqub6PfKpSeE2+o8R3y9NE1afOXs32HW4VHLZhbYEas79Vlg2m7tG6Dby0o/FJIhMfBSnXox41I+TG3uKapUpXlJfCpPywRzPcWp81KV6/2015sjme4tfF4lc1ZdaXgiNvUW6YUpTnL4pN+YeoiIdJ5E7RSvdUvZRxuUoUovt3nl/0o3cKO+Zcz2lu+5bt/OXW1wRYOShIAAAAAa5tDT3byE/nh7HKcct6v01esftP8rHEn3JhiymbZw4gUp1cdEenvMNV2OkPcUqLk5dLMMzM9XuIQQlRu57ltOXYj3bjdUQ8z0c2u9Ti69TFN53mst44HYW/doiHRY2Py2qYmfJay1Cq/hUY/U9czaizT5qM7mtPjUl5dBG5e4t0x5KTbfFt+LD3oIAAAAEjtfI5aKlsrOu103FxKXpiP2LPEjVtxPaG5zZfL6R/LfDaUQAAAAAGG2jhmjSqdk8eq/wUXHaN26KvSdfduYc+9MNdnVjHvZy1dyKeiyilRnOUuL8jXqqmp7iNPGTykAjIGP16vzGn1JdzZtYlPNdiExTzzFPq5YuB1MuvCAAAAAACQkA+idhLX8HsjpdJ8XQjN/zfm+5c2I1bh864lc9pl3J+LPGVogAAAAAYzaGnv6XWxxhiS9Ss4xb58Ov4an9Wxizq7DTcnBrpGSBOQGQIySNd20r83pklnpl0epZcNo3d22cKnmyKYc/Ogl0wQATsBsBsBsBsA90KU7ivToUlmdWahHxbwj1TG50iuqKaZqnpD6gtqUaFvTo01iFOKhFdiSwXcRqNPl9VU11TVPmqkoAAAAAAt7ynzttWpv8AdBr6GHItxctVUT5xL3bnlriWgvo6HxPm0xqdL9ADIEZAlMDTNu6yfNUk+Mmy74XR1lY8Lp3dqq9IagW69ABAAAASAAbZ/YS0/G7XaZSccxjWVR9270+6RmsRu5DQ4pd9nh3J+Gvu+iYlw+epAAAAAABGEBz+/p8zeV6fy1GvqfOsu37O/XT6TK+tVc1uJW+TWZDIACAOe7Y1uc1NR+WPudHw+nVra54VTqiqr1n9mBN5apAAAAAAAIG98jtrz+1FWvwVvbSfq0v7m5iU7r2ou0Fzlxop9Zh22JZOLhISAAAAAAA0naSm6erVX1TipL0x9jiONW+TMqn11P4XGHVu1DFlQ2wkAIb6GSOZ7RKS1WtveR0+J32Y0vuHTHsI16yxhst4INgAABISAAOtciFpu2uq3reVOpCiu7dTb/qXoWGHT3TLlO0dz37dv0iZ/H4dPN1zQAAAAAAABqu19PFehVS6HFxbOX7QW/eor+cLLAq7ppa6c0sU93WTo2Zw8DQQTnLdgnKXyxWWeqbdVc6pjcomYjqt7zZGrqrUpWc89slu+5bYuPnR4aJ+vd+7zTmU2J3TXqVr/pRc1uFxCh4yyXNrFy58eoZI4/VT8f0K/JBdxpJ0dYoTn1xnQcV6pv2Nz/x1erLR2jp3qq3+v8Qwt5yZbSW7lzVO3uIrhzdXDfkzHVi3IbtvjuJX13H0YK92a1yxz+K0m8glxkqTkvVZRhm1XHWG9bzsa54a4+7E5XW8eJ41La2eBCUg2gHTvd55KbR2mx9s2kpV5zqvvTeF9EWuLGrbhuN3OfMqj07m4mwqQAAAAAAACy1TTqeo2zpVJOMk8xml8LNPNwqMu1yVd3pLLZvTaq5oYOGys8/7l5FLP7afT7lHT2dnffc/T+W7PEI8qV7R2ZsYfqSrVPGWPY3rfAsWnxbliqzrs9O5fUdI0+j8FrT/AJlk3rfD8W34aIYKsi7V1ldwpwpx3acVGPZFYRtU0U0xqIYpmZ6vW6ekGAJAjADAFvd6fZ3sd28taNddlWmpe5E0xPWHui7co8NUwwd7sHs1eJ7+l06bfF0W4P6GKbFufJu2+K5lHSufqwF/yS6PV3nZ3t5bSfBNqcV69P1Mc4lE9G9b7QZFPdVTEsVS5IKiuI87rMZUOMty3xJru/M0jHGH398tqrtH7vu2+/5uoafZ0NPs6Npaw3KNGChCPYkbsRERqHNXLlVyua6p75XJLwAAAAAAAAAIwgJAAAAAAAAAAAACMICQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k="
            alt=""
          />
        </div>
        <div class="w-full">
          <div class="flex justify-start gap-4 items-center md:justify-between">
            <h1>hen of colder <span class="text-xs">- Hens </span></h1>
            <button>...</button>
          </div>
          <div class="flex flex-row items-center gap-4">
            <h1 class="border-e-2 pe-2 md:pe-16">Rs:2000</h1>
            <h1 class="border-e-2 pe-2 md:pe-16">Active from 6 Jan to 5 Feb</h1>
            <span class="p-2 bg-[#517472] text-white rounded-md">Active</span>
          </div>
          <div class="flex flex-col md:flex-row justify-between mt-2 gap-2">
            <ul class="flex flex-row  gap-4 text-center items-center">
              <li class="flex gap-2">
                <i class="bi bi-eye"></i>
                <span class="flex flex-col"
                  ><h1>36</h1>
                  views</span
                >
              </li>
              <li class="flex gap-2">
                <i class="bi bi-telephone"></i>
                <span class="flex flex-col"
                  ><h1>0</h1>
                  Phone</span
                >
              </li>
              <li class="flex gap-2">
                <i class="bi bi-chat"></i>
                <span class="flex flex-col"
                  ><h1>0</h1>
                  chats</span
                >
              </li>
            </ul>
            <div class="flex flex-col md:flex-row gap-4">
              <button class="px-12 border text-xs lg:text-sm border-[#517472] hover:text-white hover:bg-[#517472]">Edit</button>
              <button class="px-12 border text-xs lg:text-sm bg-[#517472] text-white hover:bg-[#517472]/90">Sell faster now</button>
            </div>
          </div>
        </div>
      </div>
  <!-- small screen view -->
  <div class="container mx-auto py-6">
      <!-- Parent div: grid layout with responsive columns -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <!-- Loop over the card data using v-for -->
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="md:hidden border mt-5 flex flex-col gap-6 p-6 rounded-lg shadow-lg bg-white"
        >
          <div class="w-full text-center">
            <img
              class="rounded-xl shadow-md w-full h-[300px] mx-auto"
              :src="card.image"
              :alt="card.altText"
            />
          </div>
          <div class="text-start">
            <div class="flex gap-4 items-center justify-between">
              <h1 class="text-lg font-bold">{{ card.title }} <span class="text-xs">- Hens</span></h1>
            </div>
            <div class="flex flex-col gap-2 mt-2">
              <div class="flex gap-2 text-md justify-between items-center">
                <h1 class="font-bold text-lg">{{ card.price }}</h1>
                <span
                  class="px-4 py-1 text-[#5B7B7F] border-2 border-[#5B7B7F] rounded-md text-xs font-semibold"
                  >{{ card.status }}</span
                >
              </div>
              <div class="text-sm text-gray-400">{{ card.activePeriod }}</div>
            </div>
          </div>
          <div class="flex gap-2 item-center justify-start">
            <ul class="flex gap-6 text-center text-xs font-medium">
              <li class="flex flex-col items-center gap-2">
                <i class="bi bi-eye text-xs"></i>
                <span>{{ card.views }}</span>
              </li>
              <li class="flex flex-col items-center gap-2">
                <i class="bi bi-telephone text-xs"></i>
                <span>{{ card.calls }}</span>
              </li>
              <li class="flex flex-col items-center gap-2">
                <i class="bi bi-chat text-xs"></i>
                <span>{{ card.chats }}</span>
              </li>
            </ul>
          </div>
          <div class="flex gap-4 justify-between items-center">
            <button class="py-2 px-4 text-xs sm:text-sm rounded-md border border-[#5B7B7F] hover:bg-[#5B7B7F] hover:text-white">
              Edit
            </button>
            <button class="py-2 px-4 text-xs sm:text-sm rounded-md bg-[#5B7B7F] text-white hover:bg-[#5B7B7F]/90">
              Sell Faster Now
            </button>
          </div>
        </div>
      </div>
    </div>
  
  
  
  
    </div>
  </template>
  <script>
  export default {
    name: 'App',
    data() {
      return {
        // Data for the cards
        cards: [
          {
            image: 'data:image/png;base64,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',
            altText: 'Hen of Colder Image',
            title: 'Hen of Colder',
            price: 'Rs: 2000',
            status: 'Active',
            activePeriod: 'Active from 6 Jan to 5 Feb',
            views: 36,
            calls: 0,
            chats: 0
          },
          {
            image: 'data:image/png;base64,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',
            altText: 'Hen of Warmth Image',
            title: 'Hen of Warmth',
            price: 'Rs: 1500',
            status: 'Inactive',
            activePeriod: 'Inactive from 3 Jan to 10 Jan',
            views: 95,
            calls: 30,
            chats: 12
          }
        ]
      };
    }
  };
  </script>
  <style>
  .search-container {
    display: flex;
    align-items: center;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    width: 300px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .search-container .search-icon {
    font-size: 20px;
    color: #888;
    margin-right: 10px;
  }
  
  .search-container input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 16px;
  }
  
  .filttle-view {
    border: 2px solid #ced4da;
    padding: 5px 17px;
    border-radius: 20px;
  }
  .main-top-margin {
    margin-top: 2rem;
  }
  .active {
    background-color: #ebf1ff;
    color: #3a77ff;
    font-weight: 800;
    border: 2px solid #3a77ff;
  }
  </style>
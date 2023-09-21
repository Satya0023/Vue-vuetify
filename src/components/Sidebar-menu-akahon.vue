<template  >
  <div class="sidebar" :class="isOpened ? 'open' : ''" :style="cssVars">
    <div class="logo-details" style="margin: 6px 14px 0 14px">
      <v-icon style="color: #8A2BE2;">mdi-alpha-m-circle</v-icon>

      <img v-if="menuLogo" :src="menuLogo" alt="menu-logo" class="menu-logo icon">
      <i v-else class="bx icon" :class="menuIcon" />
      <div class="logo_name">
        {{ menuTitle }}
      </div>
      <i class="bx" id="btn" @click="isOpened = !isOpened" />
    </div>

    <div style="
          display: flex;;

          flex-direction: column;
          justify-content: space-between;
          flex-grow: 1;
          max-height: calc(100% - 60px);
        ">

      <div id="my-scroll" style="margin-left: 0%;">
        <ul class="nav-list">
          <div>


            <li> <a><v-icon> mdi-home</v-icon> Dashboard</a></li>




          </div>

          <v-divider></v-divider>
          <li> <a><v-icon> mdi-email-open-heart-outline</v-icon> Email</a></li>
          <li> <a><v-icon> mdi-message-outline</v-icon> Chat </a></li>
          <li><a> <v-icon> mdi-calendar-month</v-icon> Calender </a></li>
          <li><a> <v-icon> mdi-receipt-text-check-outline</v-icon>Invoice</a> </li>
          <li> <a><v-icon> mdi-account-multiple-check</v-icon> User</a></li>
          <li> <a><v-icon> mdi-form-select</v-icon> Form Layout</a></li>


        </ul>


      </div>


    </div>
  </div>
</template>

<script>

export default {


  name: 'SidebarMenuAkahon',
  props: {
    //! Menu settings

    isMenuOpen: {
      type: Boolean,
      default: false,
    },


    menuTitle: {
      type: String,
      default: 'MATERIO',
    },
    menuLogo: {
      type: String,
      default: '',
    },
    menuIcon: {
      type: String,
      icon: "mdi-alpha-m-circle"
    },


    //! Menu items
    menuItems: {
      type: Array,
      default: () => [



      ],
    },



    //! Styles
    bgColor: {
      type: String,
      default: '#F8F8FF',

    },
    secondaryColor: {
      type: String,
      default: '#DCDCDC',
    },
    homeSectionColor: {
      type: String,
      default: '#e4e9f7',
    },
    logoTitleColor: {
      type: String,
      default: '#8A2BE2',
    },
    iconsColor: {
      type: String,
      default: '#000000',
    },
    itemsTooltipColor: {
      type: String,
      default: '#e4e9f7',
    },

    menuItemsHoverColor: {
      type: String,
      default: '#9400D3',


    },
    menuItemsTextColor: {
      type: String,
      default: '#000000',
    },
    menuFooterTextColor: {
      type: String,
      default: '#fff',
    },
  },
  data() {
    return {
      isOpened: false,
    }
  },

  computed: {
    cssVars() {
      return {
        // '--padding-left-body': this.isOpened ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody,
        '--bg-color': this.bgColor,
        '--secondary-color': this.secondaryColor,
        '--home-section-color': this.homeSectionColor,
        '--logo-title-color': this.logoTitleColor,
        '--icons-color': this.iconsColor,
        '--items-tooltip-color': this.itemsTooltipColor,
        '--serach-input-text-color': this.searchInputTextColor,
        // '--menu-items-hover-color': this.menuItemsHoverColor,
        '--menu-items-text-color': this.menuItemsTextColor,

        '--menu-footer-text-color': this.menuFooterTextColor,
      }
    },
  },

  methods: {


  },
}
</script>

<style>
/* Google Font Link */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
@import url('https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  opacity: 100;
}

li:hover {
  background: linear-gradient(90deg, rgb(192, 170, 214) 10%, rgb(147, 97, 197), rgb(160, 73, 247));
  border-radius: 30px 150px 150px 30px;

}


body {
  transition: all 0.5s ease;
  background-color: #FFFFFF;
  color: 9155FD;
}

.menu-logo {
  width: 30px;
  margin: 0 10px 0 10px;
}


.sidebar {


  display: block;
  width: 100%0%;
  height: 100%;
  cursor: pointer;

  position: relative;

  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  min-height: min-content;
  /* overflow-y: auto; */
  width: 78px;
  background: var(--bg-color);
  /* padding: 6px 14px 0 14px; */
  z-index: 99;
  transition: all 0.5s ease;

}

.sidebar.open {
  width: 150px;
}

.sidebar .logo-details {
  height: 60px;
  display: flex;
  align-items: left;
  position: relative;
}

.sidebar .logo-details .icon {
  opacity: 0;
  transition: all 0.5s ease;

}


.sidebar.open .logo-details .icon,
.sidebar.open .logo-details .logo_name {
  opacity: 4;
}

.sidebar .logo-details #btn {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 22px;
  transition: all 0.4s ease;
  font-size: 23px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease;
}

.sidebar.open .logo-details #btn {
  text-align: right;
}

.sidebar i {
  color: var(--icons-color);
  height: 60px;
  min-width: 50px;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
}

.sidebar .nav-list {
  margin-top: 20px;
  margin-left: 10px;
  /* margin-bottom: 60px; */
  /* height: 100%; */
  /* min-height: min-content; */
}

.sidebar li {
  position: relative;
  margin: 8px 0;
  list-style: none;
}








.ul {
  background: var(--menu-items-hover-color);
  background: var(--bg-color)
}

.li:hover {
  background: var(--menu-items-hover-color);
  background: var(--bg-color)
}

.li {
  margin-left: 0%;
}







#my-scroll::-webkit-scrollbar {
  display: none;

}
</style>
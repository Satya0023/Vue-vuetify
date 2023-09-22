<template  >
  <div class="sidebar" :class="{ open: isOpened }" :style="cssVars" @mouseenter="isOpened = true"
    @mouseleave="isOpened = false">

    <div class="logo-details" style="margin: 6px 14px 0 14px">
      <v-icon style="color: #8A2BE2;">mdi-alpha-m-circle</v-icon>

      <div style="display: flex; align-items: center; cursor: pointer;">
        <label class="logo_name">{{ menuTitle }}</label>

        <input style="margin-left: 50px; size: 10px;" type="radio" />

      </div>

    </div>

    <div style="margin-left: 0%;
          display: flex;;


          justify-content: space-between;
          flex-grow: 1;
          max-height: calc(100% - 60px);
        ">

      <div id="my-scroll" style="margin-left: 0%;">
        <ul class="nav-list">


          <li @mouseenter="dashboardOpen = true" @mouseleave="dashboardOpen = false" @click="toggleBackground('li')" Added
            click handler :class="{ clicked: liClicked }">
            <a @click="toggleDashboardSubMenu" :class="{ 'active-link': dashboardClicked }">
              <v-icon class="navbar-icon">mdi-home</v-icon>
              Dashboard
              <v-icon style="color: red;">mdi-new-box</v-icon>
              <span style="margin-left: -20px;">
                <v-icon class="arrow-icon" :color="dashboardOpen ? 'primary' : ''">
                  {{ dashboardOpen ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                </v-icon>
              </span>
            </a>

            <ul class="sub-menu" v-if="dashboardOpen" @click="toggleBackground('ul')" :class="{ 'clicked': liClicked }">
              <!-- Added click handler -->

              <li> <a><v-icon>
                    mdi-circle-outline</v-icon> CRM</a></li>
              <li> <a> <v-icon>
                    mdi-circle-outline</v-icon> Analytics </a></li>
              <li><a> <v-icon>
                    mdi-circle-outline</v-icon> eCommerece </a></li>
            </ul>
          </li>
          <v-divider> </v-divider>
          <li> <a><v-icon> mdi-email-open-heart-outline</v-icon> Email</a></li>
          <li> <a><v-icon> mdi-message-outline</v-icon> Chat </a></li>
          <li><a> <v-icon> mdi-calendar-month</v-icon> Calender </a></li>



          <li @mouseenter="invoiceOpen = true" @mouseleave="invoiceOpen = false" :class="{ clicked: invoiceClicked }">
            <a @click="toggleInvoiceSubMenu">
              <v-icon class="navbar-icon">mdi-receipt</v-icon>
              INVOICE

              <span style="margin-left: 10px;">
                <v-icon class="arrow-icon" :color="invoiceOpen ? 'primary' : ''">
                  {{ invoiceOpen ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                </v-icon>
              </span>
            </a>
            <ul class="sub-menu" v-if="invoiceOpen" @click="toggleBackground('ulInvoice')"
              :class="{ 'clicked': invoiceClicked }">
              <li><a><v-icon> mdi-circle-outline</v-icon> List</a></li>
              <li><a><v-icon> mdi-circle-outline</v-icon> Preview</a></li>
              <li><a><v-icon> mdi-circle-outline</v-icon>Edit</a></li>
              <li><a><v-icon> mdi-circle-outline</v-icon> Add</a></li>
            </ul>
          </li>


          <li> <a><v-icon> mdi-account-multiple-check</v-icon> User</a></li>
          <li> <a><v-icon> mdi-form-select</v-icon> Form Layout</a></li>


        </ul>


      </div>

    </div>
  </div>
</template>

<script>
import { VIcon } from 'vuetify/lib';
export default {


  computed: {
    sidebarStyles() {
      return {
        '--sidebar-margin-left': this.isOpened ? '0' : '-200px', // Add this CSS variable
      };
    },
  },

  components: {
    VIcon,
  },
  name: 'SidebarMenuAkahon',
  props: {
    //! Menu settings
    menuTitle: {
      type: String,
      default: 'MATERIO',
    },

    menuIcon: {
      type: String,
      icon: "mdi-alpha-m-circle"
    },


    //! Menu items

    //! Styles
    bgColor: {
      type: String,
      default: '#F8F8FF',

    },


    logoTitleColor: {
      type: String,
      default: '#8A2BE2',
    },


  },
  data() {
    return {
      isOpened: false,
      dashboardOpen: false,
      dashboardClicked: false, // Track clicked state for Dashboard
      invoiceOpen: false,
      liClicked: false,
      invoiceClicked: false,
    };
  },
  computed: {
    cssVars() {
      return {
        // '--padding-left-body': this.isOpened ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody,
        '--bg-color': this.bgColor,
        '--secondary-color': this.secondaryColor,
        '--home-section-color': this.homeSectionColor,
        '--logo-title-color': this.logoTitleColor,

        '--items-tooltip-color': this.itemsTooltipColor,
        '--serach-input-text-color': this.searchInputTextColor,
        // '--menu-items-hover-color': this.menuItemsHoverColor,
        '--menu-items-text-color': this.menuItemsTextColor,

        '--menu-footer-text-color': this.menuFooterTextColor,
      }
    },
  },

  methods: {
    toggleDashboardSubMenu() {
      // Toggle the dashboardOpen property on click
      this.dashboardOpen = !this.dashboardOpen;
      this.dashboardOpen = !this.dashboardOpen;
      this.liClicked = !this.liClicked;

    },

    toggleInvoiceSubMenu() {
      // Define the behavior for toggling the Invoice submenu here
      this.invoiceOpen = !this.invoiceOpen;
      this.invoiceClicked = !this.invoiceClicked;
    },
    handleSidebarMouseLeave() {
      // Close the sub-menu when the mouse leaves the sidebar
      this.dashboardOpen = false;
    },
  },

}
</script>

<style>
.active-link {
  background-color: blueviolet;
  /* Change this color as needed */
  color: #fff;
  /* Change text color for active link */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  opacity: 100;
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

  margin-left: var(--sidebar-margin-left);
  transition: margin-left 0.5s ease;
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
  overflow-y: auto;
  width: 80px;
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
  opacity: 1 !important;
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
  margin-top: 10px;
  margin-left: 5px;


}

.sidebar li {
  position: relative;
  margin: 8px 0;
  list-style: none;
}


#my-scroll::-webkit-scrollbar {
  display: none;

}

/* Rotate the arrow icon when the sub-menu is open */
.arrow-icon.open {
  transform: rotate(180deg);

}
</style>





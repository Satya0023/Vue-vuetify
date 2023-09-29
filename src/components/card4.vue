<template>
  <v-card class="vertical-divider-card" style="margin-top: 5px; height: 400px;">
    <v-row>
      <label class="title">Total profit</label>
      <label class="amount">$482.85k</label>
      <a class="icon"><v-icon>mdi-dots-vertical</v-icon></a>
      <label class="balance">Last month balance $234.40k</label>

      <!-- Left Section -->
      <v-col cols="5">
        <div class="chart-container">
          <canvas ref="myChart"></canvas>
        </div>


      </v-col>

      <!-- Vertical Divider -->
      <v-divider vertical class="divider-80"></v-divider>

      <!-- Right Section -->
      <v-col style="margin-left: 50px;">
        <table style="margin-top: 10px; margin-left: 3px;">
          <tbody>
            <tr>
              <td><b-icon icon="graph-up" id="bicon"></b-icon></td>
              <td>
                $48,568.20
                <p>Total Profit</p>
              </td>
            </tr>
            <tr>
              <td><v-icon large class="account">mdi-account-outline</v-icon></td>
              <td>
                $38,453.25
                <p>Total income</p>
              </td>
            </tr>
            <tr>
              <td><v-icon large class="dollar">mdi-currency-usd</v-icon></td>
              <td>
                $2,453.45
                <p>Total Expense</p>
              </td>
            </tr>
          </tbody>
        </table>
        <v-btn id="button">View Report</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { ref, onMounted, beforeUnmount } from 'vue';
import { Chart, CategoryScale, LinearScale } from 'chart.js';

Chart.register(CategoryScale, LinearScale);

export default {
  data() {
    return {

      chart: null,
      chartData: {
        labels: ["2016 ", "2017", "2018", "2019", "2020"],
        datasets: [
          {
            label: "Upper Section",
            data: [10, 12, 5, 2.5, 5],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            borderRadius: {
              topLeft: 10, // Adjust as needed
              topRight: 10, // Adjust as needed
              bottomLeft: 0,
              bottomRight: 0,
            },
          },
          {
            label: "Lower Section",
            data: [-9, -15, -10.5, -10, -10],
            backgroundColor: "#8a2be2",
            borderColor: "#8a2be2",
            borderWidth: 1,
            borderRadius: {
              topLeft: 0,
              topRight: 0,
              bottomLeft: 10, // Adjust as needed
              bottomRight: 10, // Adjust as needed
            },
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  },
  mounted() {
    this.calculateChartHeight();
    window.addEventListener('resize', this.calculateChartHeight);
    this.renderChart();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.calculateChartHeight);
  },
  methods: {
    calculateChartHeight() {
      const chartContainer = document.querySelector('.chart-container');
      if (chartContainer) {
        const chartHeight = chartContainer.clientHeight;
        this.chartHeight = chartHeight;
      }
    },
    renderChart() {
      const ctx = this.$refs.myChart.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: this.chartData,
        options: this.options,
      });
    },
  },
};
</script>

<style>
.chart-container {


  width: 100%;
  height: 300px;

}

#button {
  background-color: blueviolet;
  width: 250px;
  color: aliceblue;
  margin-top: 28px;
}

.title {
  font-size: xx-large;
  margin-left: 50px;
  margin-top: 10px;
}

.amount {
  margin-left: 240px;
  font-size: x-large;
  margin-top: 5px;
}

.icon {
  margin-left: 140px;
}

.balance {
  margin-left: 380px;
  font-size: small;
}

.divider-80 {
  height: 100%;
  top: 0px;
  left: 50%;
  position: absolute;
}

.account {
  color: blueviolet;
  background-color: rgb(215, 220, 224);
  border-radius: 8px;
  width: 35px;
  height: 35px;
}

.dollar {
  background-color: rgb(211, 208, 208);
  border-radius: 8px;
  width: 35px;
  height: 35px;
}

#bicon {
  color: rgb(147, 238, 147);
  background-color: rgb(222, 238, 222);
  width: 35px;
  height: 35px;
  border-radius: 8px;
}
</style>

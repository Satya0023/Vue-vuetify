


<template>
  <v-card class="vertical-divider-card" style=" margin-top: 5px ; height: 400px;">
    <v-row>
      <label class="title">Total profit</label>
      <label class="amount">$482.85k</label>
      <a class="icon"><v-icon>mdi-dots-vertical</v-icon></a>
      <label class="balance">Last month balance $234.40k</label>
      <!-- Left Section -->
      <v-col>

        <div style="margin-left: 10px;">


          <svg :width="chartWidth" :height="chartHeight">

            <text x="10" y="15" text-anchor="middle" font-size="10" fill="black">Y-Axis</text>

            <!-- X-axis label -->
            <text x="250" y="290" text-anchor="middle" font-size="10" fill="black">X-Axis</text>

            <!-- Y-axis values -->
            <g v-for="gridY in gridYPositions" :key="gridY">
              <text x="5" :y="gridY + 5" text-anchor="end" font-size="8" fill="black">{{ gridY }}</text>
            </g>

            <!-- X-axis values -->
            <g v-for="(dataPoint, index) in data" :key="index">
              <text :x="barPositions[index] + barWidth / 2" :y="chartHeight + 10" text-anchor="middle" font-size="8"
                fill="black">{{ dataPoint }}</text>
            </g>





            <!-- Draw faint dotted horizontal lines (gridlines) -->
            <g v-for="gridY in gridYPositions" :key="gridY">
              <line :x1="0" :y1="gridY" :x2="chartWidth" :y2="gridY" stroke="#ccc" stroke-dasharray="2,2" />
            </g>

            <!-- Create bars for each data point -->
            <g v-for="(dataPoint, index) in data" :key="index">
              <!-- First segment of the bar (top half) -->
              <rect :x="barPositions[index]" :y="chartHeight - dataPoint * scaleFactor" :width="barWidth"
                :height="(dataPoint * scaleFactor) / 2" fill="orange" :rx="barCornerRadius" :ry="barCornerRadius" />
              <!-- Second segment of the bar (bottom half) -->
              <rect :x="barPositions[index]" :y="chartHeight - (dataPoint * scaleFactor) / 2" :width="barWidth"
                :height="(dataPoint * scaleFactor) / 2" fill="blueviolet" :rx="barCornerRadius" :ry="barCornerRadius" />
            </g>
          </svg>
        </div>

      </v-col>

      <!-- Vertical Divider -->
      <v-divider vertical class="divider-80"></v-divider>

      <!-- Right Section -->
      <v-col style="margin-left: 40px; ">
        <!-- <div class="container"> -->

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
        <v-btn id="button">

          View Report
        </v-btn>


      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      chartWidth: 250, // Doubled to 220 pixels
      chartHeight: 280, // Doubled to 400 pixels
      data: [20, 40, 60, 40, 50, 45, 35, 40, 50], // Your data points
      barWidth: 10, // Adjusted to fit within the doubled chartWidth
      barSpacing: 15, // Adjusted to fit within the doubled chartWidth
      scaleFactor: 4, // Doubled to adjust for the larger chart
      barCornerRadius: 20, // Adjusted as needed
      gridYPositions: [40, 80, 120, 160, 200, 252], // Doubled Y-axis gridline positions
    };
  },
  computed: {
    totalWidth() {
      return this.data.length * (this.barWidth + this.barSpacing);
    },
    barPositions() {
      return this.data.map((_, index) => (index * (this.barWidth + this.barSpacing)) + (this.chartWidth - this.totalWidth) / 2);
    },
  },
};

</script>

<style >
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

.container {
  padding: 10px;

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

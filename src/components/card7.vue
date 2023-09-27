<template>
    <div style="background-color:#F8F8FF;">
        <v-container
            style="width: 370px; height: 400px; background-color:#F8F8FF; box-shadow: none; margin: 0; padding: 0; color: transparent;">

            <!-- Two smaller cards below -->
            <v-row>
                <v-col>
                    <v-card style="width: 170px;">
                        <v-card-title>
                            <v-avatar color="red" size="32">
                                <v-icon dark color="white">mdi-truck-minus</v-icon>
                            </v-avatar>
                            <a><v-icon style="margin-left: 80px;">mdi-dots-vertical</v-icon></a>
                        </v-card-title>

                        <v-card-actions>
                            Logistics
                        </v-card-actions>
                        <v-card-actions>
                            <label style="font-size: large;"> 95.2 k</label>
                            &nbsp;
                            &nbsp;
                            <label style="color: green;"> +12 %</label>
                        </v-card-actions>
                        <v-card-text>
                            <label>Revenue Increase</label>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col>
                    <v-card style="width: 175px;">
                        <v-card-title>
                            <v-avatar color="orange" size="32">
                                <v-icon dark color="white">mdi-check</v-icon>
                            </v-avatar>
                            <a href="" style="margin-left: 80px;"><v-icon>mdi-dots-vertical</v-icon></a>
                        </v-card-title>

                        <v-card-actions>
                            Revenue
                        </v-card-actions>
                        <v-card-actions>
                            <label style="font-size: large;"> 268</label>
                            &nbsp;
                            &nbsp;
                            <label style="color: red;"> -12 %</label>
                        </v-card-actions>
                        <v-card-text>
                            <label>System Bugs</label>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-divider></v-divider>

            <!-- Large card at the bottom -->
            <div class="card-container">
                <!-- Card content -->
                <v-card class="my-card" width="370px" style="height: 196px; margin: 0;">
                    <v-card-title>
                        <label>Transactions</label>
                        <label style="margin-left: 160px;"><a><v-icon>mdi-dots-vertical</v-icon></a></label>
                    </v-card-title>

                    <v-card-actions>
                        <v-card-item>
                            <v-card-text>
                                <p>48% new visitors this week</p>
                                <v-card-actions>
                                    <label style="font-size: large; color: rgb(65, 57, 57);">25,980</label>
                                    <v-icon style="color: green;">mdi-chevron-up</v-icon>
                                    <label style="color: green;">38%</label>
                                </v-card-actions>
                            </v-card-text>
                        </v-card-item>

                        <div style="margin-left: 50px; margin-top: 0px;">
                            <svg :width="chartWidth" :height="chartHeight">
                                <!-- Create the focused bar -->
                                <rect :x="barPositions[middleBarIndex]"
                                    :y="chartHeight - data[middleBarIndex] * scaleFactor" :width="barWidth"
                                    :height="data[middleBarIndex] * scaleFactor" fill="blueviolet" :rx="barCornerRadius"
                                    :ry="barCornerRadius" />

                                <!-- Create the blurred bars -->
                                <template v-for="(dataPoint, index) in data">
                                    <rect v-if="index !== middleBarIndex" :key="index" :x="barPositions[index]"
                                        :y="chartHeight - dataPoint * scaleFactor" :width="barWidth"
                                        :height="dataPoint * scaleFactor" fill="#8a2be2" :rx="barCornerRadius"
                                        :ry="barCornerRadius" />
                                </template>
                            </svg>
                        </div>
                    </v-card-actions>
                </v-card>
            </div>
        </v-container>
    </div>
</template>

<style>
.blur-filter {
    filter: blur(1px);
    /* Adjust the blur radius as needed */
}

.my-card {
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
}

.progress {
    position: relative;
    margin: 4px;
    float: right;
    text-align: center;
}

.barOverflow {
    position: relative;
    overflow: hidden;
    width: 90px;
    height: 45px;
    margin-bottom: -14px;
}

.bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 5px solid #eee;
    border-bottom-color: blueviolet;
    border-right-color: blueviolet;
}

svg {
    overflow: visible;
}
</style>

<script>
import donougtChart from './donougtChart.vue';
export default {
    name: 'MyVueComponent',
    components: {
        donougtChart,
    },
    data() {
        return {
            data: [8, 5, 8, 12, 6, 10], // Sample data for the bars
            chartWidth: 150, // Width of the chart
            chartHeight: 100, // Height of the chart
            barWidth: 10, // Width of each bar
            barSpacing: 15, // Spacing between bars
            scaleFactor: 8, // A scaling factor for the bar heights
            barCornerRadius: 3,
            middleBarIndex: 0,
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

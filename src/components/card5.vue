<template>
    <div style="background-color:#F8F8FF;">
        <v-container
            style="width: 420px; height: 400px;   background-color:#F8F8FF; box-shadow: none; margin: 0; padding: 0; color: transparent;">
            <!-- Large card at the top -->
            <div style="margin-left: 270px;  margin-top: 35px; position: absolute; z-index: 5; ">
                <donougtChart />

            </div>
            <v-card class="my-card" width="450px"
                style="height: 170px; margin-top: 0px; margin-left:0px; margin-right: 0px;">
                <!-- Content for the large card -->


                <!-- Card content -->
                <v-card-title class="card-title">
                    Total Sales
                </v-card-title>
                <v-card-actions>

                </v-card-actions>
                <v-card-text>
                    <label>Calculated in the last 7 days</label>
                    <v-card-actions>
                        <label style="font-size: x-large; color: rgb(65, 57, 57);">$25,980</label>
                        <v-icon style="color: green;">mdi-chevron-up</v-icon>
                        <label style="color: green;"> +38 %</label>
                    </v-card-actions>
                </v-card-text>
            </v-card>

            <!-- Two smaller cards below -->
            <v-row>
                <v-col cols="6">
                    <v-card class="my-card"
                        style="height: 225px; width: 200px;  margin-top: 0px; margin-left:0px; margin-right: 0px; margin-bottom: 0px;">
                        <!-- Content for the first smaller card -->
                        <v-card-title class="card-title">
                            <label style="font-size: x-large">$35.4k</label>
                        </v-card-title>
                        <!-- <div class="viz" style="height: 80px;  margin-left: 25px; "> -->
                        <v-card-actions>
                            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                <!-- Your custom SVG code goes here -->
                                <path id="wiggle" d="M 10 80
           C 25 20, 50 30, 65 60
           S 80 90, 95 20
           L 95 20
           M 95 20
           m -5 0
           a 5 5 0 1 0 10 0
           a 5 5 0 1 0 -10 0 " stroke=" blueviolet" stroke-width="3" fill="transparent" />
                            </svg>
                        </v-card-actions>
                        <label style="margin-left: 40px;">Total Revenue</label>
                    </v-card>
                </v-col>

                <v-col cols="6">
                    <v-card class="my-card"
                        style="height: 225px; width: 200px;  margin-bottom: 0px;  margin-top: 0px; margin-left:0px; margin-right: 0px;">
                        <!-- Content for the second smaller card -->
                        <v-card-actions class="card-title">
                            <label style="font-size: x-large">135k</label>
                        </v-card-actions>
                        <v-card-actions>
                            <div class="progress" style="margin-top: 25px; margin-left: 30px;">
                                <div class="barOverflow">
                                    <div class="bar"></div>
                                </div>
                                <span>56.5%</span>
                            </div>
                        </v-card-actions>
                        <label style="margin-left: 40px;">Total Sales</label>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style>
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

        donougtChart

    },
};
</script>

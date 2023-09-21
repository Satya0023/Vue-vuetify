<template>
    <div style="background-color:#F8F8FF;">
        <v-container
            style="width: 370px; height: 400px;   background-color:#F8F8FF; box-shadow: none; margin: 0; padding: 0; color: transparent;">


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
            <!-- Large card at the top -->
            <v-card class="my-card" width="450px"
                style="height: 192px; margin-bottom: 0px;  margin-left:0px; margin-right: 0px;">
                <!-- Content for the large card -->

                <div style="margin-left: 250px; margin-bottom: 5px; position: absolute; z-index: 5; ">
                    <donougtChart />

                </div>
                <!-- Card content -->
                <v-card-title class="card-title">
                    New Visitors
                </v-card-title>
                <v-card-actions>

                </v-card-actions>
                <v-card-text>
                    <p>48% new visitors
                        this week</p>
                    <v-card-actions>
                        <label style="font-size: x-large; color: rgb(65, 57, 57);">25,980</label>
                        <v-icon style="color: green;">mdi-chevron-up</v-icon>
                        <label style="color: green;"> 38 %</label>
                    </v-card-actions>
                </v-card-text>
            </v-card>
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

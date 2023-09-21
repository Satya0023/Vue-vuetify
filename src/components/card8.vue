
<template >
    <v-card style="height: 405px ; width: 340px;">

        <v-card-title>
            <label for="" style="font-size: x-large;">Transactions</label>

            <label style="margin-left: 100px;"> <a><v-icon> mdi-dots-vertical </v-icon></a></label>
        </v-card-title>






        <v-card-actions>

            <v-card-item>
                <label style="margin-left: 10px; font-size: xx-large;">
                    4,590
                </label>
                <p>Total traffic </p>
            </v-card-item>

            <!-- <p>Total </p> -->


            <div style="margin-left: 90px;  margin-top: 5px;">
                <svg :width="chartWidth" :height="chartHeight">
                    <!-- Create bars for each data point -->
                    <rect v-for="(dataPoint, index) in data" :key="index" :x="index * (barWidth + barSpacing)"
                        :y="chartHeight - dataPoint * scaleFactor" :width="barWidth" :height="dataPoint * scaleFactor"
                        fill="blueviolet" :rx="barCornerRadius = 12" :ry="barCornerRadius = 10" />
                </svg>
            </div>
        </v-card-actions>
        <div>
            <table class="table">

                <tbody>

                    <tr>
                        <td> <v-icon style="color: green; s;">mdi-circle-medium</v-icon></td>

                        <td>Direct</td>
                        <td>
                            <label style=" color: rgb(65, 57, 57);">86,471</label>


                        </td>
                        <td>
                            <label>15%</label>
                            <v-icon style="color: green;">mdi-chevron-up</v-icon>
                        </td>
                    </tr>

                    <tr>
                        <td> <v-icon style="color: rgba(182, 81, 140, 0.979);" id="vicon">mdi-circle-medium</v-icon></td>

                        <td>Organic Search</td>
                        <td>
                            <label style=" color: rgb(65, 57, 57);">57,484</label>


                        </td>
                        <td>
                            <label>85%</label>
                            <v-icon style="color: green;">mdi-chevron-up</v-icon>
                        </td>
                    </tr>

                    <tr>
                        <td> <v-icon style="color: yellow;" id="vicon">mdi-circle-medium</v-icon></td>

                        <td>Referral
                        </td>
                        <td>
                            <label style=" color: rgb(65, 57, 57);">2,534</label>


                        </td>
                        <td>
                            <label>48%</label>
                            <v-icon style="color: green;">mdi-chevron-up</v-icon>
                        </td>
                    </tr>

                    <tr>
                        <td> <v-icon style="color:red; size: 20px;" id="vicon">mdi-circle-medium</v-icon></td>

                        <td>Mail</td>
                        <td>
                            <label style=" color: rgb(65, 57, 57);">9772</label>


                        </td>
                        <td>
                            <label>50%</label>
                            <v-icon style="color: green;">mdi-chevron-up</v-icon>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </v-card>
</template>

<script>
export default {
    data() {
        return {


            data: [5, 8, 12, 6, 10, 15,], // Sample data for the bars
            chartWidth: 200, // Width of the chart
            chartHeight: 100, // Height of the chart
            barWidth: 10, // Width of each bar
            barSpacing: 15, // Spacing between bars
            scaleFactor: 8, // A scaling factor for the bar heights



        };

    }
}
</script>



<style scoped>
.table {
    border-collapse: collapse;
    width: 100%;
}

.table th,
.table td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid rgb(211, 202, 202);
    text-align: left;
    padding: 14px 5px;
    /* Add horizontal borders */
}

.table th {
    background-color: #f2f2f2;
    font-weight: bold;
}



.v p {
    margin-left: 20px;
    font-size: small;
}

label {
    margin-left: 20px;
    font-size: medium;

}

.account {
    color: blueviolet;
    background-color: rgb(215, 220, 224);
    border-radius: 8px;
    width: 35px;
    height: 35px;
}

.doller {
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

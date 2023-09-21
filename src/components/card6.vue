
<template >
    <v-card style="height: 400px;">
        <!-- <v-row> -->
        <v-card-title>
            <label for="" style="font-size: x-large;">Transactions</label>

            <label style="margin-left: 120px;"> <a><v-icon> mdi-dots-vertical </v-icon></a></label>
        </v-card-title>


        <div class="container">
            <table style="margin-left: 20px; margin-top: 10px; ">

                <tr>
                    <td> <v-icon style="color: pink;" id="vicon">mdi-alpha-p-box-outline</v-icon></td>

                    <label>
                        Paypal
                        <p>Freelance Work</p>
                    </label>
                    <td>
                        <label style="font-size: large; color: rgb(65, 57, 57);">+$2,482</label>
                        <v-icon style="color: green;">mdi-chevron-up</v-icon>

                    </td>


                </tr>
                <tr>
                    <td> <v-icon style="color: green;" id="vicon">mdi-credit-card-outline</v-icon></td>

                    <label>
                        Credit Card

                        <p>Digital Ocean</p>
                    </label>
                    <td>
                        <label style="font-size: large; color: rgb(65, 57, 57);">+$2,482</label>
                        <v-icon style="color: red;">mdi-chevron-down</v-icon>

                    </td>

                </tr>
                <tr>
                    <td> <v-icon large class="doller" style="color: rgb(220, 243, 11);">
                            mdi-credit-card-chip-outline</v-icon>
                    </td>

                    <label>
                        Mastercard
                        <p style="text-align:">Netflix</p>
                    </label>
                    <td>
                        <label style="font-size: large; color: rgb(65, 57, 57);">+$2,482</label>
                        <v-icon style="color: red;">mdi-chevron-down</v-icon>

                    </td>
                </tr>

                <tr>

                    <td> <v-icon large class="doller" style="color: blueviolet;"> mdi-wallet</v-icon> </td>


                    <label>
                        Wallet
                        <p>Mac'D</p>
                    </label>
                    <td>
                        <label style="font-size: large; color: rgb(65, 57, 57);">+$2,482</label>
                        <v-icon style="color: red;">mdi-chevron-down</v-icon>

                    </td>
                </tr>

                <tr>
                    <td> <v-icon large class="doller" style="background-color: skyblue;"> mdi-finance</v-icon> </td>

                    <label>
                        Transfer
                        <p>Refund</p>
                    </label>
                    <td>
                        <label style="font-size: large; color: rgb(65, 57, 57);">+$2,482</label>
                        <v-icon style="color: green;">mdi-chevron-up</v-icon>

                    </td>
                </tr>


            </table>


        </div>

    </v-card>
</template>
<script>

</script>

<style scoped>
#fonts {
    font-size: small;
}




p {
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

#vicon {
    color: rgb(147, 238, 147);
    background-color: rgb(222, 238, 222);
    width: 35px;
    height: 38px;
    border-radius: 8px;
}
</style>

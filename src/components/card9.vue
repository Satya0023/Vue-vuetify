<template>
    <div style="width: 640px;">
        <table class="custom-table">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th><v-icon>mdi-trending-up</v-icon></th>
                    <th>CLIENT</th>
                    <th class="spacer"></th>
                    <th>TOTAL</th>
                    <th>BALANCE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a class="custom-link">#5036</a></td>
                    <td>
                        <v-avatar color="" size="32">
                            <v-icon color="green">mdi-check</v-icon>
                        </v-avatar>
                    </td>
                    <td>
                        <div class="avatar-container">
                            <v-avatar color="orange" size="40">
                                <img src="../assets/tavtar.png">
                            </v-avatar>
                            <div class="text-container">
                                <p class="name">Andrew Burns</p>
                                <p class="email">pwillis@cross.org</p>
                            </div>
                        </div>
                    </td>
                    <td class="space"></td>
                    <td><label>$3171</label></td>
                    <td><label>$205</label></td>
                </tr>
                <tr>
                    <td><a class="custom-link">#5035</a></td>
                    <td>
                        <v-avatar color="#DFDCD9" size="32">
                            <v-icon color="#B6AFA9">mdi-email-newsletter</v-icon>
                        </v-avatar>
                    </td>
                    <td>
                        <div class="avatar-container">
                            <v-avatar color="#F2EEEE" size="40">
                                <label>DC</label>
                            </v-avatar>
                            <div class="text-container">
                                <p class="name">Dana Carey</p>
                                <p class="email">jamesjoel@chapman.ne</p>
                            </div>
                        </div>
                    </td>
                    <td class="space"></td>
                    <td><label>$3171</label></td>
                    <td><label class="elips">Paid</label></td>
                </tr>
                <!-- Add more rows as needed -->
                <tr>
                    <td><a style="color: blueviolet;">#5034</a></td>
                    <td>
                        <v-avatar color="#FBB782" size="32">
                            <v-icon color="#FF6103">mdi-chart-timeline-variant</v-icon>
                        </v-avatar>
                    </td>

                    <td>
                        <div class="avatar-container">
                            <v-avatar color="green" size="40">
                                <label>TS</label>
                            </v-avatar>
                            <div class="text-container">
                                <p style="margin: 0;">Tammy Sanchez
                                </p>
                                <p style="margin: 0px;font-size: small;">eric47@george-castillo.com </p>
                            </div>
                        </div>
                    </td>
                    <td class="space"></td>
                    <td><label>$3171</label></td>
                    <td><label class="elips">paid</label></td>

                </tr>
                <tr>
                    <td><a style="color: blueviolet;">#5033</a></td>
                    <td>
                        <v-avatar color="#EA9090" size="32">
                            <v-icon color="red">mdi-alert-circle-outline</v-icon>
                        </v-avatar>
                    </td>

                    <td>
                        <div class="avatar-container">
                            <v-avatar color="orange" size="40">
                                <img src="../assets/tavtar2.png">
                            </v-avatar>
                            <div class="text-container">
                                <p style="margin: 0;">Lori Wells
                                </p>
                                <p style="margin: 0;font-size: small;">pwillis@cross.org </p>
                            </div>
                        </div>
                    </td>
                    <td class="space"></td>
                    <td><label>$3171</label></td>
                    <td><label class="elips">Paid</label></td>

                </tr>
                <tr>
                    <td><a style="color: blueviolet;"> #5032</a></td>
                    <td>
                        <v-avatar color="#FBB782" size="32">
                            <v-icon color="#FF6103">mdi-chart-timeline-variant</v-icon>
                        </v-avatar>
                    </td>

                    <td>
                        <div class="avatar-container">
                            <v-avatar color="orange" size="40">
                                <lable>RP</lable>
                            </v-avatar>
                            <div class="text-container">
                                <p style="margin: 0;">Andrew Burns </p>
                                <p style="margin: 0;font-size: small;">pwillis@cross.org </p>
                            </div>
                        </div>
                    </td>
                    <td class="space"></td>
                    <td><label>$3171</label></td>
                    <td><label class="elips">Paid</label></td>

                </tr>
                <tr>
                    <td><a style="color: blueviolet;">#5031</a></td>
                    <td>
                        <v-avatar color="#DFDCD9" size="32">
                            <v-icon color="#B6AFA9">mdi-email-newsletter</v-icon>
                        </v-avatar>
                    </td>

                    <td>
                        <div class="avatar-container">
                            <v-avatar color="orange" size="40">
                                <img src="../assets/tavtar3.png">
                            </v-avatar>
                            <div class="text-container">
                                <p style="margin: 0;">Andrew Burns </p>
                                <p style="margin: 0;font-size: small;">pwillis@cross.org </p>
                            </div>
                        </div>
                    </td>
                    <td class="space"></td>
                    <td><label>$3171</label></td>
                    <td><label class="elips">Paid</label></td>

                </tr>
                <tr>
                    <td><a style="color: blueviolet;">#5030</a></td>
                    <td>
                        <v-avatar color="#D9FF97" size="32">
                            <v-icon color="green">mdi-check</v-icon>
                        </v-avatar>
                    </td>

                    <td>
                        <div class="avatar-container">
                            <v-avatar color="#E6E4E4" size="40">
                                <label>JR</label>
                            </v-avatar>
                            <div class="text-container">
                                <p style="margin: 0;">Nicholas Tanner
                                </p>
                                <p style="margin: 0;font-size: small;">desiree61@kelly.com</p>
                            </div>
                        </div>
                    </td>
                    <td class="space"></td>
                    <td><label>$3171</label></td>
                    <td><label class="elips">Paid</label></td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    // Your component logic here
};
</script>

<style>
.elips {
    display: inline-block;
    padding: 10px;
    border-radius: 50%;
    background-color: rgb(221, 255, 221);
    color: #68fa20;
    text-align: center;
    width: 60px;
    height: 35px;
}

.custom-link {
    color: blue;
    text-decoration: none;
}

.spacer {
    width: 10px;
}

.custom-table th,
.custom-table td {
    padding: 5px;
    margin: 5px !important;
    text-align: left;
    border-bottom: 1px solid rgb(206, 201, 201);
}

.custom-table td {
    margin: 15px;
    padding: 8px;
    font-size: small;
}

.custom-table th {
    background-color: #f2f2f2;
    font-weight: bold;
    margin: 5px !important;
    padding: 21.5px;
    text-align: left;
    border-bottom: 1px solid rgb(206, 201, 201);
}

/* Add your CSS styles for the table here */
table {
    width: 320px;
    border-collapse: collapse;
}

table,
th {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.details {
    padding: 10px;
}

img {
    max-width: 100px;
}

.avatar-container {
    display: flex;
    align-items: center;
}

.text-container {
    margin-left: 10px;
}

.name,
.email {
    margin-bottom: 5px;
}
</style>

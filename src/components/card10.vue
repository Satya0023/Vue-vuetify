<template>
    <v-card class="rounded-card">
        <v-card-title>
            <label for="" class="card-title">Transactions</label>
            <label class="card-options">
                <a @click="openExternalWebsite">
                    <v-icon>mdi-dots-vertical</v-icon>
                </a>
            </label>
        </v-card-title>
        <v-simple-table class="custom-tables">
            <template v-slot:default>
                <tbody>
                    <tr>
                        <td>
                            <div class="avatar-container">
                                <v-avatar color="orange" size="40">
                                    <img src="../assets/girl.png">
                                </v-avatar>
                                <div class="text-container">
                                    <p class="text-truncate">Call with Woods</p>
                                    <p class="text-truncate">
                                        <v-icon>mdi-calendar-blank</v-icon>21 Jul | 08:20-10:30
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td class="text-truncate name">
                            <label class="elip">Business</label>
                        </td>
                    </tr>
                    <!-- Add more rows as needed -->
                    <tr>
                        <td>
                            <div class="avatar-container">
                                <v-avatar color="orange" size="40">
                                    <img src="../assets/girl.png">
                                </v-avatar>
                                <div class="text-container">
                                    <p class="text-truncate">Call with Woods</p>
                                    <p class="text-truncate"><v-icon>mdi-calendar-blank</v-icon>21 Jul | 08:20-10:30</p>
                                </div>
                            </div>
                        </td>
                        <td class="text-truncate name">
                            <label class="elip" style="color: blueviolet;">Business</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="avatar-container">
                                <v-avatar color="orange" size="40">
                                    <img src="../assets/102.png">
                                </v-avatar>
                                <div class="text-container">
                                    <p class="text-truncate">Call with Woods</p>
                                    <p class="text-truncate"><v-icon>mdi-calendar-blank</v-icon>24 Jul | 11:30-12:00</p>
                                </div>
                            </div>
                        </td>
                        <td class="text-truncate">
                            <label class="elip">Meditation</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="avatar-container">
                                <v-avatar color="orange" size="40">
                                    <img src="../assets/tavtar.png">
                                </v-avatar>
                                <div class="text-container">
                                    <p class="text-truncate">Meeting with Mark</p>
                                    <p class="text-truncate"><v-icon>mdi-calendar-blank</v-icon>24 Jul | 11:30-12:00</p>
                                </div>
                            </div>
                        </td>
                        <td class="text-truncate">
                            <label class="elip" style="color: rgb(14, 184, 37)">Meetup</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class=" avatar-container">
                                <v-avatar color="orange" size="40">
                                    <img src="../assets/tavtar3.png">
                                </v-avatar>
                                <div class="text-container">
                                    <p class="text-truncate">Meeting in Oakland</p>
                                    <p class="text-truncate"><v-icon>mdi-calendar-blank</v-icon>24 Jul | 11:30-12:00</p>
                                </div>
                            </div>
                        </td>
                        <td class="text-truncate">
                            <label class="elip" style="color: rgb(99, 119, 67)">Business</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="avatar-container">
                                <v-avatar color="orange" size="40">
                                    <img src="../assets/avatar-01.png">
                                </v-avatar>
                                <div class="text-container">
                                    <p class="text-truncate">Call with Woods</p>
                                    <p class="text-truncate"><v-icon>mdi-calendar-blank</v-icon>24 Jul | 11:30-12:00</p>
                                </div>
                            </div>
                        </td>
                        <td class="text-truncate">
                            <label class="elip" style="color: rgb(211, 11, 151)">Meditation</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="avatar-container">
                                <v-avatar color="orange" size="40">
                                    <img src="../assets/avtar-02.png">
                                </v-avatar>
                                <div class="text-container">
                                    <p class="text-truncate">Conference call</p>
                                    <p class="text-truncate"><v-icon>mdi-calendar-blank</v-icon>24 Jul | 11:30-12:00</p>
                                </div>
                            </div>
                        </td>
                        <td class="text-truncate">
                            <label class="elip" style="color: rgb(230, 148, 25)">Meditation</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="avatar-container">
                                <v-avatar color="orange" size="40">
                                    <img src="../assets/tavtar2.png">
                                </v-avatar>
                                <div class="text-container">
                                    <p class="text-truncate">Call with Woods</p>
                                    <p class="text-truncate"><v-icon>mdi-calendar-blank</v-icon>24 Jul | 11:30-12:00</p>
                                </div>
                            </div>
                        </td>
                        <td class="text-truncate">
                            <label class="elip">Meditation</label>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-card>
</template>

<script>
export default {
    // Your component logic here
};
</script>

<style>
.rounded-card {
    border-radius: 10px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
    width: 100%;
}

.card-title {
    font-size: x-large;
}

.card-options {
    margin-left: auto;
}

.custom-tables {
    margin: 20px;
    padding: 10px;
    border-collapse: collapse;
    border: none;
    /* Remove all borders */
    border-collapse: collapse;
    /* Remove border spacing */
    margin-top: 1px;
}

.custom-tables tr {
    margin: 20px;
    padding: 25px;

}

.name {
    margin-left: 150px;
}

.elip {
    display: inline-block;
    border-radius: 40%;
    background-color: rgb(221, 255, 221);
    color: #d5f1c7;
    text-align: center;
    width: 100px;
    height: 30px;
}

.avatar-container {
    margin: 2px;
    padding: 3px;
}

.text-container {
    margin-left: 10px;
    font-size: small;
    /* Adjust as needed */
}

.text-container p {
    margin: 0;
}

.text-truncate {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
}
</style>

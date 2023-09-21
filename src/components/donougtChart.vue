<template>
    <div style="width: 100px; height: 100px;">
        <canvas id="myChart5"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
    mounted() {
        console.log('component mounted');
        const ctx = document.getElementById('myChart5');

        const data = {

            datasets: [
                {
                    label: 'My First Dataset',
                    data: [30, 20, 36,],
                    backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
                    hoverOffset: 4,
                },
            ],
        };

        const myChart5 = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                cutoutPercentage: 100, // Set the radius to 50%
                //circumference: 2 * Math.PI,
                //  rotation: -Math.PI,
                animation: {
                    onComplete: function (animation) {
                        // Display percentage data in the center
                        const chartInstance = animation.chart;
                        const ctx = chartInstance.ctx;
                        const centerX = (chartInstance.chartArea.left + chartInstance.chartArea.right) / 2;
                        const centerY = (chartInstance.chartArea.top + chartInstance.chartArea.bottom) / 2;
                        const fontSize = 15; // Adjust font size as needed

                        // Get the total of all dataset values
                        const total = data.datasets[0].data.reduce((acc, value) => acc + value, 0);

                        // Calculate the percentage to display
                        const percentage = ((data.datasets[0].data[0] / total) * 100).toFixed(0);

                        // Display the percentage in the center
                        ctx.font = `${fontSize}px Arial`;
                        ctx.fillStyle = 'black'; // Adjust the color as needed
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillText(percentage + '%', centerX, centerY);
                    },
                },
            },
        });
        myChart5;
    },
};
</script>


const ctx3 = document.getElementById('lineChart');

new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['0', '20', '40', '60', '80', '100'],

        datasets: [
        {
            label: 'Jumanji: Welcome to the Jungle',
            data: [0, 248000000, 337000000, 374000000, 396000000, 400000000],
            borderWidth: 1,
        }, 
        {
            label: 'Jumanji: The Next Level',
            data: [0, 203000000, 274000000, 298000000, 313000000, 316000000],
            borderWidth: 1,
        },
        {
            label: 'Jumanji',
            data: [0, 60000000, 82000000, 90000000, 93000000, 94000000],
            borderWidth: 1,
        }
        ]
    
    

    },

});
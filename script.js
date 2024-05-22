document.addEventListener('DOMContentLoaded', function () {
    const dailySelector = document.querySelector('.daily-selector');
    const weeklySelector = document.querySelector('.weekly-selector');
    const monthlySelector = document.querySelector('.monthly-selector');
    
    const dailyElements = document.querySelectorAll('.daily');
    const weeklyElements = document.querySelectorAll('.weekly');
    const monthlyElements = document.querySelectorAll('.monthly');
    
    function showDaily() {
        dailySelector.style.color = '#ffffff';
        weeklySelector.style.color = 'hsl(236, 100%, 87%)';
        monthlySelector.style.color = 'hsl(236, 100%, 87%)';

        dailyElements.forEach(el => el.classList.remove('hidden'));
        weeklyElements.forEach(el => el.classList.add('hidden'));
        monthlyElements.forEach(el => el.classList.add('hidden'));
    }

    function showWeekly() {
        weeklySelector.style.color = '#ffffff';
        dailySelector.style.color = 'hsl(236, 100%, 87%)';
        monthlySelector.style.color = 'hsl(236, 100%, 87%)';

        weeklyElements.forEach(el => el.classList.remove('hidden'));
        dailyElements.forEach(el => el.classList.add('hidden'));
        monthlyElements.forEach(el => el.classList.add('hidden'));
    }

    function showMonthly() {
        monthlySelector.style.color = '#ffffff';
        dailySelector.style.color = 'hsl(236, 100%, 87%)';
        weeklySelector.style.color = 'hsl(236, 100%, 87%)';

        monthlyElements.forEach(el => el.classList.remove('hidden'));
        dailyElements.forEach(el => el.classList.add('hidden'));
        weeklyElements.forEach(el => el.classList.add('hidden'));
    }

    dailySelector.addEventListener('click', showDaily);
    weeklySelector.addEventListener('click', showWeekly);
    monthlySelector.addEventListener('click', showMonthly);
});
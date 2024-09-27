Game.registerMod('justTheBeginning', {
    init: function() {
        // Define the achievement
        Game.Achievements['Creative Mind'] = new Game.Achievement('Creative Mind', 'Unlock this by thinking outside the box!', [10, 1]);
        
        // Set up a condition to unlock the achievement
        var checkAchievement = function() {
            if (Game.cookieClicks >= 1) { // Example condition: click 10,000 times
                Game.Win('Creative Mind'); // Unlock the achievement
                console.log('Achievement Unlocked: Creative Mind');
            }
        };

        // Add the condition check to the game loop
        Game.registerHook('logic', checkAchievement);
    },
    save: function() {
        return '';
    },
    load: function(str) {
        return '';
    }
});

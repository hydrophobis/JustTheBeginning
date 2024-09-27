Game.registerMod('justTheBeginning', {
    init: function() {
        // Add a new achievement called "Triple Click"
        new Game.Achievement('Triple Click', 'Have <b>3</b> cursors.', [0, 0]);

        // Register a logic hook to check the number of cursors
        Game.registerHook('logic', function() {
            if (Game.Objects['Cursor'].amount >= 3) {
                Game.Win('Triple Click'); // Unlocks the achievement when you have 3 cursors
            }
        });

        console.log('CursorAchievementMod loaded!');
    },
    save: function() {
        return ''; // No save data for this mod
    },
    load: function(str) {
        // No saved data to load
    }
});

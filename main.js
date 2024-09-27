import Achievement from './Achievement';
import init from './init';
import load from './load';
import save from './save';

const JustTheBeginning = {
    init,
    save,
    load,
    Achievement,
};

Game.registerMod('Darkys Achievement Package', JustTheBeginning);

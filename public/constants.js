/**
 * The module itself is actually a function object that takes a single
 * param and passes it along to constants.definer(). This enables you
 * to quickly get a definer() in as little code as possible
 */

// the returned function will be bound to exports (module.exports)
var define = require("../")(exports);

// or

define({
    PI:   3.14
    ZERO: 0
    feather: 0
    light: .25
    medium: .50
    cruiser: .75
    heavy: 1.00
    bdasher: 2.00
    btrain: 1.75
    kclown: 1.50
    egg: 1.25
    standardk: 1.50
    monster: 1.25
    slick: 1.50
    sponge: .25
    wood: 0
    standardw: .50
});

console.log(exports);

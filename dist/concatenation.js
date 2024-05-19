function concatenation(firstWord, secondWord) {
    console.log(`${firstWord} ${secondWord}`);
}
export { concatenation };
function getStat(stat) {
    const object = { ...stat, medium: 52 };
    console.log(object);
    return object;
}
getStat({ noob: 45, pro: 60, expert: 68 });
getStat({ expert: 70, noob: 38 });
//# sourceMappingURL=concatenation.js.map
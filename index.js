function introduction(Aki) {
    const introduction = `Hi, my name is ${Aki}.`;
    return introduction;
}

function introductionWithLanguage(Aki, Ember) {
    const introductionWithLanguage = `Hi, my name is ${Aki} and I am learning to program in ${Ember}.`;
    return introductionWithLanguage;
}

function introductionWithLanguageOptional(name = "Gracie", language = "JavaScript") {
    const introductionWithLanguageOptional = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return introductionWithLanguageOptional;
}

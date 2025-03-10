const yaml = require('js-yaml');

const JsonToYaml = (json) => {
    return yaml.dump(json);
}

const YamlToJson = (txt) => {
    return yaml.load(txt);
}

module.exports = {JsonToYaml, YamlToJson};
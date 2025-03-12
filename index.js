const express = require('express');
const {JsonToYaml, YamlToJson} = require('./functions/convertor');
const app = express();
const PORT = 3050;

app.use(express.json());
app.use(express.text());

app.post('/JSONtoYAML', (req, res) => {
    const application = req.headers['content-type'];
    if(application !== 'application/json'||req.body === undefined) {
        res.status(400).send('Bad Request');
        return;
    }

    const yaml = JsonToYaml(req.body);
    res.send(yaml);
    
});
app.post('/YAMLtoJSON', (req, res) => {
    const application = req.headers['content-type'];
    if (application !== "text/plain") {
      res.status(400).send("Bad Request");
      return;
    }

    const json = YamlToJson(req.body);
    res.send(json);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});

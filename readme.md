# JSON-YAML Converter API  

A lightweight Express.js API that converts **JSON to YAML** and **YAML to JSON** efficiently.  

## Features  

- Convert **JSON to YAML**.  
- Convert **YAML to JSON**.  
- Minimal and easy-to-use API.  
- Built with **Express.js** for fast performance.  

## Installation  

1. Clone the repository:  
   ```sh
   git clone https://github.com/mahmoud-s-Khedr/json-yaml-converter.git
   cd json-yaml-converter
   ```
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Start the server:  
   ```sh
   node index.js
   ```
   _(The server runs on port `3050` by default.)_  

## API Endpoints  

### Convert JSON to YAML  
**Endpoint:**  
```
POST /JSONtoYAML
```  
**Headers:**  
```
Content-Type: application/json
```
**Request Body:**  
```json
{
  "name": "John Doe",
  "age": 25
}
```
**Response:**  
```yaml
name: John Doe
age: 25
```

---

### Convert YAML to JSON  
**Endpoint:**  
```
POST /YAMLtoJSON
```  
**Headers:**  
```yaml
Content-Type: text/plain
```
**Request Body:**  
```yaml
name: John Doe
age: 25
```
**Response:**  
```json
{
  "name": "John Doe",
  "age": 25
}
```


## Technology Stack  

- **Node.js**  
- **Express.js**  
- **YAML & JSON processing**  

## License  

This project is licensed under the **MIT License**.
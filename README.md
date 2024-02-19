# Backend Task: Transaction API

This project aims to create an API to manage product transactions using data from a third-party API.

## Data Source

- **Third Party API URL:** [https://s3.amazonaws.com/roxiler.com/product_transaction.json](https://s3.amazonaws.com/roxiler.com/product_transaction.json)
- **Request Method:** GET
- **Response Format:** JSON

## Backend Host

- **Host URL:** [Insert backend host URL here]

## APIs

### Initialize Database

- **Description:** Create API to initialize the database with seed data fetched from the third-party API.

### List Transactions

- **Description:** API to list all transactions with support for search and pagination based on product title, description, and price.
- **Pagination:** Default values: page = 1, per page = 10.

### Statistics

- **Description:** API to retrieve statistics for the selected month, including total sale amount, total sold items, and total unsold items.

### Bar Chart

- **Description:** API to generate a bar chart showing price range and the number of items in each range for the selected month.

### Pie Chart

- **Description:** API to generate a pie chart showing unique categories and the number of items in each category for the selected month.

### Combined Data

- **Description:** API to fetch data from all the above APIs, combine the responses, and send a final combined JSON response.

## Instructions

- All APIs should take a month (any month between January to December) as input.
- The month should be matched against the `dateOfSale` field regardless of the year.

## Frontend Task

Refer to the frontend task description for details on implementing the frontend components using the provided APIs.

## Frontend Host

- **Host URL:** [Insert frontend host URL here]

## Images

Image link related to our web  page
Hosted on  this website (ImgBB — Upload Image — Free Image Hosting)
https://ibb.co/n6v8vML
https://ibb.co/MCx2gkQ
https://ibb.co/Pw3sdky
https://ibb.co/1XXc23Q
https://ibb.co/QdXqvP3
https://ibb.co/dp9VHNx
https://ibb.co/1dtctWz
https://ibb.co/fvbB8pd

## YouTube Video

[![YouTube Video](https://img.youtube.com/vi/YOUR_VIDEO_ID_HERE/0.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE)


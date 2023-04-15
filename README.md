
# HearthInn - Hotel Recommendation and Reservation

This is a hotel recommendation and reservation web application built using ReactJS, NodeJS, Python, and MongoDB. The app provides users with personalized recommendations for hotels based on their preferences for price, location, services, and past stays.

The app uses a mixture of content-based and collaborative filtering to recommend hotels to users. Collaborative filtering finds users with similar profiles to recommend hotels that they have already shown a preference for. This approach is effective for providing personalized recommendations but can suffer from the cold-start problem when it comes to new hotels that have not yet been reviewed or rated by other users.

To overcome this problem, we also use a content-based filtering approach that recommends hotels based on the attributes of the hotel itself, such as views, Wi-Fi, and room types. This approach ensures that new hotels are recommended right away, regardless of whether other users have had a chance to rate them yet.


## Features

- User authentication
- User registration
- Hotel search by location
- Personalized hotel recommendations
- Room reservation
- Invoice generation


## Tech Stack

**Client:** ReactJS, Typescript

**Server:** Node, Express, MongoDB, Python


## Prerequisites

To run this app on your local machine, you will need to have the following installed:

- Python 3.6+
- ReactJS
- Node.js
- Express
- MongoDB


## Installation

Clone the repository:

```bash
  git clone https://github.com/Vixotic/hearthinn-main.git
```

Install the required dependencies

```pip
  yarn install
```
Set up your MongoDB and create a `.env` file with your MongoDB connection string:

```javascript
MONGO=<your-mongodb-connection-string>
```
To run the application server
```bash
cd api
yarn start
```
To run the application at port 3000
```bash
cd client
yarn start
```

## License

This project is licensed under the MIT License. see the
[MIT](https://choosealicense.com/licenses/mit/) file for details.


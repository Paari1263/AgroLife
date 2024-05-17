# AgroLife: Automated Agricultural Management System

## Overview
AgroLife is an innovative agricultural management app designed to automate key farming processes using IoT technology and machine learning. The app integrates sensor data and machine learning models to optimize resource usage and improve crop yield. It provides a user-friendly interface for remote control and monitoring, making modern farming more efficient and sustainable.

## Features
- **Real-Time Sensor Data Monitoring**: Displays data from temperature, soil moisture, and humidity sensors.
- **Automated Manuring System**: Uses a NodeMCU ESP8266 microcontroller to manage nutrient delivery based on soil conditions.
- **Machine Learning Integration**: Analyzes sensor data to optimize agricultural practices and predict needs.
- **Remote Control via Smartphone**: Manage and monitor the system remotely through a user-friendly mobile app.
- **Plant Disease Detection**: Upload plant images to detect diseases and receive treatment recommendations using a pre-trained machine learning model on AWS SageMaker.

## Installation

### Prerequisites
- Node.js
- React Native CLI
- Android Studio / Xcode for mobile app testing
- AWS account with access to SageMaker

### Steps
1. **Clone the Repository**
   ```sh
   git clone https://github.com/username/AgroLife.git
   cd AgroLife
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Configure AWS SDK**
   - Set up your AWS credentials for accessing SageMaker.
   - Update `aws-exports.js` with your SageMaker endpoint and other configurations.

4. **Run the Application**
   ```sh
   npm run web
   # or
   npm start
   ```

## Usage
1. **Dashboard**: View real-time data from connected sensors for temperature, soil moisture, and humidity.
2. **Automated Manuring**: Monitor and control the nutrient delivery system remotely.
3. **Plant Disease Detection**:
   - Navigate to the disease detection section in the app.
   - Upload a clear image of the plant.
   - Receive disease diagnosis and treatment recommendations from the SageMaker model.

## Project Structure
```
AgroLife/
├── android/
├── ios/
├── src/
│   ├── components/
│   ├── screens/
│   ├── services/
│   ├── App.js
│   ├── aws-exports.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.


## Acknowledgements
- Special thanks to the contributors and the open-source community for their invaluable support.
- This project leverages various technologies and frameworks, including React Native, AWS SageMaker, and NodeMCU.

---

By creating AgroLife, we aim to support farmers with technology-driven solutions that promote efficient farming practices and sustainable agriculture. Happy farming! 🌱

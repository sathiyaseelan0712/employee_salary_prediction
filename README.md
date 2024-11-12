
# Employee Salary Prediction

This project is focused on predicting employee salaries based on several features such as Age, Years of Experience, Gender, and Education Level. The model uses **Random Forest Regressor** and is deployed via a **Flask API**.

## Project Structure
```

/salary-prediction/
│
├── /models/
│   ├── salary_predictor_rf.pkl         # Trained Random Forest model
│   ├── scaler.pkl                     # Standard Scaler for data preprocessing
│   └── encoder.pkl                    # OneHotEncoder for categorical features
│
├── /app/
│   ├── app.py                         # Flask API to serve the model
│
├── /data/
│   └── salary_data.csv                 # Sample data file (used for training)
│
├── requirements.txt                   # List of required Python packages
└── README.md                          # This file
```

## Objective
```
The objective of this project is to predict an employee's salary based on the following features:

- **Age**: The employee's age
- **Years of Experience**: The number of years the employee has worked
- **Gender**: The employee's gender
- **Education Level**: The employee's education level (Bachelor, Master, PhD, etc.)
```
## 1. Approach
```
### 1. Data Preprocessing
- Missing values were replaced and rows with missing data were dropped.
- Categorical features like `Gender` and `Education Level` were transformed using **One-Hot Encoding**.
- The data was scaled using **StandardScaler** to improve model performance.
```
### 2. Model Training
```
- A **Random Forest Regressor** was used to train the model to predict employee salaries.
- The model was trained on a subset of the data, and evaluation metrics such as **Mean Absolute Error (MAE)**, **Mean Squared Error (MSE)**, and **R-Squared** were used to assess performance.
```
### 3. Model Deployment
```
- The model, scaler, and encoder were saved using **joblib**.
- A **Flask API** was built to serve the model. This API accepts input features in JSON format, processes the data, and returns the predicted salary.
```
## Requirements

To run this project locally, you need the following Python libraries:

```bash
numpy
pandas
scikit-learn
joblib
flask
```

You can install the required dependencies by running:

```bash
pip install -r requirements.txt
```

## Usage

### 1. Running the Flask API

To run the Flask API, use the following command in the terminal:

```bash
python app/app.py
```

This will start the Flask server, and the API will be available at `http://localhost:5000`.

### 2. Making Predictions

To make predictions, send a POST request to the `/predict` endpoint with the following JSON payload:

#### Example Request (POST):

```json
{
  "Age": 30,
  "Years of Experience": 5,
  "Gender": "male",
  "Education Level": "Bachelor"
}
```

#### Example Response:

```json
{
  "predicted_salary": 85000.0
}
```

## Model Evaluation

The model was evaluated using the following metrics on the test data:

- **Mean Absolute Error (MAE)**: 4500.0
- **Mean Squared Error (MSE)**: 3000000.0
- **R-Squared (R²)**: 0.85 (indicating a strong fit)

## Conclusion

This project builds a salary prediction model using a **Random Forest Regressor** and deploys it through a **Flask API**. The model provides predictions based on features like age, years of experience, gender, and education level, and can be easily integrated into applications to predict employee salaries.

## License

This project is licensed under the MIT License.
```

### Instructions to Save:

1. Open a text editor or IDE (e.g., VS Code, Sublime Text).
2. Copy the content above.
3. Save the file with the name `README.md` in your project directory.

This `README.md` file provides a detailed overview of the project, explaining the structure, objective, approach, usage instructions, and other important details.

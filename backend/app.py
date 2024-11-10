import io
from flask import Flask, request, jsonify, send_file
import joblib
import pandas as pd
from flask_cors import CORS
import matplotlib.pyplot as plt
import seaborn as sns

app = Flask(__name__)
CORS(app)
model = joblib.load('models/salary_predictor_rf.pkl')
scaler = joblib.load('models/scaler.pkl')
encoder = joblib.load('models/encoder.pkl')
expected_features = joblib.load('models/expected_features.pkl')
data = pd.read_csv('salary_data.csv')


@app.route('/predict', methods=['POST'])
def predict_salary():
    data = request.get_json()
    print(data)
    age = data.get('Age')
    experience = data.get('Years of Experience')
    education = data.get('Education Level')
    gender = data.get('Gender')

    features_dict = {
        'Age': age,
        'Years of Experience': experience,
        'Education Level_Master\'s': 1 if education == "Master's" else 0,
        'Education Level_PhD': 1 if education == "PhD" else 0,
        'Gender_Male': 1 if gender == "Male" else 0
    }

    features_df = pd.DataFrame([features_dict], columns=expected_features)

    features_scaled = scaler.transform(features_df)

    predicted_salary = model.predict(features_scaled)[0]

    return jsonify({
        'age': age,
        'experience': experience,
        'education': education,
        'gender': gender,
        'predicted_salary': predicted_salary
    })


@app.route('/data', methods=['GET'])
def get_data():
    return jsonify(data.to_json(orient="records"))

@app.route('/data_summary', methods=['GET'])
def get_data_summary():
    summary = data.describe().to_dict()
    return jsonify(summary)

df = data[['Age', 'Gender', 'Education Level', 'Years of Experience']]

@app.route('/api/get-columns', methods=['GET'])
def get_columns():
    columns = df.columns.tolist()
    return jsonify({'columns': columns})

@app.route('/api/generate-plot', methods=['POST'])
def generate_plot():
    data = request.get_json()
    plot_type = data['plotType']
    column1 = data['column1']
    column2 = data['column2']
    plt.figure(figsize=(8, 6))

    if plot_type == 'scatter':
        sns.scatterplot(data=df, x=column1, y=column2)
    elif plot_type == 'box':
        sns.boxplot(data=df, x=column1, y=column2)
    elif plot_type == 'heatmap':
        correlation = df.select_dtypes(include=['float64', 'int64']).corr()
        sns.heatmap(correlation, annot=True, cmap='coolwarm')
    elif plot_type == 'line':
        sns.lineplot(data=df, x=column1, y=column2)
    elif plot_type == 'histogram':
        sns.histplot(df[column1], kde=True)

    img = io.BytesIO()
    plt.savefig(img, format='png')
    img.seek(0)
    return send_file(img, mimetype='image/png')


if __name__ == '__main__':
    app.run(debug=True)

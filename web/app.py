import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle

app = Flask(__name__)

lyric_model = pickle.load(open('static/models/top30_genre_model.sav', 'rb'))




@app.route("/", methods=['GET','POST'])
def index():
    return render_template("index.html")


@app.route("/predict", methods=['GET','POST'])
def predict():

    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = lyric_model.predict(final_features)

    output = round(prediction[0], 2)

    return render_template('predict.html', prediction_text='Sales should be $ {}'.format(output))




if __name__ == "__main__":
    app.run(debug=True)




